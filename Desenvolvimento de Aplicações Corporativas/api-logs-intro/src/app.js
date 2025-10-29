const express = require("express");
const { requestLogger } = require("./middlewares/requestLogger");
const { errorHandler } = require("./middlewares/errorHandler");
const { logger } = require("./logger");
// Cria a aplicação Express
const app = express();
// Habilita o uso de JSON nas requisições
app.use(express.json());
// Aplica o middleware de logging antes das rotas
app.use(requestLogger);
// Rota simples para verificar o status do servidor
app.get("/health", (req, res) => {
  res.json({ status: "ok", requestId: req.requestId });
});
// Exemplo de rota funcional
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "Ada Lovelace", requestId: req.requestId });
});
// Rota que gera erro propositalmente (para demonstrar o errorHandler)
app.get("/error", (req, res) => {
  throw new Error("Falha simulada no servidor");
});
// Middleware de erro (sempre por último)
app.use(errorHandler);
// Exporta o app e o logger
module.exports = { app, logger };
