const express = require("express");
const router = express.Router();
const connection = require("../config/db");

//  GET /jogadores – listar todos os jogadores.
router.get("/", (req, res) => {
    connection.query("SELECT * FROM jogadores", (err, results) => {
      if (err) {
        res.status(500).send("Erro ao buscar jogadores");
        console.error("Erro", err);
        return;
      }
      res.json(results);
    });
  });

//  POST /jogadores – cadastrar um novo jogador.
router.post("/", (req, res) => {
    const { nome, nickname } = req.body
    const sql = "INSERT INTO jogadores (nome, nickname) VALUES (?, ?)";
    connection.query(sql, [nome, nickname], (err, results) => {
        if (err) {
            res.status(500).send("Erro ao inserir jogador");
            console.error("Erro:", err);
            return;
          }
          res.status(201).send("Jogador inserido com sucesso");
    })
})

// ○ id
// ○ nome
// ○ nickname (único no banco de dados)

module.exports = router;
