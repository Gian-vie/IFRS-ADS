const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteControllers")

router.post("/", clienteController.criarCliente)
router.get("/", clienteController.listarClientes)

module.exports = router;