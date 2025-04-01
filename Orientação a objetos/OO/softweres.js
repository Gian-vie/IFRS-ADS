"use strict";
exports.__esModule = true;
exports.Software = void 0;
var Software = /** @class */ (function () {
    function Software(nome, qtdRAM, qntHD) {
        nome != null ? (this._nome = nome) : null;
        qtdRAM != null ? (this._qntRAM = qtdRAM) : null;
        qntHD != null ? (this._qntHD = qntHD) : null;
    }
    Object.defineProperty(Software.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Software.prototype, "qtdRAM", {
        get: function () {
            return this._qntRAM;
        },
        set: function (value) {
            this._qntRAM = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Software.prototype, "qntHD", {
        get: function () {
            return this._qntHD;
        },
        set: function (value) {
            this._qntHD = value;
        },
        enumerable: false,
        configurable: true
    });
    return Software;
}());
exports.Software = Software;
