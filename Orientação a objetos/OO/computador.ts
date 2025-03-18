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

import { Software } from "./softweres";

export class Computador {
  marca: string;
  capacidadeHD: number;
  capacidadeRAM: number;
  freqProcessador: number;
  clockProcessador: number;
  qntNucleosProcessador: number;
  PlacVideoIntegrada: boolean;
  qtdMemoriaPlacaVideo: number;
  programasAbertos: string[];
  computadorLigado: boolean;
  softweresInstalados: Software[];

  constructor() {
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

  instalarSoftwere(sw: Software) {
    if (sw != null) {
      this.softweresInstalados.push(sw);
    }
  }

  carregarBios() {
    console.log("...carregando bios");
  }

  carregarSO(so: string) {
    console.log(`Carregando S.O. ${so}`);
  }

  ligarDesligar(): boolean {
    if (this.computadorLigado == false) {
      this.carregarBios();
      console.log("computador ligado");
      this.computadorLigado = !this.computadorLigado;
      return true;
    }
    console.log("computador desligado");
    this.computadorLigado = !this.computadorLigado;
    return false;
  }

  abrirProgramas(programa: string, memRAM: number): boolean {
    if (this.computadorLigado == true) {
      const index = this.softweresInstalados.findIndex(p =>p.nome === programa)
      if (this.capacidadeRAM > memRAM && index > 0) {
        console.log(`Abrindo programa ${programa}`);
        this.programasAbertos.push(programa);
        this.capacidadeRAM -= memRAM;
        return true;
      }
      console.log("memoria insuficiente");
      return false;
    }
    return false;
  }

  fecharProgramas(programa: string, memRAM: number): boolean {
    const index = this.programasAbertos.findIndex((p) => p === programa);
    if (this.computadorLigado == true) {
      if (index !== -1) {
        console.log(`Fechando programa ${programa}`);
        this.programasAbertos = this.programasAbertos.filter(
          (p) => p != programa
        );
        this.capacidadeRAM += memRAM;
        // delete this.programasAbertos[index]
        return true;
      }
      console.log("o programa mensionado não esta aberto");
      return false;
    }
    return false;
  }

  listarProgramasAbertos() {
    if (this.computadorLigado == true) {
      console.log(this.programasAbertos);
    }
  }
}

// module.exports = Computador;