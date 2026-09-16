Você foi contratado para evoluir o módulo de notificações de um sistema de gestão. Atualmente, o sistema apenas envia Notificações por E-mail. No entanto, os clientes solicitaram novos canais e comportamentos:

    Enviar notificação também por SMS.

    Enviar notificação também pelo WhatsApp.

    Registrar um Log em arquivo sempre que qualquer notificação for enviada.

A equipe tentou resolver isso criando subclasses para cada combinação (EmailESms, EmailEWhatsappELog, etc.), mas a quantidade de classes explodiu e o código ficou insustentável. Sua missão é refatorar esse módulo aplicando o Padrão Decorator.
O que você deve implementar em TypeScript:

    Interface Base (Notificador)

        Deve possuir o método enviar(mensagem: string): void.

    Componente Concreto (NotificadorEmail)

        Implementa Notificador.

        O método enviar deve simular o envio exibindo no console: [E-mail] Enviando: <mensagem>.

    Decorator Abstrato (NotificadorDecorator)

        Implementa Notificador.

        Deve receber um objeto do tipo Notificador no construtor e repassar a chamada do método enviar para ele.

    Decorators Concretos (Adicionais)

        SMSDecorator: Executa o envio do notificador envelopado e exibe no console: [SMS] Enviando: <mensagem>.

        WhatsAppDecorator: Executa o envio do notificador envelopado e exibe no console: [WhatsApp] Enviando: <mensagem>.

        LogDecorator: Executa o envio do notificador envelopado e exibe no console: [LOG] Notificação registrada no sistema às <data_hora_atual>.

    Arquivo de Testes (index.ts)

        Instancie um NotificadorEmail básico e envie uma mensagem.

        Instancie e combine os decorators para criar e testar 2 cenários diferentes:

            Cenário A: Notificação por E-mail + SMS.

            Cenário B: Notificação por E-mail + WhatsApp + SMS + Log.

Regras do Exemplo:

    Princípio Open/Closed: A classe NotificadorEmail não pode ser alterada em hipótese alguma para adicionar os novos canais.

    Composição Dinâmica: O envio combinado deve ser montado no index.ts usando o encadeamento de objetos (new WhatsAppDecorator(new SMSDecorator(...))).

O que entregar:

    Código-fonte dos arquivos TypeScript (.ts).

    Print do terminal demonstrando a execução dos testes do index.ts.
