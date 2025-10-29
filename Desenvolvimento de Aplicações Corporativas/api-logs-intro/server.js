require("dotenv").config();
const { app, logger } = require("./src/app");
const PORT = process.env.PORT || 3000;
// Este arquivo inicia o servidor e escuta as requisições.
app.listen(PORT, () => {
  logger.info("Servidor iniciado com sucesso", { port: PORT });
});
