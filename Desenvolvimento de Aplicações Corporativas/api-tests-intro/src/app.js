const express = require("express");
const app = express();
app.use(express.json());
app.get("/ping", (req, res) => {
  res.status(200).json({ ok: true });
});

module.exports = app;
