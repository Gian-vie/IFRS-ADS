// Importando o Express
const express = require("express");
// Criando uma aplicação Express
const app = express();
// Middleware para permitir que o Express entenda JSON
app.use(express.json());
// Middleware para registrar logs das requisições
app.use((req, res, next) => {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} - ${req.url}`);
  next();
});
// Simulação do banco de dados em memória
let cardapio = [
  {
    id: 1,
    nome: "X-Bacon",
    descricao: "Pão, hambúrguer, queijo, bacon, maionese",
    preco: 20.5,
    categoria: "sanduíche",
  },
  {
    id: 2,
    nome: "X-Salada",
    descricao: "Pão, hambúrguer, queijo, alface, tomate, maionese",
    preco: 18.0,
    categoria: "sanduíche",
  },
  {
    id: 3,
    nome: "Batata Frita",
    descricao: "Porção de batatas fritas crocantes",
    preco: 12.0,
    categoria: "acompanhamento",
  },
];
// Rota para obter todos os lanches (com suporte a filtros)
app.get("/cardapio", (req, res) => {
  const { categoria } = req.query;
  if (categoria) {
    const filtrados = cardapio.filter(
      (item) => item.categoria.toLowerCase() === categoria.toLowerCase()
    );
    return res.json(filtrados);
  }
  res.json(cardapio);
});
// Rota para obter um lanche por ID
app.get("/cardapio/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lanche = cardapio.find((item) => item.id === id);
  if (!lanche) {
    return res.status(404).json({ erro: "Lanche não encontrado" });
  }
  res.json(lanche);
});
// Rota para adicionar um novo lanche
app.post("/cardapio", (req, res) => {
  const { nome, descricao, preco, categoria } = req.body;
  if (!nome || !descricao || !preco || !categoria) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }
  if (preco <= 0) {
    return res.status(400).json({ erro: "O preço deve ser positivo" });
  }
  const novoLanche = {
    id: cardapio.length + 1,
    nome,
    descricao,
    preco,
    categoria,
  };
  cardapio.push(novoLanche);
  res.status(201).json(novoLanche);
});
// Rota para atualizar um lanche existente
app.put("/cardapio/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, descricao, preco, categoria } = req.body;
  const index = cardapio.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: "Lanche não encontrado" });
  }
  if (!nome || !descricao || !preco || !categoria) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }
  if (preco <= 0) {
    return res.status(400).json({ erro: "O preço deve ser positivo" });
  }
  cardapio[index] = { id, nome, descricao, preco, categoria };
  res.json(cardapio[index]);
});
// Rota para deletar um lanche por ID
app.delete("/cardapio/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = cardapio.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: "Lanche não encontrado" });
  }
  cardapio.splice(index, 1);
  res.status(204).send();
});
// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
