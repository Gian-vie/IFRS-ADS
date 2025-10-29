import pino from "pino";
// Cria o logger com nível de log e formato legível no console
const logger = pino({
  level: "info", // nível mínimo de log
  transport: {
    target: "pino-pretty", // formata a saída para facilitar a leitura
  },
});
// Exemplos de uso
logger.info("Servidor iniciado"); // log informativo
logger.error("Erro ao acessar banco de dados"); // log de erro
