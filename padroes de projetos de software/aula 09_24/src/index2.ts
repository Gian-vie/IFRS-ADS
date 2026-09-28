class Lanche {
  public pao?: string;
  public carne?: string;
  public queijo?: boolean;
  public salada?: boolean;
  public molho?: boolean;

  constructor(buider: LancheBuilder) {
    this.pao = buider.pao;
    this.carne = buider.carne;
    this.queijo = buider.queijo;
    this.salada = buider.salada;
    this.molho = buider.molho;
  }

  detalhar() {
    console.log(`
            pao: ${this.pao}
            carne: ${this.carne}
            queijo: ${this.queijo}
            salada: ${this.salada}
            molho: ${this.molho}
            `);
  }
}

class LancheBuilder {
  // private lanche: Lanche

  public pao: string;
  public carne: string;
  public queijo: boolean = false;
  public salada: boolean = false;
  public molho: boolean = false;

  constructor(pao: string, carne: string) {
    this.pao = pao;
    this.carne = carne;
  }

  comQueijo() {
    this.queijo = true;
    return this;
  }

  comSalada() {
    this.salada = true;
    return this;
  }

  comMolho() {
    this.molho = true;
    return this;
  }

  build() {
    const lanche = new Lanche(this)
    this.queijo = false
    this.salada = false
    this.molho = false
    return lanche
  }
}

class LancheDiretor {
    private builder: LancheBuilder;

    constructor(builder: LancheBuilder){
        this.builder = builder
    }

    criarLancheCompleto():Lanche{
        return this. builder
                        .comQueijo()
                        .comSalada()
                        .comMolho()
                        .build()
    }
    
    criarLancheCarneEQueijo():Lanche{
        return this. builder
                        .comQueijo()
                        .build()
    }
    
}

const builder = new LancheBuilder('Brioche', '200g')

const diretor = new LancheDiretor()

const lanche = ();
