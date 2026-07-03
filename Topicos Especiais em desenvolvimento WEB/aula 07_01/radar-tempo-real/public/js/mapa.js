// =============================================================================
// mapa.js — Lógica do painel do mapa (visão projetor/desktop)
// =============================================================================
// Este arquivo cuida de duas coisas:
//   1. Inicializar e controlar o mapa com Leaflet.js
//   2. Receber os eventos do servidor via Socket.io e atualizar os marcadores
// =============================================================================


// =============================================================================
// 1. INICIALIZAÇÃO DO MAPA (Leaflet.js)
// =============================================================================

// L.map('id-da-div') → cria o mapa dentro da div com id="mapa"
// setView([lat, lng], zoom) → define o centro inicial e o nível de zoom
const mapa = L.map("mapa").setView([-29.1706, -51.5185], 15);

// L.tileLayer → define a "textura" do mapa (imagens dos blocos/tiles)
// O OpenStreetMap é gratuito e não exige nenhuma API key!
// {s}, {z}, {x}, {y} são variáveis do Leaflet para o sistema de tiles.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);


// =============================================================================
// 2. CONTROLE DE MARCADORES (Pinos no Mapa)
// =============================================================================

// Dicionário: socket.id → objeto Marker do Leaflet
// Mantemos a referência para poder MOVER ou REMOVER o marcador depois.
const marcadores = {};

// Cria um ícone HTML personalizado para cada aluno.
// Usamos DivIcon para ter controle total sobre o visual do pino.
function criarIcone(nome) {
  return L.divIcon({
    className: "", // Remove a classe padrão do Leaflet (evita borda indesejada)
    html: `
      <div style="
        background: #1f6feb;
        border: 3px solid #58a6ff;
        border-radius: 50% 50% 50% 0;
        width: 36px; height: 36px;
        transform: rotate(-45deg);
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.5);
      ">
        <span style="transform: rotate(45deg); font-size: 16px;">👤</span>
      </div>
      <div style="
        margin-top: 2px;
        background: rgba(22,27,34,0.9);
        color: #e6edf3;
        border: 1px solid #30363d;
        border-radius: 6px;
        padding: 2px 6px;
        font-size: 11px;
        font-family: 'Segoe UI', Arial, sans-serif;
        font-weight: bold;
        white-space: nowrap;
        text-align: center;
        box-shadow: 0 1px 4px rgba(0,0,0,0.4);
      ">${nome}</div>
    `,
    iconAnchor: [18, 36],  // Ponto de ancoragem: base do pino toca na coordenada
    popupAnchor: [0, -40], // Popup abre acima do pino
  });
}

// Adiciona um novo marcador ou move um já existente para as novas coordenadas
function adicionarOuMoverMarcador(id, nome, lat, lng) {
  if (marcadores[id]) {
    // *** ALUNO JÁ EXISTE: apenas MOVE o pino ***
    // setLatLng() reposiciona suavemente o marcador — sem recriá-lo.
    // Esta é a mágica do tempo real: o DOM não é reconstruído, só a posição muda!
    marcadores[id].setLatLng([lat, lng]);
  } else {
    // *** ALUNO NOVO: cria o marcador e adiciona ao mapa ***
    const marcador = L.marker([lat, lng], { icon: criarIcone(nome) })
      .addTo(mapa)
      .bindPopup(`<b>👤 ${nome}</b><br>Lat: ${lat.toFixed(5)}<br>Lng: ${lng.toFixed(5)}`);

    marcadores[id] = marcador;
  }
}

// Remove o marcador do mapa quando o aluno desconecta
function removerMarcador(id) {
  if (marcadores[id]) {
    mapa.removeLayer(marcadores[id]); // Remove visualmente do mapa
    delete marcadores[id];            // Remove do dicionário de referências
  }
}


// =============================================================================
// 3. PAINEL LATERAL — Lista de alunos
// =============================================================================

// Espelho dos alunos presentes: id → { nome, temGPS }
const alunosPainel = {};

function atualizarPainel() {
  const lista = document.getElementById("lista-alunos");
  const ids = Object.keys(alunosPainel);

  if (ids.length === 0) {
    lista.innerHTML = '<p style="color:#6e7681; font-size:0.8rem;">Aguardando conexões...</p>';
  } else {
    lista.innerHTML = ids.map((id) => {
      const a = alunosPainel[id];
      const dotClass = a.temGPS ? "status-dot" : "status-dot sem-gps";
      return `<div class="aluno-item">
        <span class="${dotClass}"></span>
        <span>${a.nome}</span>
      </div>`;
    }).join("");
  }

  // Atualiza o contador no header
  document.getElementById("num-alunos").textContent = ids.length;
}


// =============================================================================
// 4. CONEXÃO COM O SERVIDOR VIA SOCKET.IO
// =============================================================================
// io() conecta ao servidor que serviu esta página (mesmo host e porta).
// O script do cliente Socket.io é servido automaticamente pelo servidor Node.js.
const socket = io();

socket.on("connect", () => {
  console.log("✅ Mapa conectado ao servidor. ID:", socket.id);
});

// ---------------------------------------------------------------------------
// EVENTO: "estado-inicial"
// ---------------------------------------------------------------------------
// Recebido quando este cliente se conecta, com snapshot de todos os alunos
// já presentes. Útil se o professor reabrir o mapa sem derrubar o servidor.
socket.on("estado-inicial", (alunos) => {
  console.log("📦 Estado inicial recebido:", alunos);

  for (const [id, dados] of Object.entries(alunos)) {
    alunosPainel[id] = { nome: dados.nome, temGPS: dados.lat !== null };
    if (dados.lat !== null) {
      adicionarOuMoverMarcador(id, dados.nome, dados.lat, dados.lng);
    }
  }
  atualizarPainel();
});

// ---------------------------------------------------------------------------
// EVENTO: "posicao-atualizada"
// ---------------------------------------------------------------------------
// O evento mais importante! Chega a cada nova leitura do GPS de um aluno.
// Payload: { id, nome, lat, lng }
socket.on("posicao-atualizada", (dados) => {
  console.log(`📍 Posição de "${dados.nome}":`, dados.lat, dados.lng);

  alunosPainel[dados.id] = { nome: dados.nome, temGPS: true };
  atualizarPainel();
  adicionarOuMoverMarcador(dados.id, dados.nome, dados.lat, dados.lng);
});

// ---------------------------------------------------------------------------
// EVENTO: "aluno-saiu"
// ---------------------------------------------------------------------------
// Disparado pelo servidor ao detectar desconexão (fechar o navegador, etc.).
// Payload: { id }
socket.on("aluno-saiu", (dados) => {
  const nome = alunosPainel[dados.id]?.nome || "Desconhecido";
  console.log(`❌ Aluno "${nome}" saiu do radar.`);

  delete alunosPainel[dados.id];
  atualizarPainel();
  removerMarcador(dados.id);
});
