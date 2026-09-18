// --- Interfaces dos Produtos ---
interface ProdutoPrincipal {
    preparar(): string;
}

interface Bebida {
    servir(): string;
}

interface Sobremesa {
    preparar(): string;
}

// --- Produtos da Família Hamburgueria ---
class Hamburguer implements ProdutoPrincipal {
    public preparar(): string {
        return "[Hamburgueria] Preparando o hambúrguer na chapa.";
    }
}

class Refrigerante implements Bebida {
    public servir(): string {
        return "[Hamburgueria] Servindo refrigerante no copo.";
    }
}

class SobremesaHamburgueria implements Sobremesa {
    public preparar(): string {
        return "[Hamburgueria] Preparando sundae.";
    }
}

// --- Produtos da Família Pizzaria ---
class Pizza implements ProdutoPrincipal {
    public preparar(): string {
        return "[Pizzaria] Assando a pizza no forno a lenha.";
    }
}

class RefrigerantePizzaria implements Bebida {
    public servir(): string {
        return "[Pizzaria] Servindo refrigerante na jarra.";
    }
}

class SobremesaPizzaria implements Sobremesa {
    public preparar(): string {
        return "[Pizzaria] Preparando pizza doce.";
    }
}

// --- Interface da Abstract Factory ---
interface RestauranteFactory {
    criarProdutoPrincipal(): ProdutoPrincipal;
    criarBebida(): Bebida;
    criarSobremesa(): Sobremesa;
}

// --- Fábricas Concretas ---
class HamburgueriaFactory implements RestauranteFactory {
    public criarProdutoPrincipal(): ProdutoPrincipal {
        return new Hamburguer();
    }
    public criarBebida(): Bebida {
        return new Refrigerante();
    }
    public criarSobremesa(): Sobremesa {
        return new SobremesaHamburgueria();
    }
}

class PizzariaFactory implements RestauranteFactory {
    public criarProdutoPrincipal(): ProdutoPrincipal {
        return new Pizza();
    }
    public criarBebida(): Bebida {
        return new RefrigerantePizzaria();
    }
    public criarSobremesa(): Sobremesa {
        return new SobremesaPizzaria();
    }
}

// --- Classe Cliente (Pedido) ---
class Pedido {
    // Propriedades privadas e de leitura garantem confidencialidade e integridade
    private readonly produtoPrincipal: ProdutoPrincipal;
    private readonly bebida: Bebida;
    private readonly sobremesa: Sobremesa;

    constructor(factory: RestauranteFactory) {
        this.produtoPrincipal = factory.criarProdutoPrincipal();
        this.bebida = factory.criarBebida();
        this.sobremesa = factory.criarSobremesa();
    }

    public montar(): void {
        console.log("Iniciando montagem do pedido...");
        console.log(this.produtoPrincipal.preparar());
        console.log(this.bebida.servir());
        console.log(this.sobremesa.preparar());
        console.log("Pedido finalizado com sucesso.\n");
    }
}

// --- Execução Principal ---
console.log("--- Pedido 1: Hamburgueria ---");
const factoryHamburgueria: RestauranteFactory = new HamburgueriaFactory();
const pedido1 = new Pedido(factoryHamburgueria);
pedido1.montar();

console.log("--- Pedido 2: Pizzaria ---");
const factoryPizzaria: RestauranteFactory = new PizzariaFactory();
const pedido2 = new Pedido(factoryPizzaria);
pedido2.montar();