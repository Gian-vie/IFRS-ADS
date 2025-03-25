import { Computador } from "./computador";

export class Tablet extends Computador {
  private _tela: string;
    public get tela(): string {
        return this._tela;
    }
    public set tela(value: string) {
        this._tela = value;
    }
  private _bateria: string;
    public get bateria(): string {
        return this._bateria;
    }
    public set bateria(value: string) {
        this._bateria = value;
    }
  private _caneta: string;
    public get caneta(): string {
        return this._caneta;
    }
    public set caneta(value: string) {
        this._caneta = value;
    }
  private _chip: string;
    public get chip(): string {
        return this._chip;
    }
    public set chip(value: string) {
        this._chip = value;
    }

  constructor() {
    super();
  }
}
