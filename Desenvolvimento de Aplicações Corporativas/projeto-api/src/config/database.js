const mysql = require("mysql2/promise");
require("dotenv").config();

// Cria a conexão com o banco
const pool = mysql.createPool({
host: process.env.DB_HOST, // Endereço do servidor de banco
user: process.env.DB_USER, // Usuário para conectar no banco
password: process.env.DB_PASSWORD, // Senha do usuário
database: process.env.DB_DATABASE, // Nome do banco que será usado
waitForConnections: true, // Faz a conexão aguardar caso todas as conexões estejam ocupadas
connectionLimit: 10, // Limita o número máximo de conexões simultâneas
queueLimit: 0 // Número máximo de requisições enfileiradas (0 = sem limite)
});
module.exports = pool;