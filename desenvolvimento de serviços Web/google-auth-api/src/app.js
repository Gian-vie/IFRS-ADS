// Importa o framework Express, utilizado para criar a aplicação e configurar rotas
const express = require('express');
// Importa as rotas de autenticação (ex: login com Google)
const authRoutes = require('./routes/auth.routes');
// Importa as rotas protegidas (ex: painel do usuário autenticado)
const protectedRoutes = require('./routes/protected.routes');
// Cria a instância principal da aplicação Express
const app = express();
// Middleware que permite ao app interpretar requisições com corpo JSON
app.use(express.json());
// Aponta o caminho /auth para as rotas de autenticação
app.use('/auth', authRoutes);
// Aponta o caminho /dashboard para as rotas protegidas por autenticação
app.use('/dashboard', protectedRoutes);
// Exporta o app configurado para ser utilizado em server.js
module.exports = app;
