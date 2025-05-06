const Usuario = require("../models/usuario");
// Criar um novo usuário
exports.criarUsuario = async (req, res) => {
 try {
 const usuario = new Usuario(req.body);
 await usuario.save();
 res.status(201).json(usuario);
 } catch (error) {
 res.status(400).json({ message: "Erro ao criar usuário", error });
 }
};
// Obter todos os usuários
exports.obterUsuarios = async (req, res) => {
 try {
 const usuarios = await Usuario.find();
 res.status(200).json(usuarios);
 } catch (error) {
 res.status(500).json({ message: "Erro ao buscar usuários", error });
 }
};
// Atualizar um usuário
exports.atualizarUsuario = async (req, res) => {
 try {
 const { id } = req.params;
 const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, req.body, {
 new: true,
 });
 if (!usuarioAtualizado) {
 return res.status(404).json({ message: "Usuário não encontrado" });
 }
 res.status(200).json(usuarioAtualizado);
 } catch (error) {
 res.status(400).json({ message: "Erro ao atualizar usuário", error });
 }
};
// Deletar um usuário
exports.deletarUsuario = async (req, res) => {
 try {
    const { id } = req.params;
 const usuarioDeletado = await Usuario.findByIdAndDelete(id);
 if (!usuarioDeletado) {
 return res.status(404).json({ message: "Usuário não encontrado" });
 }
 res.status(200).json({ message: "Usuário deletado com sucesso" });
 } catch (error) {
 res.status(500).json({ message: "Erro ao deletar usuário", error });
 }
};