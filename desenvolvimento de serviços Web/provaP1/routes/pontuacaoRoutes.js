const express = require("express");
const router = express.Router();
const connection = require("../config/db");

//  POST/pontuacoes – cadastrar uma nova pontuação (deve verificar se o jogo e o
// jogador existem).
router.post("/", (req, res) => {
  const { idJogo, idJogador, pontuacao } = req.body;
  if (!idJogo || !idJogador || pontuacao === undefined) {
    return res
      .status(400)
      .send(
        "Dados incompletos: idJogo, idJogador e pontuacao são obrigatórios."
      );
  }
  if (pontuacao < 0) {
    return res
      .status(400)
      .send(
        "Dados de pontuação invalidos: pontuacao não pode ser negativa."
      );
  }

  const veriJogo = "SELECT id FROM jogos WHERE id = ?";
  connection.query(veriJogo, [idJogo], (err, results) => {
    if (err) {
      console.error("Erro ao verificar jogo:", err);
      return res.status(500).send("Erro ao verificar jogo.");
    }
    if (results.length === 0) {
      return res.status(404).send("Jogo não encontrado.");
    }

    // Verificar se o jogador existe
    const veriJogador = "SELECT id FROM jogadores WHERE id = ?";
    connection.query(veriJogador, [idJogador], (err, results) => {
      if (err) {
        console.error("Erro ao verificar jogador:", err);
        return res.status(500).send("Erro ao verificar jogador.");
      }
      if (results.length === 0) {
        return res.status(404).send("Jogador não encontrado.");
      }

      // Inserir a pontuação
      const inserirPontuacao = `
                INSERT INTO pontuacoes (idJogo, idJogador, pontuacao)
                VALUES (?, ?, ?)
            `;
      connection.query(
        inserirPontuacao,
        [idJogo, idJogador, pontuacao],
        (err, result) => {
          if (err) {
            console.error("Erro ao inserir pontuação:", err);
            return res.status(500).send("Erro ao inserir pontuação.");
          }
          res.status(201).send("Pontuação cadastrada com sucesso!");
        }
      );
    });
  });
});

//  GET/ranking/:idJogo – listar os 10 jogadores com as maiores pontuações para um
// jogo específico.
router.get("/ranking/:idJogo", (req, res) => {
    const { idJogo } = req.params;

    const sql = `
        SELECT jogadores.nome AS jogadorNome, pontuacoes.pontuacao
        FROM pontuacoes
        INNER JOIN jogadores ON pontuacoes.idJogador = jogadores.id
        WHERE pontuacoes.idJogo = ?
        ORDER BY pontuacoes.pontuacao DESC
        LIMIT 10
    `;

    connection.query(sql, [idJogo], (err, results) => {
        if (err) {
            console.error("Erro ao buscar ranking:", err);
            return res.status(500).send("Erro ao buscar ranking.");
        }

        res.status(200).json(results);
    });

})

//  Rota GET /jogos/populares – retornar os 3 jogos com maior número de pontuações
// registradas.

router.get("/jogos/populares", (req, res) => {
    const { idJogador, idJogo } = req.params;

    const sql = `
        SELECT jogos.nome AS jogoNome, COUNT(pontuacoes.id) AS totalPontuacoes
        FROM pontuacoes
        INNER JOIN jogos ON pontuacoes.idJogo = jogos.id
        GROUP BY pontuacoes.idJogo
        ORDER BY totalPontuacoes DESC
        LIMIT 3
    `;
    connection.query(sql, [idJogo], (err, results) => {
        if (err) {
            console.error("Erro ao buscar jogos populares", err);
            return res.status(500).send("Erro ao buscar jogos populares.")
        }
        res.status(200).json(results);
    })
})

module.exports = router;
