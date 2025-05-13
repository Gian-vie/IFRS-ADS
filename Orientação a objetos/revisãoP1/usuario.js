"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, email, senha) {
        this._email = email;
        this._nome = nome;
        this._senha = senha;
    }
    Object.defineProperty(Usuario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (value) {
            this._senha = value;
        },
        enumerable: false,
        configurable: true
    });
    Usuario.prototype.verificarLogin = function (email, senha) {
        return true;
    };
    Usuario.prototype.recuperarSenha = function (email) {
    };
    Usuario.prototype.validarEmail = function (email) {
    };
    return Usuario;
}());
exports.Usuario = Usuario;
