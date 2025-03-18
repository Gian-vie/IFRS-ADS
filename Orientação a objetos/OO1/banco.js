"use strict";
// 1 - Crie uma pasta chamada BancoOO
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = exports.Conta = exports.Agencia = exports.CartaoCredito = exports.Cliente = void 0;
// 2 - Implemente uma classe para definir os objetos que representarão os clientes de um banco. Essa classe deve declarar dois atributos: um para os nomes e outro para os códigos dos clientes. Faça um teste criando dois objetos da classe Cliente.
// 3 - Os bancos oferecem aos clientes a possibilidade de obter um cartão de crédito que pode ser utilizados para fazer compras. Um cartão de crédito possui um número e uma data de validade. Crie uma classe para modelar os objetos que representarão os cartões de crédito. Faça um teste criando dois objetos da classe CartaoDeCredito.
var Cliente = /** @class */ (function () {
    function Cliente(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var cli1 = new Cliente("3030", "cliente1");
var cli2 = new Cliente("3031", "cliente2");
var CartaoCredito = /** @class */ (function () {
    function CartaoCredito(numero, validade, cliente) {
        this.numero = numero;
        this.validade = validade;
        this.cliente = cliente;
    }
    return CartaoCredito;
}());
exports.CartaoCredito = CartaoCredito;
var cartão1 = new CartaoCredito("10003030", "17/03/2030", cli1);
var cartão2 = new CartaoCredito("10003031", "17/03/2030", cli2);
// 4 - As agências do banco possuem número. Crie uma classe para definir os objetos que representarão as agências. Faça um teste criando dois objetos da classe Agencia.
var Agencia = /** @class */ (function () {
    function Agencia(numero) {
        this.numero = numero;
    }
    return Agencia;
}());
exports.Agencia = Agencia;
var agen1 = new Agencia("0210");
// 5 - As contas do banco possuem número, saldo e limite. Crie uma classe para definir os objetos que representarão as contas. Faça um teste criando dois objetos da classe Conta.
// 6 - Faça um teste que imprima os atributos de um objeto da classe Conta logo após a sua criação.
// 7 - Altere a classe Conta para que todos os objetos criados a partir dessa classe possuam R$ 100 de limite inicial.
// 8 - Acrescente alguns métodos na classe Conta para realizar as operações de deposito, saque, impressão de extrato e consulta do saldo disponível. Implementar a lógica de cada método. Após testar os métodos.
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, agencia) {
        this.numero = numero;
        this.saldo = saldo;
        this.limite = 100;
        this.agencia = agencia;
    }
    Conta.prototype.depositar = function (value) {
        this.saldo += value;
    };
    Conta.prototype.sacar = function (saque) {
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
    };
    Conta.prototype.tirarExtrato = function () {
        return "Conta: $".concat(this.numero, " Agencia: ").concat(this.agencia.numero, "\nSaldo: $").concat(this.saldo.toFixed(2), " \nlimite: $").concat(this.limite.toFixed(2));
    };
    Conta.prototype.saldoDisponível = function () {
        return "Saldo disponivel de $".concat((this.saldo + this.limite).toFixed(2));
    };
    Conta.prototype.transferencia = function (conta, valor) {
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
    };
    return Conta;
}());
exports.Conta = Conta;
var cont1 = new Conta("3030", 2000, agen1);
var cont2 = new Conta("3031", 2000, agen1);
console.log(cont1.tirarExtrato());
console.log(cont2.tirarExtrato());
cont1.transferencia(cont2, 1200);
console.log(cont1.tirarExtrato());
console.log(cont2.tirarExtrato());
cont1.sacar(550)
    ? console.log("Saque realizado na conta ".concat(cont1.numero))
    : console.log("Saldo indisponivel");
console.log(cont1.tirarExtrato());
// 9 - Sabendo que qualquer empresa possui funcionários, crie uma classe chamada Funcionario para representá-los. Acrescente os atributos nome e salario a essa classe. Além disso, você deve criar dois métodos: um para aumentar o salário e outro para consultar os dados dos funcionários. Testar os métodos de um objeto da classe Funcionario.
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.aumentarSalario = function (percentual) {
        this.salario += (this.salario * percentual) / 100;
    };
    Funcionario.prototype.consultarDados = function () {
        return "      Nome: $".concat(this.nome, " \n            Salario: $").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
// 1) Defina um vínculo entre os objetos que representam os clientes e os objetos que representam os cartões de crédito. Para isso, você deve alterar a classe CartaoDeCredito. Teste o relacionamento entre clientes e cartões de crédito.
// 2) Defina um vínculo entre os objetos que representam as agências e os objetos que representam os contas. Para isso, você deve alterar a classe Conta. Teste o relacionamento entre contas e agências.
// 4) Acrescente um construtor na classe Agencia para receber um número como parâmetro. 
// 5) Acrescente um construtor na classe CartaoDeCredito para receber um número como parâmetro.
// 6) Acrescente um construtor na classe Conta para receber uma Agência como parâmetro.
// 7) Acrescente um método na classe Conta para implementar a lógica de transferência de valores entre contas. Faça um teste para verificar o funcionamento do método transfere.
