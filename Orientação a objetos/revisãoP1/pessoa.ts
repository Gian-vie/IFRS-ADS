export abstract class Pessoa {
    private _nome: string;
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    private _telefone: number;
    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(value: number) {
        this._telefone = value;
    }

    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    enviarMensagem(string: string): void{
        console.log(string)
    }
} 

export class Fisica extends Pessoa{
    private _RG: string;
    public get RG(): string {
        return this._RG;
    }
    public set RG(value: string) {
        this._RG = value;
    }

    private _CPF: string;
    public get CPF(): string {
        return this._CPF;
    }
    public set CPF(value: string) {
        this._CPF = value;
    }

    private _dataNasc: string;
    public get dataNasc(): string {
        return this._dataNasc;
    }
    public set dataNasc(value: string) {
        this._dataNasc = value;
    }

    constructor(rg: string, cpf: string, dataNasc: string){
        super();
        this._RG = rg;
        this._CPF = cpf;
        this._dataNasc = dataNasc;
    }

    calcularIdade():number{
        return Number(this._dataNasc)
    }
} 


export class Juridica extends Fisica {
    private _razaoSocial: string;
    public get razaoSocial(): string {
        return this._razaoSocial;
    }
    public set razaoSocial(value: string) {
        this._razaoSocial = value;
    }

    private _cnpj: string;
    public get cnpj(): string {
        return this._cnpj;
    }
    public set cnpj(value: string) {
        this._cnpj = value;
    }

    private _responsavel: Fisica;
    public get responsavel(): Fisica {
        return this._responsavel;
    }
    public set responsavel(value: Fisica) {
        this._responsavel = value;
    }

    constructor(razaoSocial: string, cnpj: string, responsavel: Fisica){
        super(responsavel.RG, responsavel.CPF, responsavel.dataNasc);
        this._razaoSocial = razaoSocial;
        this._cnpj = cnpj
    }

    alterarResponsavel(resp:Fisica):void{
        let oldUser = this.responsavel.RG
        this.responsavel = resp
        console.log(`O responsável da empresa ${this.razaoSocial} foi alterado de ${oldUser} para ${this.responsavel.RG}`)
    }
}

let fis1 = new Fisica("0202020202", "03030303055", "15/12/2002")

let juri1 = new Juridica("algumaEnterprise", "2222200012222", fis1)

let fis2 = new Fisica("0303030303", "02020202066", "16/11/2001")

juri1.alterarResponsavel(fis2)