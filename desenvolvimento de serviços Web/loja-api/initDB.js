const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  multipleStatements: true,
});

const sql = `
-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS loja_db
 CHARACTER SET utf8mb4
 COLLATE utf8mb4_unicode_ci;

-- Seleciona o banco de dados
USE loja_db;

-- Criação da tabela products
CREATE TABLE IF NOT EXISTS products (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL UNIQUE,
 price DECIMAL(10, 2) NOT NULL CHECK (price > 0),
 stock INT NOT NULL CHECK (stock >= 0),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção de dados de exemplo
INSERT INTO products (name, price, stock) VALUES
('Teclado Mecânico', 299.90, 20),
('Mouse Óptico', 99.90, 50),
('Monitor LED 24"', 899.00, 10),
('Notebook Dell i5', 3999.00, 5);
`;

connection.query(sql, (err, results) => {
  if (err) {
    console.error("Erro ao criar banco de dados:", err);
  } else {
    console.log("Banco de dados e tabelas criados com sucesso!");
  }
  connection.end();
});
