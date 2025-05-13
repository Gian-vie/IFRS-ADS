import { IPessoa } from "../interface/Ipessoa";

export class Cliente implements IPessoa{
    id: number;
    nome: string;
    cpf: string;

    constructor(id: number, nome: string, cpf: string){
        this.id=id;
        this.nome=nome;
        this.cpf=cpf;
    }

    getNome():string{
        return this.nome
    };

    setNome(nome: string): void {
        this.nome = nome;
    };

}
