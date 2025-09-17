const express = require('express');
// Importa o framework Express, utilizado para criar o servidor HTTP e gerenciar rotas
const cors = require('cors');
// Importa o middleware que permite o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing)
const helmet = require('helmet');
// Importa o middleware de segurança que adiciona cabeçalhos HTTP para proteger contra ataques comuns
const userRoutes = require('./routes/userRoutes');
// Importa as rotas relacionadas aos usuários
const errorMiddleware = require('./middlewares/errorMiddleware');
// Importa o middleware para tratamento centralizado de erros
const app = express();
// Cria uma instância do aplicativo Express
// Middlewares globais
app.use(cors());
// Habilita o CORS em todas as rotas da aplicação
app.use(helmet());
// Adiciona proteção automática contra vulnerabilidades HTTP
app.use(express.json());
// Permite que o servidor interprete requisições com corpo em formato JSON
// Rotas da aplicação
app.use('/users', userRoutes);
// Define que todas as requisições iniciadas com /users serão encaminhadas para o arquivo userRoutes
// Middleware de tratamento de erros (deve ser adicionado depois das rotas)
app.use(errorMiddleware);
// Middleware que captura e trata erros, enviando respostas ao cliente
module.exports = app;
// Exporta a aplicação configurada para ser utilizada pelo servidor (server.js)