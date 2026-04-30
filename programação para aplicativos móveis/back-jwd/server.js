require("dotenv").config();
const express = require("express");
const users = require("./users");
const app = new express();
const jwt = require("jsonwebtoken");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  return res.json({ message: "Hello World!" });
});

app.post("/login", (req, res) => {
  const { login, pwd } = req.body;
  const user = users.find((u) => u.login === login && u.pwd === pwd);

  if (!user) {
    return res.status(403).json({ error: "Login ou senha inválidos!" });
  }

  const token = jwt.sign({ id: user.id }, PRIVATE_KEY, { expiresIn: "15min" });

  return res.json({ token });
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido!" });
  }
  try {
    req.user = jwt.verify(token, PRIVATE_KEY);
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido!" });
  }
};

app.get("/dashboard", verifyToken, (req, res) => {
  return res.json({
    message: `Bem-vindo ao dashboard, usuário ${req.user.id}!`,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
