import { IUsusario } from "../interface/IUsuario"

export class Usuario implements IUsusario{
    private _nome: string
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    private _email: string
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }

    private _usuario: string
    public get usuario(): string {
        return this._usuario
    }
    public set usuario(value: string) {
        this._usuario = value
    }

    private _senha: string
    public get senha(): string {
        return this._senha
    }
    public set senha(value: string) {
        this._senha = value
    }

    constructor(nome: string, email: string, usuario: string, senha: string){
        this._email = email;
        this._nome = nome;
        this.usuario = usuario
        this._senha = senha;
    }

    verificarLogin(email: string, senha: string): boolean{
        return true
    }

    recuperarSenha(email: string):void{

    }

    validarEmail(email:string):boolean{
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return emailRegex.test(email)
    }

}

export class Funcionario extends Usuario implements IUsusario{
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

export class Gerente extends Usuario implements IUsusario{
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





// Criar uma classe chamada Autenticação. Nesta classe deverá ter um método chamado login que irá receber um objeto do tipo IUsuario. Após fazer a validação se o usuário e senha são iguais a string "admin". Se sim, retornar true, caso contrário retorna false

export class Autenticação {
    login(usuario: IUsusario): boolean{
        if(usuario.usuario === "admin" && usuario.senha === "admin") {
            return true
        }
        return false
    }

}

// Criar dois objetos, um do tipo funcionário e outro do tipo gerente, e validar o login dos mesmos

let fun1: IUsusario = new Funcionario("pedro", "pedro12@gmail.com", "pedrinhoGameplays", "SenhaForte123")

let ger1: IUsusario = new Gerente("Joreu", "bestboss@gmail.com", "admin", "admin")

let autentica: Autenticação = new Autenticação

autentica.login(fun1)? console.log("Autenticado com sucesso"): console.log("Falha ao autenticar");
autentica.login(ger1)? console.log("Autenticado com sucesso"): console.log("Falha ao autenticar");