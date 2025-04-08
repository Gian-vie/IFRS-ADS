const express = require("express");
const connectDB = require("./config/db");

const clienteRoutes = require("./routes/clienteRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");

const app = express();
const PORT = 3001;

connectDB();
app.use(express.json());

app.use("/clietes", clienteRoutes);
app.use("/pedidos", pedidoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});