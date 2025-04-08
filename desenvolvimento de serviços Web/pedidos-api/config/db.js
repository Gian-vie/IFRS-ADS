const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/relacional_api")
        console.log("conectado ao mongoDB com sucesso!")
    } catch (error) {
        console.error("erro ao conectar no mongoDB", error)
        process.exit(1)
    }
};

module.exports = connectDB