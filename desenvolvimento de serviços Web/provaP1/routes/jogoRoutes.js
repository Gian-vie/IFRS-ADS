const express = require("express");
const router = express.Router();
const connection = require("../config/db");

// GET /jogos – listar todos os jogos.
router.get("/jogos", (req, res) => {
  connection.query("SELECT * FROM jogos", (err, results) => {
    if (err) {
      res.status(500).send("Erro ao buscar jogos");
      console.error("Erro", err);
      return;
    }
    res.json(results);
  });
});

// GET /jogos/:id – buscar jogo por ID.
router.get("/jogos/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM jogos WHERE id = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao buscar jogos");
      console.error("Erro", err);
      return;
    }
    res.json(results);
  });
});

// POST /jogos – cadastrar novo jogo.
router.post("/jogos", (req, res) => {
    const { nome, plataforma, lancamento } = req.body
    const sql = "INSERT INTO jogos (nome, plataforma, lancamento) VALUES (?, ?, ?)";
    connection.query(sql, [nome, plataforma, lancamento], (err, results) => {
        if (err) {
            res.status(500).send("Erro ao inserir jogo");
            console.error("Erro:", err);
            return;
          }
          res.status(201).send("Jogo inserido com sucesso");
    })
})

// ○ id
// ○ nome
// ○ plataforma (Super Nintendo, Mega Drive, Atari)
// ○ ano de lançamento

// PUT /jogos/:id – atualizar um jogo existente.
router.put("/jogos/:id", (req, res) => {
    const { id } = req.params;
    const { nome, plataforma, lancamento } = req.body
    const sql = "UPDATE jogos  SET name = ?, plataforma = ?, lancamento = ? WHERE id = ?";
    connection.query(sql, [nome, plataforma, lancamento, id], (err, results) => {
        if (err) {
            res.status(500).send("Erro ao atualizar jogo");
            console.error("Erro:", err);
            return;
          }
          if (results.affectedRows === 0) {
            res.status(404).send("Jogo não encontrado");
          } else {
            res.send("Jogo atualizado com sucesso");
          }
    })
})

// DELETE /jogos/:id – excluir um jogo.
router.delete("/jogos/:id", (req, res) => {
    const { id } = req.params;
      const sql = "DELETE FROM jogos WHERE id = ?";
      connection.query(sql, [id], (err, results) => {
        if (err) {
          res.status(500).send("Erro ao deletar jogo");
          console.error("Erro:", err);
          return;
        }
        if (results.affectedRows === 0) {
          res.status(404).send("Jogo não encontrado");
        } else {
          res.send("Jogo deletado com sucesso");
        }
      });
})

module.exports = router;
