const express = require("express");
// Bibliotecas do Swagger/OpenAPI
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const app = express();
app.use(express.json());
//Configuração básica do swagger-jsdoc
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuários",
      version: "1.0.0",
      description: "Exemplo de API documentada com Swagger (OpenAPI)",
    },
  },
  // Arquivos onde vamos anotar os endpoints (podem ser rotas separadas)
  apis: ["./server.js"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
// Servindo a documentação no endpoint /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/** “Banco” em memória para exemplo didático */
const users = [{ id: 1, nome: "Maria" }];
/**
 * @openapi
 * /ping:
 *  get:
 *      summary: Verifica se o serviço está no ar
 *      responses:
 *          200:
 *              description: Serviço operacional
 */
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});
/**
 * @openapi
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required: [nome]
 *          properties:
 *              id:
 *                  type: integer
 *                  example: 1
 *              nome:
 *                  type: string
 *                  example: Maria
 */
app.get("/users", (req, res) => {
  res.json(users);
});
/**
 * @openapi
 * /users:
 *  get:
 *      summary: Lista usuários
 *      responses:
 *          200:
 *              description: Lista de usuários
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                               $ref: '#/components/schemas/User'
 * post:
 *  summary: Cria usuário
 *  requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *              examples:
 *                  criar:
 *                      summary: Exemplo de criação
 *                      value: { "nome": "João" }
 *              responses:
 *                  201:
 *                      description: Usuário criado
 *                  400:
 *                      description: Dados inválidos (nome ausente)
 */
app.post("/users", (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ error: "nome é obrigatório" });
  const novo = { id: users.length + 1, nome };
  users.push(novo);
  res.status(201).json(novo);
});
app.listen(3000, () => console.log("API rodando em http://localhost:3000"));
