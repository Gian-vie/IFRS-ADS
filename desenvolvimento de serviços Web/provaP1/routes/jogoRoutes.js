const express = require("express");
const router = express.Router();
const connection = require("../config/db");


// GET /jogos – listar todos os jogos.
router.get("/jogos", (req, res) => {
    connection.query("SELECT * FROM jogo", (err, results) => {
        if(err){
            res.status(500).send("Erro ao buscar jogos");
            console.error("Erro", err);
            return;
        }
        res.json(results)
    })
})


// GET /jogos/:id – buscar jogo por ID.


// POST /jogos – cadastrar novo jogo.
// ○ id
// ○ nome
// ○ plataforma (Super Nintendo, Mega Drive, Atari)
// ○ ano de lançamento

// PUT /jogos/:id – atualizar um jogo existente.

// DELETE /jogos/:id – excluir um jogo.
