// Carrega as variáveis de ambiente definidas no arquivo .env
require("dotenv").config();
// Importa a aplicação Express já configurada (rotas, middlewares, etc.)
const app = require("./src/app");
// Define a porta onde o servidor vai escutar (usa a definida no .env ou 3000 Fpor padrão)
const PORT = process.env.PORT || 3000;
// Inicia o servidor e imprime no console a URL de acesso
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
