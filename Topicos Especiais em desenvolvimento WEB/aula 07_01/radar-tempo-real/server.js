// =============================================================================
// server.js — Coração do Radar em Tempo Real
// =============================================================================
// Este arquivo é o SERVIDOR da nossa aplicação. Ele tem duas responsabilidades:
//   1. Servir os arquivos HTML estáticos (mapa e mobile) via HTTP (Express)
//   2. Gerenciar a comunicação em tempo real entre os celulares e o mapa (Socket.io)
// =============================================================================

// --- Importações ---
// 'express'   → framework web para criar o servidor HTTP
// 'http'      → módulo nativo do Node para criar o servidor TCP
// 'socket.io' → biblioteca de WebSocket que roda em cima do servidor HTTP
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// --- Inicialização ---
const app = express();                   // Cria a aplicação Express
const server = http.createServer(app);   // Cria o servidor HTTP usando o Express
const io = new Server(server);          // Inicializa o Socket.io DENTRO do servidor HTTP
                                        // (Socket.io precisa "interceptar" o mesmo servidor)

const PORT = 3000;


// =============================================================================
// 1. SERVIDOR DE ARQUIVOS ESTÁTICOS (Express)
// =============================================================================
// Diz ao Express para servir tudo que estiver na pasta "public" automaticamente.
// Quando o aluno acessar http://localhost:3000/mobile.html,
// o Express vai enviar o arquivo public/mobile.html.
app.use(express.static("public"));

// Rota raiz: ao acessar http://localhost:3000, exibe o mapa (visão do professor/projetor)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/mapa.html");
});


// =============================================================================
// 2. GERENCIAMENTO DE CONEXÕES VIA SOCKET.IO
// =============================================================================
// "io.on('connection', ...)" é o ponto de entrada de TUDO relacionado ao WebSocket.
// Cada vez que alguém abre uma página que usa Socket.io, este bloco é executado
// e um objeto 'socket' único para aquele cliente é criado.

// Dicionário em memória: guarda os dados de cada aluno conectado.
// Chave: socket.id (gerado automaticamente pelo Socket.io, ex: "aBc123...")
// Valor: { nome: "João", lat: -29.1, lng: -51.5 }
// Usamos isso para poder reenviar todos os alunos para um recém-chegado.
const alunosConectados = {};

io.on("connection", (socket) => {
  // Este log aparece no terminal do professor sempre que alguém abre a página mobile.
  console.log(`[+] Novo cliente conectado: ${socket.id}`);

  // ---------------------------------------------------------------------------
  // EVENTO: "registrar-aluno"
  // ---------------------------------------------------------------------------
  // Disparado pelo mobile.html quando o aluno digita o nome e clica em "Iniciar".
  // Payload (dados recebidos): { nome: "Nome do Aluno" }
  socket.on("registrar-aluno", (dados) => {
    console.log(`[✓] Aluno registrado: "${dados.nome}" (socket: ${socket.id})`);

    // Salva o aluno no nosso dicionário, usando o socket.id como identificador único.
    alunosConectados[socket.id] = {
      nome: dados.nome,
      lat: null, // Ainda sem posição; será preenchida no evento "atualizar-posicao"
      lng: null,
    };

    // Envia para ESTE aluno a lista de todos os outros já no mapa.
    // Por quê? Para que, ao abrir o mapa no celular (visão secundária), ele já veja todos.
    // socket.emit() → envia SOMENTE para este socket específico.
    socket.emit("estado-inicial", alunosConectados);
  });

  // ---------------------------------------------------------------------------
  // EVENTO: "atualizar-posicao"
  // ---------------------------------------------------------------------------
  // Disparado pelo mobile.html a cada nova leitura do GPS do celular.
  // Payload: { lat: -29.12345, lng: -51.67890 }
  socket.on("atualizar-posicao", (coords) => {
    // Garante que o aluno já foi registrado antes de processar a posição
    if (!alunosConectados[socket.id]) return;

    // Atualiza o dicionário local com as novas coordenadas
    alunosConectados[socket.id].lat = coords.lat;
    alunosConectados[socket.id].lng = coords.lng;

    // *** BROADCAST ***
    // io.emit() → envia para TODOS os clientes conectados (celulares + mapa desktop)
    // Enviamos o socket.id junto para que o mapa saiba QUAL pino atualizar.
    io.emit("posicao-atualizada", {
      id: socket.id,
      nome: alunosConectados[socket.id].nome,
      lat: coords.lat,
      lng: coords.lng,
    });
  });

  // ---------------------------------------------------------------------------
  // EVENTO: "disconnect" (nativo do Socket.io)
  // ---------------------------------------------------------------------------
  // Disparado AUTOMATICAMENTE quando um cliente fecha o navegador, perde conexão,
  // ou navega para outra página. Não precisamos fazer nada no cliente!
  socket.on("disconnect", () => {
    const aluno = alunosConectados[socket.id];
    if (aluno) {
      console.log(`[-] Aluno desconectado: "${aluno.nome}" (socket: ${socket.id})`);

      // Remove o aluno do nosso dicionário de memória
      delete alunosConectados[socket.id];

      // Avisa TODOS os outros clientes que este aluno saiu,
      // para que o mapa possa remover o pino correspondente.
      io.emit("aluno-saiu", { id: socket.id });
    } else {
      console.log(`[-] Cliente desconectado (sem registro): ${socket.id}`);
    }
  });
});


// =============================================================================
// 3. INICIALIZAÇÃO DO SERVIDOR
// =============================================================================
// Usamos 'server.listen' (e não 'app.listen') porque o Socket.io precisa
// estar anexado ao servidor HTTP, não ao Express diretamente.
server.listen(PORT, () => {
  console.log("=================================================");
  console.log(`  🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log("=================================================");
  console.log(`  📺 Mapa (projetor):  http://localhost:${PORT}/`);
  console.log(`  📱 Mobile (alunos):  http://localhost:${PORT}/mobile.html`);
  console.log("-------------------------------------------------");
  console.log("  Para expor via HTTPS (celulares), rode em outro terminal:");
  console.log("  npx localtunnel --port 3000");
  console.log("=================================================");
});
