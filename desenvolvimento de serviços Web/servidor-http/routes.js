const {
  getProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
} = require("./controllers/produtosController");
function handleRequest(req, res) {
  res.setHeader("Content-Type", "application/json");
  const routeKey = `${req.method} ${req.url}`;
  switch (true) {
    case routeKey === "GET /api/produtos":
      getProdutos(req, res); // Listar produtos
      break;
    case routeKey === "POST /api/produtos":
      createProduto(req, res); // Criar produto
      break;
    case req.url.startsWith("/api/produtos/") && req.method === "PUT":
      updateProduto(req, res); // Atualizar produto
      break;
    case req.url.startsWith("/api/produtos/") && req.method === "DELETE":
      deleteProduto(req, res); // Deletar produto
      break;
    default:
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Rota não encontrada" })); // Responde com 404 para rotas não encontradas
      break;
  }
}
module.exports = { handleRequest };
