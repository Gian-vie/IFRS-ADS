// Controlador para listar todos os produtos
function getProdutos(req, res) {
  // Dados simulados de produtos (simula o acesso ao banco de dados)
  const produtos = [
    { id: 1, nome: "Produto A", preco: 50.0 },
    { id: 2, nome: "Produto B", preco: 30.0 },
  ];
  // Define o status de sucesso e envia a lista de produtos como JSON
  res.statusCode = 200;
  res.end(JSON.stringify(produtos));
}
// Controlador para criar um novo produto
function createProduto(req, res) {
  let body = "";
  // Recebe os dados do corpo da requisição em partes (chunks)
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  // Processa os dados após a recepção completa
  req.on("end", () => {
    try {
      const novoProduto = JSON.parse(body); // Converte o corpo da requisição de JSON para um objeto
      novoProduto.id = Date.now(); // Gera um ID único (em uma aplicação real, o banco de dados geraria o ID)
      // Define o status de criação e envia o produto criado como resposta
      res.statusCode = 201;
      res.end(
        JSON.stringify({ message: "Produto criado", produto: novoProduto })
      );
    } catch (error) {
      // Lida com erros de parsing JSON
      res.statusCode = 400;
      res.end(JSON.stringify({ message: "Erro ao processar o produto" }));
    }
  });
}
// Controlador para atualizar um produto
function updateProduto(req, res) {
  const id = req.url.split("/")[3]; // Extrai o ID da URL
  let body = "";
  // Recebe os dados do corpo da requisição em partes (chunks)
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  // Processa os dados após a recepção completa
  req.on("end", () => {
    try {
      const produtoAtualizado = JSON.parse(body); // Converte o corpo da requisição de JSON para um objeto
      produtoAtualizado.id = parseInt(id, 10); // Garante que o ID seja um número inteiro
      // Define o status de sucesso e envia o produto atualizado como resposta
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "Produto atualizado",
          produto: produtoAtualizado,
        })
      );
    } catch (error) {
      // Lida com erros de parsing JSON
      res.statusCode = 400;
      res.end(JSON.stringify({ message: "Erro ao processar o produto" }));
    }
  });
}
// Controlador para deletar um produto
function deleteProduto(req, res) {
  const id = req.url.split("/")[3]; // Extrai o ID da URL
  // Define o status de sucesso e envia uma mensagem confirmando a exclusão
  res.statusCode = 200;
  res.end(JSON.stringify({ message: `Produto com ID ${id} deletado` }));
}
// Exporta os controladores para serem usados em outros módulos
module.exports = {
  getProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
};
