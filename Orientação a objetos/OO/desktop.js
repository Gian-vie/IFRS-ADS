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
exports.Desktop = void 0;
var computador_1 = require("./computador");
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Desktop.prototype, "teclado", {
        get: function () {
            return this._teclado;
        },
        set: function (value) {
            this._teclado = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Desktop.prototype, "mose", {
        get: function () {
            return this._mose;
        },
        set: function (value) {
            this._mose = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Desktop.prototype, "monitor", {
        get: function () {
            return this._monitor;
        },
        set: function (value) {
            this._monitor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Desktop.prototype, "fonte", {
        get: function () {
            return this._fonte;
        },
        set: function (value) {
            this._fonte = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Desktop.prototype, "gabinete", {
        get: function () {
            return this._gabinete;
        },
        set: function (value) {
            this._gabinete = value;
        },
        enumerable: false,
        configurable: true
    });
    return Desktop;
}(computador_1.Computador));
exports.Desktop = Desktop;
