const bcrypt = require("bcryptjs"); // Biblioteca para criptografia de senhas
const jwt = require("jsonwebtoken"); // Biblioteca para geração de tokens JWT
const UserModel = require("../models/userModel"); // Model responsável pelo acesso à tabela de usuários no banco
// Classe que contém os serviços relacionados ao usuário, como registro e login
class UserService {
  // Método para registrar um novo usuário
  static async registerUser(user) {
    const { email, password, role } = user;
    // Verifica se o e-mail já está cadastrado
    const existing = await UserModel.findByEmail(email);
    if (existing) {
      throw new Error("Usuário já existe");
    }
    // Criptografa a senha antes de salvar no banco
    const hashed = await bcrypt.hash(password, 10);
    // Substitui a senha original pela criptografada
    user.password = hashed;
    // Cria o novo usuário e retorna seu ID
    const id = await UserModel.create(user);
    // Retorna os dados de sucesso (sem lançar erro)
    return { message: "Usuário registrado com sucesso", id };
  }
  // Método para autenticar o usuário e gerar token JWT
  static async loginUser({ email, password }) {
    // Busca o usuário pelo e-mail
    const user = await UserModel.findByEmail(email);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    // Verifica se a senha fornecida é válida
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Senha inválida");
    }
    // Gera o token JWT
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // Retorna o token e o usuário para o controller
    return { token, user: { email: user.email, role: user.role } };
  }
}
module.exports = UserService;
