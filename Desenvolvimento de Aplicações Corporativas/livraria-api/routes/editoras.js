const express = require("express");
const router = express.Router();
const editoraController = require("../controllers/editoraController");
// Rota GET /editoras - lista todas as editoras
router.get("/", editoraController.listar);
// Rota GET /editoras/:id - busca uma editora por ID
router.get("/:id", editoraController.buscarPorId);
// Rota POST /editoras - adiciona nova editora
router.post("/", editoraController.adicionar);
// Rota PUT /editoras/:id - atualiza editora pelo ID
router.put("/:id", editoraController.atualizar);
// Rota DELETE /editoras/:id - remove editora pelo ID
router.delete("/:id", editoraController.deletar);
module.exports = router;
