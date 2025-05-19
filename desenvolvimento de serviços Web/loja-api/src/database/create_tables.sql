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