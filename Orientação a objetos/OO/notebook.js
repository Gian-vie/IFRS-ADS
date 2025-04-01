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
exports.Notebook = void 0;
var computador_1 = require("./computador");
var Notebook = /** @class */ (function (_super) {
    __extends(Notebook, _super);
    function Notebook() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Notebook.prototype, "touchPad", {
        get: function () {
            return this._touchPad;
        },
        set: function (value) {
            this._touchPad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notebook.prototype, "placaMae", {
        get: function () {
            return this._placaMae;
        },
        set: function (value) {
            this._placaMae = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notebook.prototype, "bateria", {
        get: function () {
            return this._bateria;
        },
        set: function (value) {
            this._bateria = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notebook.prototype, "tela", {
        get: function () {
            return this._tela;
        },
        set: function (value) {
            this._tela = value;
        },
        enumerable: false,
        configurable: true
    });
    return Notebook;
}(computador_1.Computador));
exports.Notebook = Notebook;
