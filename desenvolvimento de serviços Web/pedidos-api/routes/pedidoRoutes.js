const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");

// Rotas para pedido
router.post("/", pedidoController.criarPedido);
router.get("/", pedidoController.listarPedidos);
router.get("/buscar", pedidoController.buscarPedidos); // 🔍 busca com filtros
module.exports = router;
