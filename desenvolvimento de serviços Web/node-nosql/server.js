const express = require("express");
const connectDB = require("./config/db");
const usuarioRoutes = require("./routes/usuarioRoutes");
const app = express();
const PORT = 3000;

// Conectar ao MongoDB
connectDB();
// Middleware para interpretação de JSON
app.use(express.json());
// Rotas
app.use("/usuarios", usuarioRoutes);
// Iniciar o servidor
app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});