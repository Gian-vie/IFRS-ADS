const express = require("express");
const connectDB = require("./config/db");

const jogadoresRoutes = require("./routes/jogadoresRoutes");
const jogoRoutes = require("./routes/jogoRoutes");

const app = express();
const PORT = 3001;

connectDB();
app.use(express.json());

app.use("/jogadores", jogadoresRoutes);
app.use("/jogos", jogoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});