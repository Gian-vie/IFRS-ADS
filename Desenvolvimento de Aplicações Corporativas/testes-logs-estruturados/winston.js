// Importa a biblioteca Winston, responsável por gerenciar logs
import winston from "winston";
// Cria uma instância de logger configurada
const logger = winston.createLogger({
  // Define o nível mínimo de log a ser registrado (info, warn, error)
  level: "info",
  // Define o formato dos logs combinando timestamp e formato JSON
  format: winston.format.combine(
    winston.format.timestamp(), // adiciona data e hora automaticamente
    winston.format.json() // grava em formato JSON estruturado
  ),
  // Define os destinos (transports) dos logs
  transports: [
    new winston.transports.Console(), // exibe no terminal
    new winston.transports.File({ filename: "logs/app.log" }), // grava em arquivo
  ],
});
// Exemplo de uso:
logger.info("Servidor iniciado com sucesso");
logger.error("Falha ao conectar ao banco de dados");
