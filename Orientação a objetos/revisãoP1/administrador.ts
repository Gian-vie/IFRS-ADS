import { Usuario } from "./usuario";

export class Administrador extends Usuario {
  private _nivelAcesso: number;
  public get nivelAcesso(): number {
    return this._nivelAcesso;
  }
  public set nivelAcesso(value: number) {
    this._nivelAcesso = value;
  }

  getNivelAcesso() {

  }
  setNivelAcesso(nivel: number) {

  }
  verificarLogin() {
    return false
  }
  recuperarSenha() {

  }
}
