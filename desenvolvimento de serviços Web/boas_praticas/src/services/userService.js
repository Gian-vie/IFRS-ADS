const UserModel = require("../models/userModel");
// Importa o Model responsável pelo acesso ao banco de dados (tabela users)
const validateEmail = require("../utils/validateEmail");
// Importa a função utilitária que valida o formato de e-mail
class UserService {
  // Busca todos os usuários cadastrados
  static async getAllUsers() {
    return await UserModel.findAll();
  }
  // Cria um novo usuário após validações
  static async createUser(user) {
    if (!validateEmail(user.email)) {
      throw new Error("Formato de email inválido."); // Valida o formato do
      // e-mail
    }
    const existingUser = await UserModel.findByEmail(user.email);
    if (existingUser) {
      throw new Error("Email já cadastrado."); // Impede cadastro de e-mails
      // duplicados
    }
    return await UserModel.create(user); // Cria o novo usuário
  }
  // Atualiza informações de um usuário existente
  static async updateUser(id, user) {
    const updatedRows = await UserModel.update(id, user);
    if (updatedRows === 0) {
      throw new Error("Usuário não encontrado."); // Caso nenhum usuário tenha
      //  sido atualizado
    }
    return updatedRows;
  }
  // Deleta um usuário pelo ID
  static async deleteUser(id) {
    const deletedRows = await UserModel.delete(id);
    if (deletedRows === 0) {
      throw new Error("Usuário não encontrado."); // Caso nenhum usuário tenha
      //  sido deletado
    }
    return deletedRows;
  }
}
module.exports = UserService;
// Exporta a classe para ser utilizada pelos controllers
