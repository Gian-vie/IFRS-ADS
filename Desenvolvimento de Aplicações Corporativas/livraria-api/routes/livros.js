const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");
// Rota GET /livros - lista todos os livros
router.get("/", livroController.listar);
// Rota GET /livros/completo - lista livros com editoras
router.get("/completo", livroController.listarComEditoras);
// Rota GET /livros/:id - busca livro por ID
router.get("/:id", livroController.buscarPorId);
// Rota POST /livros - adiciona novo livro
router.post("/", livroController.adicionar);
// Rota PUT /livros/:id - atualiza um livro
router.put("/:id", livroController.atualizar);
// Rota DELETE /livros/:id - remove um livro
router.delete("/:id", livroController.deletar);
module.exports = router;