const express = require('express');
// Importa o framework Express
const ProducController = require('../controllers/productController.js');
// Importa o controller responsável por gerenciar as ações de produtos
const router = express.Router();
// Cria uma nova instância de roteador do Express
// Define as rotas
router.get('/', ProducController.getAll);
router.post('/', ProducController.create);
router.put('/:id', ProducController.update);
router.delete('/:id', ProducController.remove);
module.exports = router;
// Exporta o roteador configurado para ser usado no app principal
