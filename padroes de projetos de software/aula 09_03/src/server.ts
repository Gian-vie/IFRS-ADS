// 1. Interface Base
export interface Notificador {
    enviar(mensagem: string): void;
}

// 2. Componente Concreto
export class NotificadorEmail implements Notificador {
    enviar(mensagem: string): void {
        // Integridade: Garantir que o payload não é malformado ou nulo
        if (!mensagem || mensagem.trim() === '') {
            throw new Error("Falha de Integridade: A mensagem não pode estar vazia.");
        }
        
        try {
            console.log(`[E-mail] Enviando: ${mensagem}`);
        } catch (error) {
            // Disponibilidade: Evitar que falhas de I/O encerrem o processo abruptamente
            console.error("Falha de Disponibilidade no serviço de E-mail.", error);
        }
    }
}

// 3. Decorator Abstrato
export abstract class NotificadorDecorator implements Notificador {
    protected wrapper: Notificador;

    constructor(wrapper: Notificador) {
        this.wrapper = wrapper;
    }

    enviar(mensagem: string): void {
        this.wrapper.enviar(mensagem);
    }
}

// 4. Decorators Concretos
export class SMSDecorator extends NotificadorDecorator {
    enviar(mensagem: string): void {
        super.enviar(mensagem); // Repassa para o objeto interno primeiro
        try {
            console.log(`[SMS] Enviando: ${mensagem}`);
        } catch (error) {
            console.error("Falha de Disponibilidade no serviço de SMS.", error);
        }
    }
}

export class WhatsAppDecorator extends NotificadorDecorator {
    enviar(mensagem: string): void {
        super.enviar(mensagem);
        try {
            console.log(`[WhatsApp] Enviando: ${mensagem}`);
        } catch (error) {
            console.error("Falha de Disponibilidade no serviço de WhatsApp.", error);
        }
    }
}

export class LogDecorator extends NotificadorDecorator {
    enviar(mensagem: string): void {
        super.enviar(mensagem);
        try {
            const dataHoraAtual = new Date().toISOString();
            // Confidencialidade: Registramos o evento de auditoria sem vazar o conteúdo da mensagem
            // caso ela contenha PII (Personally Identifiable Information) ou dados sensíveis.
            const tamanhoMensagem = mensagem.length;
            console.log(`[LOG] Notificação registrada no sistema às ${dataHoraAtual}. (Payload size: ${tamanhoMensagem} bytes)`);
        } catch (error) {
            console.error("Falha na gravação do arquivo de log.", error);
        }
    }
}