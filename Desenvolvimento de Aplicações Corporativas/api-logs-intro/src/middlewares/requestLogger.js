const { v4: uuidv4 } = require("uuid");
const { logger } = require("../logger");
/**
 * Este middleware é executado antes das rotas.
 * Ele registra logs de cada requisição HTTP recebida
 */
function requestLogger(req, res, next) {
  const start = process.hrtime.bigint(); // mede o tempo inicial (em nanossegundos)
  const requestId = uuidv4(); // gera um identificador único para cada requisição
  // Adiciona o requestId à requisição e à resposta (útil para rastrear logs)
  req.requestId = requestId;
  res.setHeader("X-Request-Id", requestId);
  // Informações básicas sobre a requisição
  const baseInfo = {
    requestId,
    method: req.method,
    url: req.originalUrl || req.url,
    ip: req.ip,
    userAgent: req.headers["user-agent"],
  };
  // Log inicial de entrada
  logger.info("request:start", baseInfo);
  // Quando a resposta for enviada, calcula o tempo de execução
  res.on("finish", () => {
    const end = process.hrtime.bigint(); // tempo final
    const durationMs = Number(end - start) / 1_000_000; // converte nanos para milissegundos
    // Define o nível de log com base no status da resposta
    const status = res.statusCode;
    const level = status >= 500 ? "error" : status >= 400 ? "warn" : "info";
    // Monta o log final
    const finishInfo = {
      ...baseInfo,
      status,
      durationMs: Number(durationMs.toFixed(2)),
      contentLength: res.getHeader("content-length"),
    };
    // Registra o log final da requisição
    logger.log({ level, message: "request:finish", ...finishInfo });
  });
  // Continua para o próximo middleware ou rota
  next();
}
// Exporta o middleware
module.exports = { requestLogger };
