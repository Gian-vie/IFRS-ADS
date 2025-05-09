import { Usuario } from "./usuario";

export class SisitemaLogin{
    private _usuarios:Array<Usuario>

    constructor(){
        this._usuarios = new Array<Usuario>();
    }

    criarUsuario(nome: string, email: string, senha: string){
        this._usuarios.push(new Usuario(nome, email, senha))
    }
    login(email: string, senha: string){
        let usr = this._usuarios.find(u => u.email = email)
        if (usr != undefined){
            if (usr.verificarLogin(email,senha)){
            }
        }
    }
    recuperarSenha(email: string){

    }
}