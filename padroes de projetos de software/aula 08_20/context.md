Você foi contratado para realizar a refatoração do módulo de finalização de compras. (Checkout) de um grande e-commerce. Atualmente, o sistema possui regras rígidas e acopladas para cálculo de descontos. formas de pagamento e envio de notificações.

Sua missão é projetar e implementar uma arquitetura extensível baseada no padrão Strategy dividida em 3 domínios principais, cada um contendo 3 estratégias concretas intercambiáveis (totalizando 9 estratégias).
export interface Itempedido {
   nome: string; preco:number; quantidade: number}

export class Pedido {

   constructor(id:string, itens: ItemPedido[], destinatario: string){}
}

Domínio 1: Estratégias de Desconto (DescontoStrategy)

Interface com o método calcularDesconto(pedido: Pedido):number
DescontoClienteVIPStrategy: Aplicar desconto fixo  de 15% sobre o valor total dos itens do pedido.

DescontoPorQuantidadeStrategy: Aplicar 10% de desconto no total apenas se a quantidade total de itens do pedido for superior a 5 unidades. Caso contrário, desconto é 0.

DescontoCupomFixoStrategy: Subtrair um valor fixo (ex: R$ 20,00) do valor total. O total final com desconto não pode ser menor que zero.

Domínio 2: Estratégias de Pagamento (PagamentoStrategy)
Interface com o método processarPagamento(valorTotal:number)
PagamentoPixStrategy: Retorna com sucesso imediato e exibe no console a geração de uma Chave Pix simbólica. Sem taxas adicionais.

PagamentoCartaoCreditoStrategy: Aplicar uma taxa de 2,5% sobre o valor cobrado.

PagamentoBoletoStrategy: Adiciona taxa fixa de R$ 2,5 ao valor.

Domínio 3: Estratégia de Notificação (NotificacaoStrategy)
interface com o método enviarNotificacao(nome: string, destinatario: string)

NotificacaoEmailStrategy: Imprime no console (Enviado um e-mail)
NotificacaoSMSStrategy: Imprime no console (Enviado por SMS)
NotificacaoWhatsAppStrategy: Imprime no console (Enviado por Whatsapp)

files:

[main](/padroes de projetos de software\aula 08_20\main.ts) 
[processadorpedidos](/padroes de projetos de software\aula 08_20\ProcessadorPedido.ts)

