const connection = require("../config/db");
// Retorna todas as editoras cadastradas
exports.buscarTodos = (callback) => {
  connection.query("SELECT * FROM editoras", callback);
};
// Retorna uma editora específica pelo ID
exports.buscarPorId = (id, callback) => {
  connection.query("SELECT * FROM editoras WHERE id = ?", [id], callback);
};
// Insere uma nova editora no banco de dados
exports.inserir = ({ nome, cidade }, callback) => {
  const sql = "INSERT INTO editoras (nome, cidade) VALUES (?, ?)";
  connection.query(sql, [nome, cidade], callback);
};
// Atualiza os dados de uma editora pelo ID
exports.atualizar = (id, { nome, cidade }, callback) => {
  const sql = "UPDATE editoras SET nome = ?, cidade = ? WHERE id = ?";
  connection.query(sql, [nome, cidade, id], callback);
};
// Exclui uma editora com base no ID
exports.deletar = (id, callback) => {
  connection.query("DELETE FROM editoras WHERE id = ?", [id], callback);
};
