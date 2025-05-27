// Importa o framework Express, utilizado para criar rotas e servidores HTTP
const express = require('express');
// Importa o controlador de autenticação que contém a lógica do login com Google
const AuthController = require('../controllers/auth.controller');
// Cria uma instância de roteador do Express
const router = express.Router();
// Define a rota POST /google que chama o método loginWithGoogle do AuthController
router.post('/google', AuthController.loginWithGoogle);
// Exporta o roteador configurado
module.exports = router;
