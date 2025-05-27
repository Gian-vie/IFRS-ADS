// Importa o pool de conexões com o banco de dados MySQL
const db = require("../config/database");
// Define a classe UserModel, responsável por acessar a tabela "users"
class UserModel {
  // Método que busca um usuário no banco usando o ID do Google
  static async findByGoogleId(googleId) {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE google_id = ?",
      [googleId] // Parâmetro da consulta SQL
    );
    return rows[0]; // Retorna o primeiro usuário encontrado (ou undefined)
  }
  // Método que cria um novo usuário no banco de dados
  static async create({ google_id, name, email }) {
    const [result] = await db.query(
      "INSERT INTO users (google_id, name, email) VALUES (?, ?, ?)",
      [google_id, name, email] // Dados a serem inseridos
    );
    return result.insertId; // Retorna o ID gerado para o novo usuário
  }
}
// Exporta a classe para ser usada em outros arquivos (como na camada Service)
module.exports = UserModel;
