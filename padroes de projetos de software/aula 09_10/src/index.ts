interface Notificacao { enviar(mensagem: string, destinatario: string): void }

class NotificacaoEmail implements Notificacao {
    enviar(mensagem: string, destinatario: string): void {
        console.log(`[E-MAIL] para ${destinatario}: ${mensagem}.`)
    }
}

class NotificacaoSMS implements Notificacao {
    enviar(mensagem: string, destinatario: string): void {
        console.log(`[SMS] para ${destinatario}: ${mensagem}.`)
    }
}

class NotificacaoPush implements Notificacao {
    enviar(mensagem: string, destinatario: string): void {
        console.log(`[PUSH] para ${destinatario}: ${mensagem}.`)
    }
}

abstract class GerenciadorNotificacao {
    abstract criarNotificação(): Notificacao
    notificar(mensagem: string, destinatario: string): void {
        if (!mensagem || !destinatario) {
            throw new Error("Falha de integridade: Mensagem e destinatário não podem ser vazios.");
        }
        const notificacao = this.criarNotificação()
        notificacao.enviar(mensagem, destinatario);
    }
}

class GerenciadorEmail extends GerenciadorNotificacao {
    criarNotificacao(): Notificacao {
        return new NotificacaoEmail();
    }
}
class GerenciadorSMS extends GerenciadorNotificacao {
    criarNotificacao(): Notificacao {
        return new NotificacaoSMS();
    }
}

class GerenciadorPush extends GerenciadorNotificacao {
    criarNotificacao(): Notificacao {
        return new NotificacaoPush();
    }
}

const notificacao = new NotificacaoSMS()
notificacao.enviar('salve meu nobre','Pedro')
