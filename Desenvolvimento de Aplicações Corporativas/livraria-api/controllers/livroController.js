const livroModel = require("../models/livroModel");
// Lista todos os livros
exports.listar = (req, res) => {
  livroModel.buscarTodos((err, results) => {
    if (err) return res.status(500).send("Erro ao listar livros");
    res.json(results); // Retorna os livros como JSON
  });
};
// Lista livros com informações da editora (JOIN)
exports.listarComEditoras = (req, res) => {
  livroModel.listarComEditoras((err, results) => {
    if (err) return res.status(500).send("Erro ao listar livros com editoras");
    res.json(results);
  });
};
// Busca um livro pelo ID
exports.buscarPorId = (req, res) => {
  livroModel.buscarPorId(req.params.id, (err, results) => {
    if (err) return res.status(500).send("Erro ao buscar livro");
    if (results.length === 0)
      return res.status(404).send("Livro não encontrado");
    res.json(results[0]);
  });
};
// Adiciona um novo livro após validar os campos
exports.adicionar = (req, res) => {
  const { titulo, autor, ano_publicacao, editora_id } = req.body;
  // Validação simples dos campos obrigatórios
  if (!titulo || !autor || !ano_publicacao || !editora_id) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  }
  livroModel.inserir(req.body, (err) => {
    if (err) return res.status(500).send("Erro ao adicionar livro");
    res.status(201).send("Livro adicionado com sucesso");
  });
};
// Atualiza um livro existente
exports.atualizar = (req, res) => {
  const { titulo, autor, ano_publicacao, editora_id } = req.body;
  // Validação dos dados recebidos
  if (!titulo || !autor || !ano_publicacao || !editora_id) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  }
  livroModel.atualizar(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send("Erro ao atualizar livro");
    if (result.affectedRows === 0)
      return res.status(404).send("Livro não encontrado");
    res.send("Livro atualizado com sucesso");
  });
};
// Exclui um livro pelo ID
exports.deletar = (req, res) => {
  livroModel.deletar(req.params.id, (err, result) => {
    if (err) return res.status(500).send("Erro ao deletar livro");
    if (result.affectedRows === 0)
      return res.status(404).send("Livro não encontrado");
    res.send("Livro deletado com sucesso");
  });
};
