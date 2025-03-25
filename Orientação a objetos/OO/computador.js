"use strict";
/*
CLasse computador
atributos:
marca
capacidadeHD
capacidadeRAM
freqProcessador
clockProcessador
qntNucleosProcessador
PlacVideoIntegrada
qtdMemoriaPlacaVideo

Metodos:
carregarBios()
carregarSO()
ligar()
desligar()
abrirProgramas()
fecharProgramas()
programasAbertos()
*/
exports.__esModule = true;
exports.Computador = void 0;
var Computador = /** @class */ (function () {
    function Computador() {
        this._programasAbertos = new Array();
        this._computadorLigado = false;
        //     this.marca = "0";
        //     this.capacidadeHD = 0;
        //     this.capacidadeRAM = 0;
        //     this.freqProcessador = 0;
        //     this.clockProcessador = 0;
        //     this.qntNucleosProcessador = 0;
        //     this.PlacVideoIntegrada = true;
        //     this.qtdMemoriaPlacaVideo = 0;
    }
    Object.defineProperty(Computador.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this._marca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "capacidadeHD", {
        get: function () {
            return this._capacidadeHD;
        },
        set: function (value) {
            this._capacidadeHD = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "capacidadeRAM", {
        get: function () {
            return this._capacidadeRAM;
        },
        set: function (value) {
            this._capacidadeRAM = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "freqProcessador", {
        get: function () {
            return this._freqProcessador;
        },
        set: function (value) {
            this._freqProcessador = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "clockProcessador", {
        get: function () {
            return this._clockProcessador;
        },
        set: function (value) {
            this._clockProcessador = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "qntNucleosProcessador", {
        get: function () {
            return this._qntNucleosProcessador;
        },
        set: function (value) {
            this._qntNucleosProcessador = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "PlacVideoIntegrada", {
        get: function () {
            return this._PlacVideoIntegrada;
        },
        set: function (value) {
            this._PlacVideoIntegrada = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "qtdMemoriaPlacaVideo", {
        get: function () {
            return this._qtdMemoriaPlacaVideo;
        },
        set: function (value) {
            this._qtdMemoriaPlacaVideo = value;
        },
        enumerable: false,
        configurable: true
    });
    Computador.prototype.instalarSoftwere = function (sw) {
        if (sw != null) {
            this._softweresInstalados.push(sw);
        }
    };
    Computador.prototype.carregarBios = function () {
        console.log("...carregando bios");
    };
    Computador.prototype.carregarSO = function (so) {
        console.log("Carregando S.O. ".concat(so));
    };
    Computador.prototype.ligarDesligar = function () {
        if (this._computadorLigado == false) {
            this.carregarBios();
            console.log("computador ligado");
            this._computadorLigado = !this._computadorLigado;
            return true;
        }
        console.log("computador desligado");
        this._computadorLigado = !this._computadorLigado;
        return false;
    };
    Computador.prototype.abrirProgramas = function (programa, memRAM) {
        if (this._computadorLigado == true) {
            var index = this._softweresInstalados.findIndex(function (p) { return p.nome === programa; });
            if (this._capacidadeRAM > memRAM && index > 0) {
                console.log("Abrindo programa ".concat(programa));
                this._programasAbertos.push(programa);
                this._capacidadeRAM -= memRAM;
                return true;
            }
            console.log("memoria insuficiente");
            return false;
        }
        return false;
    };
    Computador.prototype.fecharProgramas = function (programa, memRAM) {
        var index = this._programasAbertos.findIndex(function (p) { return p === programa; });
        if (this._computadorLigado == true) {
            if (index !== -1) {
                console.log("Fechando programa ".concat(programa));
                this._programasAbertos = this._programasAbertos.filter(function (p) { return p != programa; });
                this._capacidadeRAM += memRAM;
                // delete this.programasAbertos[index]
                return true;
            }
            console.log("o programa mensionado não esta aberto");
            return false;
        }
        return false;
    };
    Computador.prototype.listarProgramasAbertos = function () {
        if (this._computadorLigado == true) {
            console.log(this._programasAbertos);
        }
    };
    return Computador;
}());
exports.Computador = Computador;
// module.exports = Computador;
