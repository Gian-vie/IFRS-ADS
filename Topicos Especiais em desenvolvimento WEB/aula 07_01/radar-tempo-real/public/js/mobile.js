// =============================================================================
// mobile.js — Lógica do rastreador GPS do celular do aluno
// =============================================================================
// Este arquivo gerencia:
//   1. A troca de telas (registro → transmissão)
//   2. A API de Geolocalização do navegador (watchPosition)
//   3. O envio das coordenadas via Socket.io para o servidor
// =============================================================================


// =============================================================================
// 1. CONEXÃO COM O SERVIDOR
// =============================================================================
// io() conecta automaticamente ao servidor que serviu esta página.
// O Socket.io tenta WebSocket primeiro; se falhar, usa long-polling (fallback).
const socket = io();

socket.on("connect",    () => console.log("✅ Conectado ao servidor. Socket ID:", socket.id));
socket.on("disconnect", () => console.log("❌ Desconectado do servidor."));


// =============================================================================
// 2. ESTADO LOCAL
// =============================================================================
let nomeAluno   = "";   // Nome digitado pelo aluno
let watchId     = null; // ID do watchPosition — guardamos para cancelar depois
let totalUpdates = 0;   // Contador de envios (feedback visual na tela)


// =============================================================================
// 3. REFERÊNCIAS AOS ELEMENTOS DA TELA
// =============================================================================
const telaRegistro     = document.getElementById("tela-registro");
const telaTransmitindo = document.getElementById("tela-transmitindo");
const inputNome        = document.getElementById("input-nome");
const btnIniciar       = document.getElementById("btn-iniciar");
const btnParar         = document.getElementById("btn-parar");
const msgErro          = document.getElementById("msg-erro");


// =============================================================================
// 4. FUNÇÕES AUXILIARES
// =============================================================================

function mostrarErro(texto) {
  msgErro.textContent  = "⚠️ " + texto;
  msgErro.style.display = "block";
  btnIniciar.disabled  = false;
}

function irParaTelaTransmitindo() {
  telaRegistro.style.display     = "none";
  telaTransmitindo.style.display = "block";
}

function irParaTelaRegistro() {
  telaRegistro.style.display     = "block";
  telaTransmitindo.style.display = "none";
}


// =============================================================================
// 5. CALLBACK DE SUCESSO DO GPS
// =============================================================================
// Chamada pelo watchPosition a cada nova leitura de posição do dispositivo.
function aoReceberPosicao(posicao) {
  const lat      = posicao.coords.latitude;
  const lng      = posicao.coords.longitude;
  const precisao = posicao.coords.accuracy; // precisão em metros

  // Envia as coordenadas para o servidor via Socket.io.
  // O servidor fará o broadcast para todos (inclusive o mapa no projetor).
  socket.emit("atualizar-posicao", { lat, lng });

  // Atualiza os valores exibidos na tela do celular
  totalUpdates++;
  document.getElementById("display-nome").textContent     = nomeAluno;
  document.getElementById("display-lat").textContent      = lat.toFixed(6);
  document.getElementById("display-lng").textContent      = lng.toFixed(6);
  document.getElementById("display-precisao").textContent = `±${precisao.toFixed(0)}m`;
  document.getElementById("display-updates").textContent  = totalUpdates;
}


// =============================================================================
// 6. CALLBACK DE ERRO DO GPS
// =============================================================================
// Chamada pelo watchPosition quando ocorre qualquer problema com a geolocalização.
function aoErroDeGps(erro) {
  // Erros mais comuns:
  //   1 = PERMISSION_DENIED    → usuário recusou a permissão
  //   2 = POSITION_UNAVAILABLE → sem sinal de GPS
  //   3 = TIMEOUT              → demorou demais para responder
  const mensagens = {
    1: "Permissão de localização negada. Verifique as configurações do navegador.",
    2: "Não foi possível obter sua posição. Verifique o GPS.",
    3: "Tempo esgotado ao obter a localização. Tente novamente.",
  };

  mostrarErro(mensagens[erro.code] || `Erro desconhecido (código ${erro.code}).`);
  irParaTelaRegistro();
}


// =============================================================================
// 7. BOTÃO "INICIAR" — Fluxo principal
// =============================================================================
btnIniciar.addEventListener("click", () => {
  nomeAluno = inputNome.value.trim();

  // Validação do nome
  if (nomeAluno.length < 2) {
    mostrarErro("Por favor, digite seu nome completo (mín. 2 caracteres).");
    return;
  }

  // Desativa o botão para evitar duplo clique enquanto aguarda o GPS
  btnIniciar.disabled    = true;
  msgErro.style.display  = "none";

  // -----------------------------------------------------------------------
  // VERIFICAÇÃO DE SUPORTE À GEOLOCALIZAÇÃO
  // -----------------------------------------------------------------------
  // navigator.geolocation só funciona em HTTPS ou localhost.
  // É por isso que usamos o localtunnel para criar o túnel HTTPS!
  if (!navigator.geolocation) {
    mostrarErro("Seu navegador não suporta geolocalização.");
    return;
  }

  // -----------------------------------------------------------------------
  // REGISTRO NO SERVIDOR
  // -----------------------------------------------------------------------
  // Emite o nome ANTES de iniciar o GPS para que o mapa crie a entrada
  // do aluno imediatamente, mesmo que a primeira posição ainda não chegou.
  socket.emit("registrar-aluno", { nome: nomeAluno });

  // -----------------------------------------------------------------------
  // INICIALIZAÇÃO DO GPS — watchPosition
  // -----------------------------------------------------------------------
  // Diferença fundamental:
  //   getCurrentPosition → obtém UMA posição e para
  //   watchPosition      → fica monitorando CONTINUAMENTE (ideal para rastreamento!)
  //
  // O ID retornado é necessário para cancelar o monitoramento depois (clearWatch).
  watchId = navigator.geolocation.watchPosition(
    aoReceberPosicao,
    aoErroDeGps,
    {
      enableHighAccuracy: true, // Usa GPS de alta precisão (mais lento, mais exato)
      maximumAge: 0,            // Nunca usa posição em cache; sempre busca nova
      timeout: 15000,           // Desiste após 15 segundos sem resposta
    }
  );

  // Troca para a tela de transmissão ativa
  irParaTelaTransmitindo();

  // Impede o celular de bloquear a tela durante a transmissão.
  // Wake Lock API: suportada em Chrome/Edge modernos (falha silenciosa nos demais).
  try {
    navigator.wakeLock?.request("screen");
  } catch (e) {
    // Silencioso: não é crítico se não houver suporte
  }
});


// =============================================================================
// 8. BOTÃO "PARAR" — Encerra a transmissão
// =============================================================================
btnParar.addEventListener("click", () => {
  // Cancela o watchPosition usando o ID salvo na inicialização.
  // Sem isso, o GPS continuaria enviando mesmo após clicar em Parar.
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }

  // Fecha a conexão WebSocket explicitamente.
  // Isso aciona o evento "disconnect" no servidor → pino some do mapa.
  socket.disconnect();

  // Recarrega a página para iniciar uma sessão limpa
  window.location.reload();
});


// =============================================================================
// 9. ENTER NO CAMPO DE NOME
// =============================================================================
// Atalho de teclado: pressionar Enter equivale a clicar em "Iniciar"
inputNome.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnIniciar.click();
});
