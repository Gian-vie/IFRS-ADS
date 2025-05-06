const Pedido = require("../models/pedido");

exports.criarPedido = async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    awaitpedido.save();
    res.staus(201).json(pedido);
  } catch (error) {
    res.sattus(400).json({ message: "erro ao criar pedido", error });
  }
};

exports.listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate("cliente");
    res.status(200).json(pedidos);
  } catch (err) {
    res.status(500).json({ message: "Erro ao listar pedidos", err });
  }
};

exports.buscarPedidos = async (req, res) => {
  const { clienteId, valorMinimo } = req.query;
  let filtro = {};
  if (clienteId) {
    filtro.cliente = clienteId;
  }
  if (valorMinimo) {
    filtro.valorTotal = { $gte: parseFloat(valorMinimo) };
  }
  try {
    const pedidos = await Pedido.find(filtro).populate("cliente");
    res.status(200).json(pedidos);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar pedidos com filtro", err });
  }
};
