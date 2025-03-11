const http = require("http");
const { handleRequest } = require("./routes"); // Importa as rotas configuradas
const PORT = 3000;
const server = http.createServer((req, res) => {
 handleRequest(req, res); // Redireciona todas as requisições para esta função
});
server.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});