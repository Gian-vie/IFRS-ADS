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