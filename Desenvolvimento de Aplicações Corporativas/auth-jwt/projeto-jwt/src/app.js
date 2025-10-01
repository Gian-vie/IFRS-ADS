// Importa o módulo Express, para a criação de servidores web com Node.js
const express = require('express');
// Importa a biblioteca cors no seu projeto
const cors = require('cors');
// Importa as rotas responsáveis pela autenticação (login, cadastro, etc.)
const authRoutes = require('./routes/auth.routes');
// Importa as rotas públicas, que não requerem autenticação
const publicRoutes = require('./routes/public.routes');
// Importa as rotas protegidas, que só podem ser acessadas com um token JWT
const protectedRoutes = require('./routes/protected.routes');
// Cria uma instância da aplicação Express
const app = express();
// Habilita CORS para qualquer origem
app.use(cors());
// Habilita o servidor para receber e interpretar requisições com corpo em JSON
app.use(express.json());
// Define o prefixo '/auth' para as rotas de autenticação
app.use('/auth', authRoutes);
// Define o prefixo '/public' para rotas acessíveis sem autenticação
app.use('/public', publicRoutes);
// Define o prefixo '/protected' para rotas que exigem autenticação com JWT
app.use('/protected', protectedRoutes);
// Exporta o app para que ele possa ser utilizado por outros arquivos
module.exports = app;