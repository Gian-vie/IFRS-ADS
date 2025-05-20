-- Cria o banco de dados se não existir
CREATE DATABASE IF NOT EXISTS projeto_jwt_db CHARACTER SET utf8mb4 COLLATE
utf8mb4_unicode_ci;
-- Usa o banco de dados
USE projeto_jwt_db;
-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 email VARCHAR(255) NOT NULL UNIQUE,
 password VARCHAR(255) NOT NULL,
 role VARCHAR(50) NOT NULL DEFAULT 'user',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Insere dois tipos de usuários
INSERT INTO users (email, password, role) VALUES
('usuario@ifrs.edu.br',
'$2b$10$382cEJJYi5YxSBNvWmufHeoPHX3dqIB9NP2R2XWzt/w.DnC0gmCr2', 'user'),
('admin@ifrs.edu.br',
'$2b$10$/JLXJ62EBlk1bNq0xmpvMuTLDJb6AWmZUs74lgEJb4Z.J9.3kFJM.', 'admin');





** .env

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=projeto_jwt_db
PORT=3000
JWT_SECRET=segredoSuperSecreto123
