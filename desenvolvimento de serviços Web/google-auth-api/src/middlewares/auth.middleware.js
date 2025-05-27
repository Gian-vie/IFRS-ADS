function authenticateToken(req, res, next) {
  // Recupera o cabeçalho de autorização da requisição (Authorization: Bearer <token>)
  const authHeader = req.headers["authorization"];
  // Extrai apenas o token da string (remove o "Bearer ")
  const token = authHeader?.split(" ")[1];
  // Se não houver token, retorna status 401 (não autorizado)
  if (!token) return res.sendStatus(401);
  // Verifica a validade e integridade do token usando a chave secreta
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Token inválido ou expirado: acesso proibido
    // Se válido, anexa os dados do usuário decodificados à requisição
    req.user = user;
    // Passa para o próximo middleware ou rota
    next();
  });
}
// Exporta a função para ser usada em rotas que exigem autenticação
module.exports = { authenticateToken };
