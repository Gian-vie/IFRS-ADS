const express = require('express');
// Importa o framework Express
const UserController = require('../controllers/userController');
// Importa o controller responsável por gerenciar as ações de usuário
const router = express.Router();
// Cria uma nova instância de roteador do Express
// Define a rota para listar todos os usuários
router.get('/', UserController.getAll);
// Define a rota para criar um novo usuário
router.post('/', UserController.create);
// Define a rota para atualizar um usuário existente pelo ID
router.put('/:id', UserController.update);
// Define a rota para deletar um usuário pelo ID
router.delete('/:id', UserController.delete);
module.exports = router;
// Exporta o roteador configurado para ser usado no app principal