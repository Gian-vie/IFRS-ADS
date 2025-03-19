// importa o modulo express
const express = require("express");

// cria uma instancia do aplicativo express
const app = express();

// define a porta que o servidor irá rodar
const PORT = 3000;

// Middleware para verificar autenticação
const checkAuth = (req, res, next) => {
    const autenticado = true; // Altere para `false` para simular um usuário não
   autenticado
    if (autenticado) {
    next(); // Usuário autenticado, continua para o próximo middleware ou rota
    } else {
    res.status(401).json({ message: "Acesso negado" }); // Usuário não autenticado, responde com erro 401 em JSON
    }
   };
   

//define uma rota GET para o caminho raiz ("/")
app.get("/", (req, res) => {
  //envia uma resposta em JSON para o cliente
  res.json({ mensagem: "Hello, Horld" });
});

//////////////////////

// Rota GET para lostar todos os produtos
// app.get("/produtos", (req, res) => {
//   res.json({ mensagem: "Listando todos os produtos", produtos: [] });
//   //exempcom um aray vazio de produtos
// });

app.get("/produtos/:id?", (req, res) => {
  if (req.params.id) {
    res.send(`Produto ID: ${req.params.id}`);
  } else {
    res.send("Lista de produtos");
  }
});

app.get("/home", (req, res) => {
    res.send("Bem-vindo à página inicial");
   });
   

//rota  POST para criar um novo produto
app.post("/produtos", (req, res) => {
  res.json({
    mensagem: "Criando um novo produto",
    produto: { id: Date.now(), nome: "Produto Exemplo" },
  });
});

//Rota PUT para atualizar um produto por id
app.put("/produto/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    mensagem: "Atualizando o produto",
    produto: { id: id, nome: "Produto Atualizado" },
  });
});

//Rota DELETE para excluir um produto por id
app.delete("/produto/:id", (req, res) => {
  const { id } = req.params;
  res.json({ mensagem: "Excuindo o produto", produtoId: id });
});

//inicia o servidor e faz com que ele escute na porta definida
app.listen(PORT, () => {
  //exibe uma mensagem no console informando que o servidor está em execução
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
