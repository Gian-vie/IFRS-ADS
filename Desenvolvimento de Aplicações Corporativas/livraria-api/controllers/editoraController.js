const editoraModel = require("../models/editoraModel");
// Lista todas as editoras cadastradas
exports.listar = (req, res) => {
  editoraModel.buscarTodos((err, results) => {
    if (err) return res.status(500).send("Erro ao listar editoras");
    res.json(results);
  });
};
// Busca uma editora pelo ID
exports.buscarPorId = (req, res) => {
  editoraModel.buscarPorId(req.params.id, (err, results) => {
    if (err) return res.status(500).send("Erro ao buscar editora");
    if (results.length === 0)
      return res.status(404).send("Editora não encontrada");
    res.json(results[0]);
  });
};
// Adiciona uma nova editora, com validação dos campos
exports.adicionar = (req, res) => {
  const { nome, cidade } = req.body;
  // Validação dos campos obrigatórios
  if (!nome || !cidade) {
    return res.status(400).send("Nome e cidade são obrigatórios");
  }
  editoraModel.inserir(req.body, (err) => {
    if (err) return res.status(500).send("Erro ao adicionar editora");
    res.status(201).send("Editora adicionada com sucesso");
  });
};
// Atualiza os dados de uma editora
exports.atualizar = (req, res) => {
  const { nome, cidade } = req.body;
  // Validação dos dados recebidos
  if (!nome || !cidade) {
    return res.status(400).send("Nome e cidade são obrigatórios");
  }
  editoraModel.atualizar(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send("Erro ao atualizar editora");
    if (result.affectedRows === 0)
      return res.status(404).send("Editora não encontrada");
    res.send("Editora atualizada com sucesso");
  });
};
// Remove uma editora do banco de dados
exports.deletar = (req, res) => {
  editoraModel.deletar(req.params.id, (err, result) => {
    if (err) return res.status(500).send("Erro ao deletar editora");
    if (result.affectedRows === 0)
      return res.status(404).send("Editora não encontrada");
    res.send("Editora deletada com sucesso");
  });
};
