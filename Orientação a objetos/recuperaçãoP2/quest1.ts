// No diagrama de classes abaixo existem as classes Core, News, Videos, Galeria, Foto e OperationNews. Sua tarefa é refatorar o código da classe OperationsNews, nomeando a mesma para Operations e tornado as suas operações compatíveis com as classes News, Videos e Galeria.
abstract class Core {
  id: string;
  titulo: string;
  private ativo: boolean;

  constructor() {
    this.id = Math.random().toString(36).substring(2, 9);
    this.ativo = true;
  }

  public getAtivo(): boolean {
    return this.ativo;
  }
}

export class Operations<T extends Core> {
  private lista: T[];

  inserir(n: T): boolean {return true}

  alterar(id: string, dadosAtualizados: T): boolean {return true}

  excluir(id: string): boolean {return true}

  getAll(): Array<T> {return this.lista}

  getActive(): Array<T> {return this.lista}
}

//     ===========================================================

//     1 Criar uma classe chamada Mail, com os seguintes atributos e métodos:

// Atributos (Considerar o conceito de encapsulamento)
// - remetente
// - destinatario
// - assunto
// - mensagem

// 2 - Criar uma classe chamada SMTP, com os seguintes atributos e métodos:

// Atributos (Considerar o conceito de encapsulamento)
// - host
// - porta
// - usuario
// - senha

// Métodos

// enviar(email:Mail) : void - deve receber uma objeto do tipo Mail por parâmetro e, utilzando o comando console.log, imprimir na tela os seus atributos.

// Ex:

// Remetente: ronaldo.rosa@bento.ifrs.edu.br
// Destinatario: ronaldo.rosa@bento.ifrs.edu.br
// Assunto: Teste de Email
// Mensagem: Estamos testando o envio de emails

// 3 - Fazer o teste do envio de e-mail, criando os objetos necessários e chamando os métodos adequados.

export class Mail {
  private _remetente: String;
  public get remetente(): String {
    return this._remetente;
  }
  public set remetente(value: String) {
    this._remetente = value;
  }

  private _destinatario: String;
  public get destinatario(): String {
    return this._destinatario;
  }
  public set destinatario(value: String) {
    this._destinatario = value;
  }

  private _assunto: String;
  public get assunto(): String {
    return this._assunto;
  }
  public set assunto(value: String) {
    this._assunto = value;
  }

  private _mensagem: String;
  public get mensagem(): String {
    return this._mensagem;
  }
  public set mensagem(value: String) {
    this._mensagem = value;
  }

  constructor(
    remetente: string,
    destinatario: string,
    assunto: string,
    mensagem: string
  ) {
    this.remetente = remetente;
    this.destinatario = destinatario;
    this.assunto = assunto;
    this.mensagem = mensagem;
  }
}

export class SMTP {
  private host: String;

  private porta: String;

  private usuario: String;

  private senha: String;

  enviar(email: Mail): void {
    console.log(`

    Remetente: ${email.remetente}
    Destinatario: ${email.destinatario}
    Assunto: ${email.assunto}
    Mensagem: ${email.mensagem}

    `);
  }
}


const SMTP1:SMTP = new SMTP
const email:Mail = new Mail("gian", "ronaldo", "recuperação", "esse é um email da recuperação")

SMTP1.enviar(email)


// /////////////////////////////////////////////////////////////////////////////////////


// Refatore o código abaixo para que o mesmo mantenha as mesmas funcionalidades, porém fazendo uso de interfaces:

abstract class FormaGeometrica {

  abstract getArea(): number;

}

// class Circulo extends FormaGeometrica {

//   constructor(private raio: number) {

//     super();

//   }

//   getArea(): number {

//     return Math.PI * this.raio ** 2;

//   }

// }

// class Retangulo extends FormaGeometrica {

//   constructor(private largura: number, private altura: number) {

//     super();

//   }

//   getArea(): number {

//     return this.largura * this.altura;

//   }

// }

// class Triangulo extends FormaGeometrica {

//   constructor(private base: number, private altura: number) {

//     super();

//   }

//   getArea(): number {

//     return (this.base * this.altura) / 2;

//   }

// }

export interface IFormaGeometrica {

getArea(): number;
}

class Circulo implements IFormaGeometrica {

  constructor(private raio: number) {
  }

  getArea(): number {

    return Math.PI * this.raio ** 2;

  }

}

class Retangulo implements IFormaGeometrica {
  constructor(private largura: number, private altura: number) {
  }

  getArea(): number {

    return this.largura * this.altura;

  }

}

class Triangulo implements IFormaGeometrica {

  constructor(private base: number, private altura: number) {
  }

  getArea(): number {

    return (this.base * this.altura) / 2;

  }

}