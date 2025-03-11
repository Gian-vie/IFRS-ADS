// Importa o módulo HTTP
const http = require("http");
// Define a porta do servidor
const PORT = 3000;
// Cria o servidor com uma única rota
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  res.end("Bem-vindo ao nosso Servidor Node.js!");
});
// Inicia o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
