const { logger } = require("../logger");
/**
 * Este middleware é executado quando ocorre um erro durante o processamento.
 */
function errorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;
  // Dados a serem registrados no log
  const logPayload = {
    requestId: req.requestId,
    method: req.method,
    url: req.originalUrl || req.url,
    status,
    stack: err.stack, // pilha de erro (útil para debug)
    name: err.name,
  };
  // Define o nível de log com base no tipo de erro
  const level = status >= 500 ? "error" : "warn";
  logger.log({ level, message: "request:error", ...logPayload });
  // Retorna resposta padronizada ao cliente
  res.status(status).json({
    error: status >= 500 ? "Internal Server Error" : err.message || "Error",
    requestId: req.requestId, // permite rastrear o erro no log
  });
}
module.exports = { errorHandler };
