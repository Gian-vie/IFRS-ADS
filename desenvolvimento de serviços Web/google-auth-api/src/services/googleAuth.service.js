// Importa o cliente OAuth2 da biblioteca oficial do Google
const { OAuth2Client } = require("google-auth-library");
// Cria uma instância do cliente com o Client ID configurado no .env
const client = new OAuth2Client(process.env.CLIENT_ID);
// Função assíncrona que valida o id_token fornecido pelo Google
async function verifyGoogleToken(idToken) {
  // Verifica a autenticidade e integridade do token
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.CLIENT_ID, // Garante que o token foi gerado para este app
  });
  // Extrai o payload com os dados do usuário autenticado
  const payload = ticket.getPayload();
  // Retorna informações relevantes do usuário
  return {
    google_id: payload.sub, // Identificador único e fixo do usuário no Google
    name: payload.name, // Nome completo
    email: payload.email, // E-mail principal do usuário
  };
}
// Exporta a função para ser utilizada por outras partes da aplicação
module.exports = { verifyGoogleToken };
