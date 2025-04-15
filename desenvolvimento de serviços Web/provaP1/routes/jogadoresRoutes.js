const Jogador = require("../models/jogador");

exports.criarJogador = async (req, res) => {
  try {
    const jogador = new Jogador(req.body);
    await jogador.save();
    res.statu(201).json(jogador);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar Jogador", error });
  }
};

exports.listarJogador = async (req, res) => {
    try {
        const jogador = await Jogador.find()
        res.status(200).json(jogador);
    } catch (error) {
        res.status(500).json({message: "Erro ao listar jogador", error})
    }
}