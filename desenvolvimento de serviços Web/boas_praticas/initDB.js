const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  multipleStatements: true
});

const sql = `
-- Cria o banco de dados se não existir
CREATE DATABASE IF NOT EXISTS projeto_api_db CHARACTER SET utf8mb4 COLLATE
utf8mb4_unicode_ci;
-- Usa o banco de dados
USE projeto_api_db;
-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 email VARCHAR(150) NOT NULL UNIQUE,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
