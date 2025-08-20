// Importa o framework Express, responsável por criar o servidor e gerenciar as rotas
const express = require("express");
// Inicializa o aplicativo Express
const app = express();
// Importa as rotas do módulo de livros
const livrosRoutes = require("./routes/livros");
// Importa as rotas do módulo de editoras
const editorasRoutes = require("./routes/editoras");
// Middleware do Express para permitir o uso de JSON no corpo das requisições
// (body-parser embutido)
app.use(express.json());
// Usa as rotas de livros com o prefixo /livros
// Exemplo: GET /livros, POST /livros
app.use("/livros", livrosRoutes);
// Usa as rotas de editoras com o prefixo /editoras
// Exemplo: GET /editoras, POST /editoras
app.use("/editoras", editorasRoutes);
// Inicia o servidor e o faz escutar na porta 3000
// Quando estiver rodando, exibe uma mensagem no terminal
app.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000");
});