// Define a classe responsável por controlar o acesso ao painel (dashboard)
class DashboardController {
  // Método estático que responde às requisições autenticadas ao painel
  static accessDashboard(req, res) {
    // Retorna uma mensagem de boas-vindas e os dados do usuário autenticado
    return res.json({
      message: "Bem-vindo ao painel!",
      user: req.user, // Dados decodificados do token JWT (injetados pelo middleware)
    });
  }
}
// Exporta a classe para ser utilizada nas rotas protegidas
module.exports = DashboardController;
