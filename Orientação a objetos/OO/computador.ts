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

  carregarBios() {
    console.log("...carregando bios");
  }

  carregarSO(so: string) {
    console.log(`Carregando S.O. ${so}`);
  }

  ligarDesligar() {
    if (this.computadorLigado == false) {
      this.carregarBios();
      console.log("computador ligado");
      this.computadorLigado = !this.computadorLigado;
    }
    console.log("computador desligado");
    this.computadorLigado = !this.computadorLigado;
  }

  abrirProgramas(programa: string, memRAM: number): boolean {
    if (this.computadorLigado == true) {
      if (this.capacidadeRAM > memRAM) {
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
    const index = this.programasAbertos.findIndex(p => p === programa);
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

let comp1 = new Computador();

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
comp1.listarProgramasAbertos()
comp1.fecharProgramas("firefox", 0);
comp1.fecharProgramas("Crhome", 20);
comp1.fecharProgramas("Opera", 15);
comp1.ligarDesligar();
comp1.abrirProgramas("Crhome", 20);


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
