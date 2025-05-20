const express = require("express");
// Importa o framework Express
const PublicController = require("../controllers/public.controller");
// Importa o controller responsável por lidar com rotas públicas da aplicação
const router = express.Router();
// Cria uma nova instância do roteador do Express para as rotas públicas
router.get("/home", PublicController.home);
// Define a rota GET /home que chama o método home do PublicController
module.exports = router;
// Exporta o roteador configurado para ser utilizado na aplicação
