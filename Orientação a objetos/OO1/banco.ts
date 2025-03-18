// 1 - Crie uma pasta chamada BancoOO

// 2 - Implemente uma classe para definir os objetos que representarão os clientes de um banco. Essa classe deve declarar dois atributos: um para os nomes e outro para os códigos dos clientes. Faça um teste criando dois objetos da classe Cliente.

// 3 - Os bancos oferecem aos clientes a possibilidade de obter um cartão de crédito que pode ser utilizados para fazer compras. Um cartão de crédito possui um número e uma data de validade. Crie uma classe para modelar os objetos que representarão os cartões de crédito. Faça um teste criando dois objetos da classe CartaoDeCredito.

export class Cliente {
  codigo: string;
  nome: string;

  constructor(codigo: string, nome: string) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

const cli1: Cliente = new Cliente("3030", "cliente1");
const cli2: Cliente = new Cliente("3031", "cliente2");

export class CartaoCredito {
  numero: string;
  validade: string;
  cliente: Cliente;

  constructor(numero: string, validade: string, cliente: Cliente) {
    this.numero = numero;
    this.validade = validade;
    this.cliente = cliente;
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
  numero: string;

  constructor(numero: string) {
    this.numero = numero;
  }
}

const agen1 = new Agencia("0210");
// 5 - As contas do banco possuem número, saldo e limite. Crie uma classe para definir os objetos que representarão as contas. Faça um teste criando dois objetos da classe Conta.

// 6 - Faça um teste que imprima os atributos de um objeto da classe Conta logo após a sua criação.

// 7 - Altere a classe Conta para que todos os objetos criados a partir dessa classe possuam R$ 100 de limite inicial.

// 8 - Acrescente alguns métodos na classe Conta para realizar as operações de deposito, saque, impressão de extrato e consulta do saldo disponível. Implementar a lógica de cada método. Após testar os métodos.

export class Conta {
  numero: string;
  saldo: number;
  limite: number;
  agencia: Agencia;

  constructor(numero: string, saldo: number, agencia: Agencia) {
    this.numero = numero;
    this.saldo = saldo;
    this.limite = 100;
    this.agencia = agencia;
  }

  depositar(value: number): void {
    this.saldo += value;
  }
  sacar(saque: number): boolean {
    if (saque < this.saldo + this.limite) {
      if (saque > this.saldo) {
        this.saldo -= saque;
        this.limite += this.saldo;
        this.saldo = 0;
        return true;
      }
      this.saldo -= saque;
      return true;
    }
    return false;
  }

  tirarExtrato(): string {
    return `Conta: $${this.numero} Agencia: ${this.agencia.numero}
Saldo: $${this.saldo.toFixed(2)} 
limite: $${this.limite.toFixed(2)}`;
  }

  saldoDisponível(): string {
    return `Saldo disponivel de $${(this.saldo + this.limite).toFixed(2)}`;
  }

  transferencia(conta: Conta, valor: number): boolean {
    if (valor < this.saldo + this.limite) {
      if (valor > this.saldo) {
        this.saldo -= valor;
        this.limite += this.saldo;
        this.saldo = 0;
        conta.saldo += valor;
        return true;
      }
      this.saldo -= valor;
      conta.saldo += valor;
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

export class Funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  aumentarSalario(percentual: number) {
    this.salario += (this.salario * percentual) / 100;
  }

  consultarDados(): string {
    return `      Nome: $${this.nome} 
            Salario: $${this.salario.toFixed(2)}`;
  }
}

// 1) Defina um vínculo entre os objetos que representam os clientes e os objetos que representam os cartões de crédito. Para isso, você deve alterar a classe CartaoDeCredito. Teste o relacionamento entre clientes e cartões de crédito.

// 2) Defina um vínculo entre os objetos que representam as agências e os objetos que representam os contas. Para isso, você deve alterar a classe Conta. Teste o relacionamento entre contas e agências.

// 4) Acrescente um construtor na classe Agencia para receber um número como parâmetro.

// 5) Acrescente um construtor na classe CartaoDeCredito para receber um número como parâmetro.

// 6) Acrescente um construtor na classe Conta para receber uma Agência como parâmetro.

// 7) Acrescente um método na classe Conta para implementar a lógica de transferência de valores entre contas. Faça um teste para verificar o funcionamento do método transfere.
