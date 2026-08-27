export interface Observer {
    // update(message: string): void
    update(message: string): void;
    update(pedido: { pedido: string; estado: string }): void;
}


/**
 * 
Classe Pedido: Deve permitir adicionar, remover e notificar os observadores. 
Além de mantr o estado atual (criado, pago, enviado, cancelado) e aciona as notificações sempre que o estado sofrer transição.


EmailService: Simula o envio de um e-mail de confirmação ao cliente.


InventoryService: Simula a baixa dos produtos no estoque quando o pedido é pago.


LogService: Registra em console cada mudança de estado com data e hora.

 */


export class Pedido {
    private observer: Observer[] = []
    private message: string;
    private status: string;

    constructor(message: string, status: string) {
        // Validação básica para Integridade dos dados de entrada
        if (!message || !status) {
            throw new Error("Mensagem e status são obrigatórios para instanciar um Pedido.");
        }
        this.message = message;
        this.status = status;
    }

    addPedido(pedido: Observer): void {
        this.observer.push(pedido)
    }

    removePedido(pedido: Observer): void {
        this.observer = this.observer.filter(
            p => p !== pedido
        )
    }

    notify(): void {
        this.observer.forEach(
            o => o.update(this.message)
        )
    }

    setAvailable(availabou: boolean): void {
        if (availabou) {
            this.notify()
        }
    }



}

// export class Email implements Observer {
//     constructor(private email: string) { }
//     update(message: string): void {
//         console.log(`Enviando e-mail para ${this.email}` + message)
//     }
// }

// export class Sms implements Observer {
//     constructor(private sms: string) { }
//     update(message: string): void {
//         console.log(`Enviando sms para ${this.sms}` + message)
//     }
// }

// export class Product {
//     private observer: Observer[] = []

//     subscribe(observer: Observer): void {
//         this.observer.push(observer)
//     }

//     unsubscribe(observer: Observer): void {
//         this.observer = this.observer.filter(
//             o => o !== observer
//         )
//     }

//     notify(message: string): void {
//         this.observer.forEach(
//             o => o.update(message)
//         )
//     }

//     setAvailable(availabou: boolean): void {

//         if (availabou) {
//             this.notify('Produto disponivel')
//         }
//     }

// }


