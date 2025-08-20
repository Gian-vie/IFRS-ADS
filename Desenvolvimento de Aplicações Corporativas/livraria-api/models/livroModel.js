const connection = require("../config/db");
// Retorna todos os livros cadastrados
exports.buscarTodos = (callback) => {
  connection.query("SELECT * FROM livros", callback);
};
// Retorna um livro específico pelo ID
exports.buscarPorId = (id, callback) => {
  connection.query("SELECT * FROM livros WHERE id = ?", [id], callback);
};
// Insere um novo livro no banco de dados
exports.inserir = ({ titulo, autor, ano_publicacao, editora_id }, callback) => {
  const sql =
    "INSERT INTO livros (titulo, autor, ano_publicacao, editora_id) VALUES (?, ?, ?, ?)";
  connection.query(sql, [titulo, autor, ano_publicacao, editora_id], callback);
};
// Atualiza um livro existente com base no ID
exports.atualizar = (
  id,
  { titulo, autor, ano_publicacao, editora_id },
  callback
) => {
  const sql =
    "UPDATE livros SET titulo = ?, autor = ?, ano_publicacao = ?, editora_id = ? WHERE id = ?";
  connection.query(
    sql,
    [titulo, autor, ano_publicacao, editora_id, id],
    callback
  );
};
// Exclui um livro com base no ID
exports.deletar = (id, callback) => {
  connection.query("DELETE FROM livros WHERE id = ?", [id], callback);
};
// Lista todos os livros com o nome da editora associada (JOIN)
exports.listarComEditoras = (callback) => {
  const sql = `
  SELECT livros.*, editoras.nome AS editora
  FROM livros
  JOIN editoras ON livros.editora_id = editoras.id
  `;
  connection.query(sql, callback);
};
