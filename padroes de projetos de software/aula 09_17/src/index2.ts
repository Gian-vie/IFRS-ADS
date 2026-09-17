interface BrinquedoTransporte {
    mudarDeLugar(): void

}
interface BrinquedoAcessorio {
    usar(): void

}

class Capacete implements BrinquedoAcessorio {
    usar(): void {
        console.log('usando Capacete')
    }
}

class Foguete implements BrinquedoTransporte {
    mudarDeLugar(): void {
        console.log('movendo foguete')
    }
}

class ChapeuPirata implements BrinquedoAcessorio {
    usar(): void {
        console.log('usando chapeu')
    }
}


class NavioPirata implements BrinquedoTransporte {
    mudarDeLugar(): void {
        console.log('movendo navio')
    }
}

interface FabricaBrinquedo {
    criarAcessorio(): BrinquedoAcessorio;
    criarTransporte(): BrinquedoTransporte;
}

class FabricaEspaco implements FabricaBrinquedo {
    criarAcessorio(): BrinquedoAcessorio {
        return new Capacete()
    }
    criarTransporte(): BrinquedoTransporte {
        return new Foguete()
    }
}

class FabricaPirata implements FabricaBrinquedo {
    criarAcessorio(): BrinquedoAcessorio {
        return new ChapeuPirata()
    }
    criarTransporte(): BrinquedoTransporte {
        return new NavioPirata()
    }
}

class Pedido {
    fabrica: FabricaBrinquedo
    constructor(fabrica: FabricaBrinquedo){
        this.fabrica = fabrica
    }

    montar(): void{
        const acessorio: BrinquedoAcessorio = this.fabrica.criarAcessorio();
        const transporte: BrinquedoTransporte = this.fabrica.criarTransporte();

        acessorio.usar()
        transporte.mudarDeLugar()
    }

}

const TEMA: string = "ESPACO"
let factory = TEMA == "PIRATA" ? new FabricaPirata() : new FabricaEspaco()


const p = new Pedido(factory)
p.montar()