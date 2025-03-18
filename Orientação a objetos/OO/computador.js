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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
var Computador = /** @class */ (function () {
    function Computador() {
        this.programasAbertos = new Array();
        this.computadorLigado = false;
        //     this.marca = "0";
        //     this.capacidadeHD = 0;
        //     this.capacidadeRAM = 0;
        //     this.freqProcessador = 0;
        //     this.clockProcessador = 0;
        //     this.qntNucleosProcessador = 0;
        //     this.PlacVideoIntegrada = true;
        //     this.qtdMemoriaPlacaVideo = 0;
    }
    Computador.prototype.carregarBios = function () {
        console.log("...carregando bios");
    };
    Computador.prototype.carregarSO = function (so) {
        console.log("Carregando S.O. ".concat(so));
    };
    Computador.prototype.ligarDesligar = function () {
        if (this.computadorLigado == false) {
            this.carregarBios();
            console.log("computador ligado");
            this.computadorLigado = !this.computadorLigado;
            return true;
        }
        console.log("computador desligado");
        this.computadorLigado = !this.computadorLigado;
        return false;
    };
    Computador.prototype.abrirProgramas = function (programa, memRAM) {
        if (this.computadorLigado == true) {
            if (this.capacidadeRAM > memRAM) {
                console.log("Abrindo programa ".concat(programa));
                this.programasAbertos.push(programa);
                this.capacidadeRAM -= memRAM;
                return true;
            }
            console.log("memoria insuficiente");
            return false;
        }
        return false;
    };
    Computador.prototype.fecharProgramas = function (programa, memRAM) {
        var index = this.programasAbertos.findIndex(function (p) { return p === programa; });
        if (this.computadorLigado == true) {
            if (index !== -1) {
                console.log("Fechando programa ".concat(programa));
                this.programasAbertos = this.programasAbertos.filter(function (p) { return p != programa; });
                this.capacidadeRAM += memRAM;
                // delete this.programasAbertos[index]
                return true;
            }
            console.log("o programa mensionado não esta aberto");
            return false;
        }
        return false;
    };
    Computador.prototype.listarProgramasAbertos = function () {
        if (this.computadorLigado == true) {
            console.log(this.programasAbertos);
        }
    };
    return Computador;
}());
exports.Computador = Computador;
// module.exports = Computador;
var comp1 = new Computador();
comp1.marca = "DELL";
comp1.capacidadeHD = 1024;
comp1.capacidadeRAM = 32;
comp1.freqProcessador = 3.5;
comp1.qntNucleosProcessador = 8;
comp1.PlacVideoIntegrada = true;
comp1.ligarDesligar();
comp1.abrirProgramas("Visual Studio Code", 2);
comp1.abrirProgramas("Crhome", 20);
comp1.abrirProgramas("Opera", 15);
comp1.listarProgramasAbertos();
comp1.fecharProgramas("firefox", 0);
comp1.fecharProgramas("Crhome", 20);
comp1.ligarDesligar();
// let comp2 = new Computador();
// comp2.marca = "Apple";
// comp2.capacidadeHD = 1000;
// comp2.capacidadeRAM = 16;
// comp2.freqProcessador = 3.8;
// comp2.qntNucleosProcessador = 8;
// comp2.PlacVideoIntegrada = false;
// comp2.qtdMemoriaPlacaVideo = 6;
// comp2.ligar();
// comp2.abrirProgramas("Safari", 0.5);
