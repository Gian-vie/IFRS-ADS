export class Software {
  private _nome: string;
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  private _qntRAM: number;
  public get qtdRAM(): number {
    return this._qntRAM;
  }
  public set qtdRAM(value: number) {
    this._qntRAM = value;
  }

  private _qntHD: number;
  public get qntHD(): number {
    return this._qntHD;
  }
  public set qntHD(value: number) {
    this._qntHD = value;
  }

  constructor(nome?: string, qtdRAM?: number, qntHD?: number) {
    nome != null ? (this._nome = nome) : null;
    qtdRAM != null ? (this._qntRAM = qtdRAM) : null;
    qntHD != null ? (this._qntHD = qntHD) : null;
  }
}
