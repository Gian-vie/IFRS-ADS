import express from "express";
import morgan from "morgan";
import winston from "winston";
// Cria um logger Winston estruturado
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs/access.log" })],
});
const app = express();
// Configura o Morgan para enviar logs para o Winston
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);
app.get("/", (req, res) => {
  res.send("Integração entre Morgan e Winston funcionando!");
});
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
