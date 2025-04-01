const express = require("express");
const router = express.Router();
const connection = require("../config/db");
// Rota para listar todos os usuários (READ)
router.get("/", (req, res) => {
  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      res.status(500).send("Erro ao buscar usuários");
      console.error("Erro:", err);
      return;
    }
    res.json(results);
  });
});
// Rota para adicionar um novo usuário (CREATE)
router.post("/", (req, res) => {
  const { nome, idade } = req.body;
  const sql = "INSERT INTO usuarios (nome, idade) VALUES (?, ?)";
  connection.query(sql, [nome, idade], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao inserir usuário");
      console.error("Erro:", err);
      return;
    }
    res.status(201).send("Usuário inserido com sucesso");
  });
});
// Rota para atualizar um usuário (UPDATE)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;
  const sql = "UPDATE usuarios SET nome = ?, idade = ? WHERE id = ?";
  connection.query(sql, [nome, idade, id], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao atualizar usuário");
      console.error("Erro:", err);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Usuário não encontrado");
    } else {
      res.send("Usuário atualizado com sucesso");
    }
  });
});
// Rota para deletar um usuário (DELETE)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM usuarios WHERE id = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao deletar usuário");
      console.error("Erro:", err);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Usuário não encontrado");
    } else {
      res.send("Usuário deletado com sucesso");
    }
  });
});
module.exports = router;
