const winston = require("winston");
// Formato base: adiciona timestamp e captura stack de erros
const baseFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }) // mostra o stack trace em erros
);
// Formato para ambiente de desenvolvimento (colorido e legível)
const devConsoleFormat = winston.format.combine(
  baseFormat,
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;
    return `[${timestamp}] ${level}: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta) : ""
    }`;
  })
);
// Criação do logger principal
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info", // nível mínimo de log
  format: baseFormat, // formato padrão
  transports: [
    // Transporte 1: saída no console (ideal para desenvolvimento e produção)
    new winston.transports.Console({
      format:
        process.env.NODE_ENV === "development"
          ? devConsoleFormat
          : winston.format.json(),
    }),
    // Transporte 2: grava logs em arquivo local (opcional)
    new winston.transports.File({
      filename: "logs/app.log",
      format: winston.format.json(),
      level: "info",
      maxsize: 5 * 1024 * 1024, // 5 MB
      maxFiles: 3, // mantém até 3 arquivos de log
    }),
  ],
});
// Exporta o logger para uso em outros módulos
module.exports = { logger };
