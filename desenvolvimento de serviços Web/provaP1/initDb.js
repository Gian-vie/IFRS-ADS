const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  multipleStatements: true
});

const sql = `
CREATE DATABASE IF NOT EXISTS exemplo_db;
USE exemplo_db;

CREATE TABLE IF NOT EXISTS jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    plataforma ENUM('Super Nintendo', 'Mega Drive', 'Atari') NOT NULL,
    lancamento YEAR NOT NULL
);

CREATE TABLE IF NOT EXISTS jogadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nickname VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS pontuacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idJogo INT NOT NULL,
    idJogador INT NOT NULL,
    pontuacao INT NOT NULL CHECK (pontuacao >= 0),
    FOREIGN KEY (idJogo) REFERENCES exemplo_db.jogos(id) ON DELETE CASCADE,
    FOREIGN KEY (idJogador) REFERENCES exemplo_db.jogadores(id) ON DELETE CASCADE
);
`;

connection.query(sql, (err, results) => {
  if (err) {
    console.error("Erro ao criar banco de dados:", err);
  } else {
    console.log("Banco de dados e tabelas criados com sucesso!");
  }
  connection.end();
});
