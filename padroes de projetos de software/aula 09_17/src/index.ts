interface Botao {renderizar(): void}
interface Checkbox {marcar(): void}



class CheckboxWindows implements Checkbox {
    marcar(): void {
        console.log('marcando checkbox estilo windows')
    }
}

class BotaoWindows implements Botao {
    renderizar(): void {
        console.log('renderizando botão estilo windows')
    }
}

class CheckboxMac implements Checkbox {
    marcar(): void {
        console.log('marcando checkbox estilo mac')
    }
}

class BotaoMac implements Botao {
    renderizar(): void {
        console.log('renderizando botão estilo mac')
    }
}

interface GUIFactory {
    criarBotão(): Botao;
    CriarCheckbox(): Checkbox;
}

class GUIFactoryWindows implements GUIFactory {
    criarBotão(): Botao {
        return new BotaoWindows()
    }
    CriarCheckbox(): Checkbox {
        return new CheckboxWindows()
    }
}

class GUIFactoryMac implements GUIFactory {
    criarBotão(): Botao {
        return new BotaoMac()
    }
    CriarCheckbox(): Checkbox {
        return new CheckboxMac()
    }
}

class Aplicacao {

    private botao: Botao
    private checkbox: Checkbox
    constructor ( factory: GUIFactory){
        this.botao = factory.criarBotão()
        this.checkbox = factory.CriarCheckbox()
    }

    desenharTela(): void {
        this.botao.renderizar()
        this.checkbox.marcar()    
    }

}

const SO: string = 'MAC'
let factory:GUIFactory
factory = SO === "MAC" ? new GUIFactoryMac() : new GUIFactoryWindows()

const app = new Aplicacao(factory)
app.desenharTela()