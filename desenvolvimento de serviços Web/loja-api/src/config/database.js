const mysql = require('mysql2/promise');
require('dotenv').config();
// Cria a conexão com o banco
const pool = mysql.createPool({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    whaitForConnections: false,
    connectionLimit: 10 ,
    queueLimit: 0,
})
module.exports = pool;