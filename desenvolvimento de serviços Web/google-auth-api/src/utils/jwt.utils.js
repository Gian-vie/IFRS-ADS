// Importa a biblioteca jsonwebtoken para criação de tokens JWT
const jwt = require("jsonwebtoken");
// Função que gera um token JWT com base nos dados do usuário autenticado
function generateJWT(user) {
  return jwt.sign(
    {
      id: user.id, // ID interno do usuário (do banco de dados)
      name: user.name, // Nome do usuário
      email: user.email, // E-mail do usuário
    },
    process.env.JWT_SECRET, // Chave secreta da aplicação, usada para assinar o token
    {
      expiresIn: "1h", // Token válido por 1 hora
    }
  );
}
// Exporta a função para uso em outras partes da aplicação
module.exports = { generateJWT };
