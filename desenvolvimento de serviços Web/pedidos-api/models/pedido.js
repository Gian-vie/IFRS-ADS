const mongoose = require("mongoose")

const pedidoSchema = new mongoose.Schema({
    clinete: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        require: true
    },
    dataPedido: {
        type: Date,
        default: Date.now
    },
    valorTotal: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model("Pedido", pedidoSchema);