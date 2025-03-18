export class Software {
  nome: string;
  qtdMemoriaRAM: number;
  qntHD: number;

  constructor(nome: string, qtdMemoriaRAM: number, qntHD: number) {
    this.nome = nome;
    this.qtdMemoriaRAM = qtdMemoriaRAM;
    this.qntHD = qntHD;
  }
}
