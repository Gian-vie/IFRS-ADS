// ============================================================
//  server.js — Servidor de Chat com WebSockets
//  Stack: Node.js nativo + biblioteca "ws"
// ============================================================

const http = require("http");
const fs = require("fs");
const path = require("path");
const { WebSocketServer } = require("ws");

// -----------------------------------------------------------
// 1. Servidor HTTP — entrega os arquivos estáticos da pasta /public
// -----------------------------------------------------------
const httpServer = http.createServer((req, res) => {
  // Mapeia "/" para "/index.html"
  const filePath = req.url === "/"
    ? path.join(__dirname, "public", "index.html")
    : path.join(__dirname, "public", req.url);

  // Detecta o Content-Type pelo extension
  const ext = path.extname(filePath);
  const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Arquivo não encontrado");
      return;
    }
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "text/plain" });
    res.end(data);
  });
});

// -----------------------------------------------------------
// 2. Servidor WebSocket — montado sobre o mesmo servidor HTTP
// -----------------------------------------------------------
const wss = new WebSocketServer({ server: httpServer });

// Mapa: socket → { username, color }
const clientes = new Map();

// Paleta de cores para os nicknames (estilo mIRC)
const CORES = [
  "#ff6b6b", "#ffd93d", "#6bcb77", "#4ecdc4",
  "#a8dadc", "#f4a261", "#e76f51", "#c77dff",
  "#74b9ff", "#fd79a8",
];

let indiceCor = 0;
function proximaCor() {
  const cor = CORES[indiceCor % CORES.length];
  indiceCor++;
  return cor;
}

// -----------------------------------------------------------
// 3. Funções auxiliares para envio de mensagens
// -----------------------------------------------------------

// socket é a conexção entre servidor e cliente
//envia para um
function enviar(socket, objeto) {
  if (socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(objeto));
  }
}

//envia para todos
function broadcast(objeto) {
  for (const [socket] of clientes) {
    enviar(socket, objeto);
  }
}

function listaUsisrios() {
  return [...clientes.values()].map(c => ({
    username: c.username,
    color: c.color
  }));
}

// -----------------------------------------------------------
// 4. Eventos WebSocket
// -----------------------------------------------------------

wss.on("connection", (socket) => {
  // 4.1. receber mensagem do cliente
  socket.on("message", (dados) => {
    let msg;
    try {
      msg = JSON.parse(dados);

    }catch (e) {
      console.error(`Mensagem [${dados}] invalida:`, e);
      return;
    }

    //tipo entrar
    if (msg.type === "entrar") {
      const Username = String(msg.username).trim().slice(0, 20); // Limita a 20 caracteres

      // Verifica se o nome já está em uso
      
      //registra o cliente
      const cor = proximaCor();
      clientes.set(socket, { username, color: cor });

      //confirma para o proprio cliente
      enviar(socket, {
        type: "confirmacao",
        username: Username,
        color: cor
      });

      //avisa os outros clientes
      broadcast({
        type: "sistema",
        texto: `Beware "${Username}" is here.`,
        usuarios: listaUsisrios()});
    }

    console.log(`: conectado. total: ${clientes.size}`);


  });
});

// -----------------------------------------------------------
// 5. Inicia o servidor
// -----------------------------------------------------------
const PORTA = process.env.PORT || 3000;
httpServer.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
