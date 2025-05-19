require('dotenv').config(); // Carrega variáveis de ambiente
const app = require('./src/app'); // Importa o app já configurado (rotas, middlewares e tratamento de erros)
const PORT = process.env.PORT || 3000;
// Inicia o servidor Express para escutar na porta definida
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});
