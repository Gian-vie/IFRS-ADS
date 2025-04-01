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

// public -> default

import { Software } from "./softweres";

export class Computador {
  private _marca: string;
  public get marca(): string {
    return this._marca;
  }
  public set marca(value: string) {
    this._marca = value;
  }

  private _capacidadeHD: number;
  public get capacidadeHD(): number {
    return this._capacidadeHD;
  }
  public set capacidadeHD(value: number) {
    this._capacidadeHD = value;
  }

  private _capacidadeRAM: number;
  public get capacidadeRAM(): number {
    return this._capacidadeRAM;
  }
  public set capacidadeRAM(value: number) {
    this._capacidadeRAM = value;
  }

  private _freqProcessador: number;
  public get freqProcessador(): number {
    return this._freqProcessador;
  }
  public set freqProcessador(value: number) {
    this._freqProcessador = value;
  }

  private _clockProcessador: number;
  public get clockProcessador(): number {
    return this._clockProcessador;
  }
  public set clockProcessador(value: number) {
    this._clockProcessador = value;
  }

  private _qntNucleosProcessador: number;
  public get qntNucleosProcessador(): number {
    return this._qntNucleosProcessador;
  }
  public set qntNucleosProcessador(value: number) {
    this._qntNucleosProcessador = value;
  }

  private _PlacVideoIntegrada: boolean;
  public get PlacVideoIntegrada(): boolean {
    return this._PlacVideoIntegrada;
  }
  public set PlacVideoIntegrada(value: boolean) {
    this._PlacVideoIntegrada = value;
  }

  private _qtdMemoriaPlacaVideo: number;
  public get qtdMemoriaPlacaVideo(): number {
    return this._qtdMemoriaPlacaVideo;
  }
  public set qtdMemoriaPlacaVideo(value: number) {
    this._qtdMemoriaPlacaVideo = value;
  }

  private _programasAbertos: string[];

  private _computadorLigado: boolean;

  private _softweresInstalados: Software[];

  constructor() {
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

  instalarSoftwere(sw: Software) {
    if (sw != null) {
      this._softweresInstalados.push(sw);
    }
  }

  private carregarBios() {
    console.log("...carregando bios");
  }

  private carregarSO(so: string) {
    console.log(`Carregando S.O. ${so}`);
  }

  public ligarDesligar(): boolean {
    if (this._computadorLigado == false) {
      this.carregarBios();
      this,this.carregarSO("Windows")
      console.log("computador ligado");
      this._computadorLigado = !this._computadorLigado;
      return true;
    }
    console.log("computador desligado");
    this._computadorLigado = !this._computadorLigado;
    return false;
  }

  public abrirProgramas(programa: string, memRAM: number): boolean {
    if (this._computadorLigado == true) {
      const index = this._softweresInstalados.findIndex(
        (p) => p.nome === programa
      );
      if (this._capacidadeRAM > memRAM && index > 0) {
        console.log(`Abrindo programa ${programa}`);
        this._programasAbertos.push(programa);
        this._capacidadeRAM -= memRAM;
        return true;
      }
      console.log("memoria insuficiente");
      return false;
    }
    return false;
  }

  fecharProgramas(programa: string, memRAM: number): boolean {
    const index = this._programasAbertos.findIndex((p) => p === programa);
    if (this._computadorLigado == true) {
      if (index !== -1) {
        console.log(`Fechando programa ${programa}`);
        this._programasAbertos = this._programasAbertos.filter(
          (p) => p != programa
        );
        this._capacidadeRAM += memRAM;
        // delete this.programasAbertos[index]
        return true;
      }
      console.log("o programa mensionado não esta aberto");
      return false;
    }
    return false;
  }

  listarProgramasAbertos() {
    if (this._computadorLigado == true) {
      console.log(this._programasAbertos);
    }
  }
}

// module.exports = Computador;
