const UserService = require("../services/userService");
// Importa o serviço que contém a lógica de negócio para manipular usuários
class UserController {
  // Método para listar todos os usuários
  static async getAll(req, res) {
    try {
      const users = await UserService.getAllUsers(); // Chama o service para buscar usuários
      res.json(users); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }
  // Método para criar um novo usuário
  static async create(req, res) {
    try {
      const id = await UserService.createUser(req.body); // Chama o service para criar usuário
      res.status(201).json({ message: "Usuário criado com sucesso.", id }); // Retorna status 201 (criado) e o ID
    } catch (error) {
      res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
    }
  }
  // Método para atualizar um usuário existente
  static async update(req, res) {
    try {
      const id = req.params.id; // Pega o ID da URL
      await UserService.updateUser(id, req.body); // Chama o service para
      atualizar;
      res.json({ message: "Usuário atualizado com sucesso." });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
    }
  }
  // Método para deletar um usuário
  static async delete(req, res) {
    try {
      const id = req.params.id; // Pega o ID da URL
      await UserService.deleteUser(id); // Chama o service para deletar
      res.json({ message: "Usuário deletado com sucesso." });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
    }
  }
}
module.exports = UserController;
// Exporta o Controller para ser usado nas rotas
