import { IUsusario } from "../interface/IUsuario";
import { Usuario } from "./usuario";

export class Administrador extends Usuario implements IUsusario{
  private _nivelAcesso: number;
  public get nivelAcesso(): number {
    return this._nivelAcesso;
  }
  public set nivelAcesso(value: number) {
    this._nivelAcesso = value;
  }

  constructor(nome: string, email: string,usuario: string, senha: string){
    super(nome, email , usuario, senha)
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
