require('dotenv').config() //carrega variaveis de ambiente

const app = require('./src/app')

const PORT = process.env.PORT || 3000;

//inicia o servidor Express para escutar na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});