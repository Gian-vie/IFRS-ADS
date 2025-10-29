import express from "express";
import morgan from "morgan";
const app = express();
// Configuração básica: imprime logs de acesso no terminal
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Servidor com Morgan ativo!");
});
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
