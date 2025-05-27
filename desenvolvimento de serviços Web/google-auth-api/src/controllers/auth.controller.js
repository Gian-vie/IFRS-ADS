// Importa o serviço que valida o token do Google e retorna os dados do usuário
const { verifyGoogleToken } = require("../services/googleAuth.service");
// Importa a função utilitária que gera um JWT para a API
const { generateJWT } = require("../utils/jwt.util");
// Importa o model responsável por interagir com a tabela de usuários
const UserModel = require("../models/userModel");
// Define a classe AuthController, responsável por lidar com autenticação via Google
class AuthController {
  // Método que trata o login via id_token fornecido pelo Google
  static async loginWithGoogle(req, res) {
    const { id_token } = req.body;
    // Retorna erro caso o token não seja enviado
    if (!id_token) {
      return res.status(400).json({ error: "Token não fornecido" });
    }
    try {
      // 1. Valida o token do Google e extrai google_id, nome e email
      const { google_id, name, email } = await verifyGoogleToken(id_token);
      // 2. Verifica se o usuário já existe no banco
      let user = await UserModel.findByGoogleId(google_id);
      // Se não existir, cria um novo usuário
      if (!user) {
        const id = await UserModel.create({ google_id, name, email });
        user = { id, google_id, name, email };
      }
      // 3. Gera um JWT com as informações do usuário autenticado
      const token = generateJWT(user);
      // Retorna o token e os dados do usuário
      return res.json({ token, user });
    } catch (error) {
      // Em caso de falha na validação do token, retorna erro de autenticação
      return res
        .status(401)
        .json({ error: "Token inválido", detalhes: error.message });
    }
  }
}
// Exporta a classe AuthController para ser usada nas rotas
module.exports = AuthController;
