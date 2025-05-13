export interface IPessoa{
    nome: string;
    cpf: string;

    getNome(): string;
    setNome(nome: string): void;
}