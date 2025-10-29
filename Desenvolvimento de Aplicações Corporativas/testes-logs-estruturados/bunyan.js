import bunyan from "bunyan";
// Cria o logger com nome e nível mínimo de log
const logger = bunyan.createLogger({
  name: "app-bunyan", // identifica a aplicação nos logs
  level: "info", // nível mínimo de log
});
// Exemplos de uso
logger.info({ rota: "/users" }, "Usuário acessou a rota"); // log informativo
logger.error({ erro: "Conexão perdida" }, "Erro de banco de dados"); // log de erro
