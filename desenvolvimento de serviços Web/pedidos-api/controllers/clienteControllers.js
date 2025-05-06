const Cliente = require("../models/cliente");

exports.criarCliente = async (req, res) => {
    try{
        const cliente = new Cliente(req.body)
        await cliente.save();
        res.statu(201).json(cliente);
    }catch (error) {
        res.status(400).json({message: "erro ao criar cliente", error})
    }
};

exports.listarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.find()
        res.status(200).json(clintes);
    } catch (error) {
        res.status(500).json({message: "erro ao listar clietes", error})
    }
}