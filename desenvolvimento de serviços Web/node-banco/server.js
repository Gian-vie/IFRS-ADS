const express = require("express");
const app = express();
const usuariosRoutes = require("./routes/usuarios");
const PORT = 3000;
// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());
// Configura as rotas para usuários
app.use("/usuarios", usuariosRoutes);
// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
