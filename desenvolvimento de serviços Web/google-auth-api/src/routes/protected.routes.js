// Importa o framework Express, utilizado para criar rotas
const express = require("express");
// Importa o middleware que verifica se o token JWT é válido
const { authenticateToken } = require("../middlewares/auth.middleware");
// Importa o controlador responsável pelas ações da rota /dashboard
const DashboardController = require("../controllers/dashboard.controller");
// Cria uma nova instância de roteador do Express
const router = express.Router();
// Define a rota GET /dashboard protegida por autenticação
// O middleware authenticateToken verifica se o JWT é válido antes de permitir o acesso
router.get("/", authenticateToken, DashboardController.accessDashboard);
// Exporta o roteador configurado para ser usado em app.js
module.exports = router;
