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

  constructor(nome: string, salario: number) {
    this._nome = nome;
    this._salario = salario;
  }

  aumentarSalario(): number{
    this._salario += (this._salario * 10)/100
    return this._salario
  }

  calculaBonificacao(): number {
    this.salario = (this.salario * 10) / 100;
    return this.salario
}

  consultarDados(): string {
    return `Nome: ${this._nome}\n Salario: R$${this._salario.toFixed(2)} \n bonificação R$${this.calculaBonificacao()}`;
  }
}

// 2) Crie uma classe para cada tipo específico de funcionário herdando da classe Funcionario. Considere apenas três tipos específicos de funcionários: gerentes, telefonistas e secretarias.

// Os gerentes possuem um nome de usuário e uma senha para acessar o sistema do banco.

export class Gerente extends Funcionario {
  private _userName: string;
  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }

  private _senha: string;
  public get senha(): string {
    return this._senha;
  }
  public set senha(value: string) {
    this._senha = value;
  }

  constructor(nome: string, salario: number, userName: string, senha: string) {
    super(nome, salario);
    this._userName = userName;
    this._senha = senha;
  }

  calculaBonificacao(): number {
    this.salario = (this.salario * 15) / 100;
    return this.salario
  }

  consultarDados(): string {
    return `${super.consultarDados()} \n User Name: ${
      this._userName
    } \n Senha: ${this._senha}`;
  }
}

//   As telefonistas possuem um código de estação de trabalho.

export class Telefonista extends Funcionario {
  private _stationCode: number;
  public get stationCode(): number {
    return this._stationCode;
  }
  public set stationCode(value: number) {
    this._stationCode = value;
  }
  constructor(nome: string, salario: number, stationCode: number) {
    super(nome, salario);
    this._stationCode = stationCode;
  }

  consultarDados(): string {
    return `${super.consultarDados()} \n Staion Code: ${this._stationCode}`;
  }
}

// As secretarias possuem um número de ramal.

export class Secretaria extends Funcionario {
  private _ramal: number;
  public get ramal(): number {
    return this._ramal;
  }
  public set ramal(value: number) {
    this._ramal = value;
  }
  constructor(nome: string, salario: number, ramal) {
    super(nome, salario);
    this._ramal = ramal;
  }

  consultarDados(): string {
    return `${super.consultarDados()} \n Ramal: ${this._ramal}`;
  }
}

// Teste o funcionamento dos três tipos de funcionários criando um objeto de cada uma das classes: Gerente, Telefonista e Secretaria.

const ger1 = new Gerente("Jailson", 3123, "Jaja", "123123");
console.log(ger1.consultarDados());

const tel1 = new Telefonista("Amelia", 2132, 225522);
console.log(tel1.consultarDados());

const sec1 = new Secretaria("Gladios", 6666, 159159);
console.log(sec1.consultarDados());

// 3) Suponha que todos os funcionários recebam uma bonificação de 10% do salário. Acrescente um método na classe Funcionario para calcular essa bonificação.

// 4) Suponha que os gerentes recebam uma bonificação maior que os outros funcionários. Reescreva o método calculaBonificacao() na classe Gerente. Depois, compile e execute o teste novamente.

// 5) Defina na classe Funcionario um método para imprimir na tela o nome, salário e bonificação dos funcionários.

// 6) Reescreva o método que imprime os dados dos funcionários nas classes Gerente, Telefonista e Secretaria para acrescentar a impressão dos dados específicos de cada tipo de funcionário.
