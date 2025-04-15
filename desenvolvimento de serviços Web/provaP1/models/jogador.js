const mongoose = require("mongoose")

const jogadorSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    nome: {type: String, require: true},
    nickname: {type: String, require: true}
});

module.exports = mongoose.model("Jogador", jogadorSchema);