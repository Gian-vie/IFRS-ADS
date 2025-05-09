"use strict";
exports.__esModule = true;
exports.SisitemaLogin = void 0;
var usuario_1 = require("./usuario");
var SisitemaLogin = /** @class */ (function () {
    function SisitemaLogin() {
        this._usuarios = new Array();
    }
    SisitemaLogin.prototype.criarUsuario = function (nome, email, senha) {
        this._usuarios.push(new usuario_1.Usuario(nome, email, senha));
    };
    SisitemaLogin.prototype.login = function (email, senha) {
    };
    SisitemaLogin.prototype.recuperarSenha = function (email) {
    };
    return SisitemaLogin;
}());
exports.SisitemaLogin = SisitemaLogin;
