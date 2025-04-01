// 1 - Crie uma pasta chamada BancoOO

// 2 - Implemente uma classe para definir os objetos que representarão os clientes de um banco. Essa classe deve declarar dois atributos: um para os nomes e outro para os códigos dos clientes. Faça um teste criando dois objetos da classe Cliente.

// 3 - Os bancos oferecem aos clientes a possibilidade de obter um cartão de crédito que pode ser utilizados para fazer compras. Um cartão de crédito possui um número e uma data de validade. Crie uma classe para modelar os objetos que representarão os cartões de crédito. Faça um teste criando dois objetos da classe CartaoDeCredito.

export class Cliente {
  private _codigo: string;
  private _nome: string;
  public get nome_1(): string {
    return this._nome;
  }
  public set nome_1(value: string) {
    this._nome = value;
  }

  constructor(codigo: string, nome: string) {
    this._codigo = codigo;
    this._nome = nome;
  }
}

const cli1: Cliente = new Cliente("3030", "cliente1");
const cli2: Cliente = new Cliente("3031", "cliente2");

export class CartaoCredito {
  private _numero: string;
  public get numero_1(): string {
    return this._numero;
  }

  private _validade: string;
  public get validade(): string {
    return this._validade;
  }

  private _cliente: Cliente;
  public get cliente(): Cliente {
    return this._cliente;
  }

  constructor(numero: string, validade: string, cliente: Cliente) {
    this._numero = numero;
    this._validade = validade;
    this._cliente = cliente;
  }
}

const cartão1: CartaoCredito = new CartaoCredito(
  "10003030",
  "17/03/2030",
  cli1
);
const cartão2: CartaoCredito = new CartaoCredito(
  "10003031",
  "17/03/2030",
  cli2
);

// 4 - As agências do banco possuem número. Crie uma classe para definir os objetos que representarão as agências. Faça um teste criando dois objetos da classe Agencia.

export class Agencia {
  private _numero: string;
  public get numero(): string {
    return this._numero;
  }

  constructor(numero: string) {
    this._numero = numero;
  }
}

const agen1 = new Agencia("0210");
// 5 - As contas do banco possuem número, saldo e limite. Crie uma classe para definir os objetos que representarão as contas. Faça um teste criando dois objetos da classe Conta.

// 6 - Faça um teste que imprima os atributos de um objeto da classe Conta logo após a sua criação.

// 7 - Altere a classe Conta para que todos os objetos criados a partir dessa classe possuam R$ 100 de limite inicial.

// 8 - Acrescente alguns métodos na classe Conta para realizar as operações de deposito, saque, impressão de extrato e consulta do saldo disponível. Implementar a lógica de cada método. Após testar os métodos.

export class Conta {
  private _numero: string;
  public get numero(): string {
    return this._numero;
  }

  private _saldo: number;
  public get saldo(): number {
    return this._saldo;
  }

  private _limite: number;
  public get limite(): number {
    return this._limite;
  }
  public set limite(value: number) {
    this._limite = value;
  }

  private _agencia: Agencia;
  public get agencia(): Agencia {
    return this._agencia;
  }
  public set agencia(value: Agencia) {
    this._agencia = value;
  }

  constructor(numero: string, saldo: number, agencia: Agencia) {
    this._numero = numero;
    this._saldo = saldo;
    this._limite = 100;
    this._agencia = agencia;
  }

  depositar(value: number): void {
    this._saldo += value;
  }
  sacar(saque: number): boolean {
    if (saque < this._saldo + this._limite) {
      if (saque > this._saldo) {
        this._saldo -= saque;
        this._limite += this._saldo;
        this._saldo = 0;
        return true;
      }
      this._saldo -= saque;
      return true;
    }
    return false;
  }

  tirarExtrato(): string {
    return `Conta: $${this._numero} Agencia: ${this._agencia.numero}
Saldo: $${this._saldo.toFixed(2)} 
limite: $${this._limite.toFixed(2)}`;
  }

  saldoDisponível(): string {
    return `Saldo disponivel de $${(this._saldo + this._limite).toFixed(2)}`;
  }

  transferencia(conta: Conta, valor: number): boolean {
    if (valor < this._saldo + this._limite) {
      if (valor > this._saldo) {
        this._saldo -= valor;
        this._limite += this._saldo;
        this._saldo = 0;
        conta._saldo += valor;
        return true;
      }
      this._saldo -= valor;
      conta._saldo += valor;
      return true;
    }
    return false;
  }
}

const cont1 = new Conta("3030", 2000, agen1);
const cont2 = new Conta("3031", 2000, agen1);

console.log(cont1.tirarExtrato());
console.log(cont2.tirarExtrato());
cont1.transferencia(cont2, 1200);
console.log(cont1.tirarExtrato());
console.log(cont2.tirarExtrato());
cont1.sacar(550)
  ? console.log(`Saque realizado na conta ${cont1.numero}`)
  : console.log("Saldo indisponivel");
console.log(cont1.tirarExtrato());

// 9 - Sabendo que qualquer empresa possui funcionários, crie uma classe chamada Funcionario para representá-los. Acrescente os atributos nome e salario a essa classe. Além disso, você deve criar dois métodos: um para aumentar o salário e outro para consultar os dados dos funcionários. Testar os métodos de um objeto da classe Funcionario.



// 1) Defina uma classe para modelar os funcionários do banco. Sabendo que todo funcionário possui nome e salário, inclua os getters e setters dos atributos.

export class Funcionario {
  private _nome: string;
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  private _salario: number;
  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }

  constructor() {
  }

  aumentarSalario(percentual: number) {
    this._salario += (this._salario * percentual) / 100;
  }

  consultarDados(): string {
    return `      Nome: $${this._nome} 
            Salario: $${this._salario.toFixed(2)}`;
  }
}

