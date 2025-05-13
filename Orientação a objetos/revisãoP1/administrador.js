"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Administrador = void 0;
var usuario_1 = require("./usuario");
var Administrador = /** @class */ (function (_super) {
    __extends(Administrador, _super);
    function Administrador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Administrador.prototype, "nivelAcesso", {
        get: function () {
            return this._nivelAcesso;
        },
        set: function (value) {
            this._nivelAcesso = value;
        },
        enumerable: false,
        configurable: true
    });
    Administrador.prototype.getNivelAcesso = function () {
    };
    Administrador.prototype.setNivelAcesso = function (nivel) {
    };
    Administrador.prototype.verificarLogin = function () {
        return false;
    };
    Administrador.prototype.recuperarSenha = function () {
    };
    return Administrador;
}(usuario_1.Usuario));
exports.Administrador = Administrador;
