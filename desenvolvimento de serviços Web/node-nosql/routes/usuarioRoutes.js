const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
router.post("/", usuarioController.criarUsuario);
router.get("/", usuarioController.obterUsuarios);
router.put("/:id", usuarioController.atualizarUsuario);
router.delete("/:id", usuarioController.deletarUsuario);
module.exports = router;
