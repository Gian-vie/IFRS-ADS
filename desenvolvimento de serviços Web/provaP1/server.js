const express = require("express");

const jogadoresRoutes = require("./routes/jogadoresRoutes");
const jogoRoutes = require("./routes/jogoRoutes");
const pontuacaoRoutes = require("./routes/pontuacaoRoutes")

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/jogadores", jogadoresRoutes);
app.use("/jogos", jogoRoutes);
app.use("/pontuacoes", pontuacaoRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});