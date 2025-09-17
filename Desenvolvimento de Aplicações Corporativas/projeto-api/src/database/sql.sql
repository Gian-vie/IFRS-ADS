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
-- Inserção de dados fictícios
INSERT INTO users (name, email) VALUES
('João da Silva', 'joao@example.com'),
('Maria Oliveira', 'maria@example.com');