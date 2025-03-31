"use strict";
// 1) Defina uma classe para modelar os funcionários do banco. Sabendo que todo funcionário possui nome e salário, inclua os getters e setters dos atributos.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Secretaria = exports.Telefonista = exports.Gerente = exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (value) {
            this._salario = value;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.calculaBonificacao = function () {
        this.salario = (this.salario * 10) / 100;
        return this.salario;
    };
    Funcionario.prototype.consultarDados = function () {
        return "Nome: ".concat(this._nome, "\n Salario: R$").concat(this._salario.toFixed(2), " \n bonifica\u00E7\u00E3o R$").concat(this.calculaBonificacao());
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
// 2) Crie uma classe para cada tipo específico de funcionário herdando da classe Funcionario. Considere apenas três tipos específicos de funcionários: gerentes, telefonistas e secretarias.
// Os gerentes possuem um nome de usuário e uma senha para acessar o sistema do banco.
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario, userName, senha) {
        var _this = _super.call(this, nome, salario) || this;
        _this._userName = userName;
        _this._senha = senha;
        return _this;
    }
    Object.defineProperty(Gerente.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gerente.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (value) {
            this._senha = value;
        },
        enumerable: false,
        configurable: true
    });
    Gerente.prototype.calculaBonificacao = function () {
        this.salario = (this.salario * 15) / 100;
        return this.salario;
    };
    Gerente.prototype.consultarDados = function () {
        return "".concat(_super.prototype.consultarDados.call(this), " \n User Name: ").concat(this._userName, " \n Senha: ").concat(this._senha);
    };
    return Gerente;
}(Funcionario));
exports.Gerente = Gerente;
//   As telefonistas possuem um código de estação de trabalho.
var Telefonista = /** @class */ (function (_super) {
    __extends(Telefonista, _super);
    function Telefonista(nome, salario, stationCode) {
        var _this = _super.call(this, nome, salario) || this;
        _this._stationCode = stationCode;
        return _this;
    }
    Object.defineProperty(Telefonista.prototype, "stationCode", {
        get: function () {
            return this._stationCode;
        },
        set: function (value) {
            this._stationCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Telefonista.prototype.consultarDados = function () {
        return "".concat(_super.prototype.consultarDados.call(this), " \n Staion Code: ").concat(this._stationCode);
    };
    return Telefonista;
}(Funcionario));
exports.Telefonista = Telefonista;
// As secretarias possuem um número de ramal.
var Secretaria = /** @class */ (function (_super) {
    __extends(Secretaria, _super);
    function Secretaria(nome, salario, ramal) {
        var _this = _super.call(this, nome, salario) || this;
        _this._ramal = ramal;
        return _this;
    }
    Object.defineProperty(Secretaria.prototype, "ramal", {
        get: function () {
            return this._ramal;
        },
        set: function (value) {
            this._ramal = value;
        },
        enumerable: false,
        configurable: true
    });
    Secretaria.prototype.consultarDados = function () {
        return "".concat(_super.prototype.consultarDados.call(this), " \n Ramal: ").concat(this._ramal);
    };
    return Secretaria;
}(Funcionario));
exports.Secretaria = Secretaria;
// Teste o funcionamento dos três tipos de funcionários criando um objeto de cada uma das classes: Gerente, Telefonista e Secretaria.
var ger1 = new Gerente("Jailson", 3123, "Jaja", "123123");
console.log(ger1.consultarDados());
var tel1 = new Telefonista("Amelia", 2132, 225522);
console.log(tel1.consultarDados());
var sec1 = new Secretaria("Gladios", 6666, 159159);
console.log(sec1.consultarDados());
// 3) Suponha que todos os funcionários recebam uma bonificação de 10% do salário. Acrescente um método na classe Funcionario para calcular essa bonificação.
// 4) Suponha que os gerentes recebam uma bonificação maior que os outros funcionários. Reescreva o método calculaBonificacao() na classe Gerente. Depois, compile e execute o teste novamente.
// 5) Defina na classe Funcionario um método para imprimir na tela o nome, salário e bonificação dos funcionários.
// 6) Reescreva o método que imprime os dados dos funcionários nas classes Gerente, Telefonista e Secretaria para acrescentar a impressão dos dados específicos de cada tipo de funcionário.
