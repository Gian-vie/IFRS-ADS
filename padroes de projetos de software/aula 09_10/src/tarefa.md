Implementar o padrão Factory Method em TypeScript para criar um sistema extensível de envio de notificações que suporte múltiplos canais (E-mail, SMS e Push Notification).

Uma plataforma de e-commerce precisa enviar atualizações sobre o status dos pedidos para os clientes. Dependendo da preferência do cliente ou da urgência do aviso, a mensagem deve ser enviada por E-mail, SMS ou Push Notification.

Para evitar criar lógicas condicionais complexas (if/else gigante) espalhadas pelo sistema toda vez que um novo canal for adicionado, a equipe decidiu aplicar o Factory Method.

Requisitos

    Interface do Produto (Notificacao)
        Deve possuir o método: enviar(mensagem: string, destinatario: string): void.
    Produtos Concretos (Canais de Envio)
        NotificacaoEmail: Exibe no console "[E-MAIL] para {destinatario}: {mensagem}".
        NotificacaoSMS: Exibe no console "[SMS] para {destinatario}: {mensagem}".
        NotificacaoPush: Exibe no console "[PUSH] para {destinatario}: {mensagem}".
    Classe Abstrata Criadora (GerenciadorNotificacao)
        Declara o Factory Method abstrato: abstract criarNotificacao(): Notificacao.
        Implementa a lógica principal no método notificar(mensagem: string, destinatario: string): void, que obtém a notificação chamando o método fábrica e executa o envio.
    Criadores Concretos (Fábricas específicas)
        GerenciadorEmail: Retorna uma instância de NotificacaoEmail.
        GerenciadorSMS: Retorna uma instância de NotificacaoSMS.
        GerenciadorPush: Retorna uma instância de NotificacaoPush.
    Simulação do Cliente
        Criar uma função cliente que receba a fábrica (GerenciadorNotificacao) como parâmetro e dispare um teste.
        Simular o envio de mensagens mudando dinamicamente a fábrica utilizada.
