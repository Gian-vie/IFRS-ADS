//organização e agrupa por nome
// independe de arqivo

namespace Banco1 {
  export class Conta {}
}

class contaPF extends Banco1.Conta {}

//namespace aninhados

namespace Banco {
  export namespace Investimento {
    export class ContaSalario {}
  }
}

export class SalarioConta extends Banco.Investimento.ContaSalario{

}