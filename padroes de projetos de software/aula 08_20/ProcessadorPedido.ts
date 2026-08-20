import { Pedido } from "./models/Pedido";
import { DescontoStrategy, PagamentoStrategy, NotificacaoStrategy } from "./strategies/interfaces";

export class ProcessadorPedido {
    constructor(
        private descontoStrategy: DescontoStrategy,
        private pagamentoStrategy: PagamentoStrategy,
        private notificacaoStrategy: NotificacaoStrategy 
    ) {}

    public setDescontoStrategy(strategy: DescontoStrategy): void {
        this.descontoStrategy = strategy;
    }
    
    public setPagamentoStrategy(strategy: PagamentoStrategy): void {
        this.pagamentoStrategy = strategy;
    }

    public setNotificacaoStrategy(strategy: NotificacaoStrategy): void {
        this.notificacaoStrategy = strategy;
    }
    
    public finalizarPedido(pedido: Pedido): void {
        console.log(`\n==================================================`);
        console.log(`INICIANDO CHECKOUT - PEDIDO ${pedido.id}`);
        console.log(`Valor Original: R$ ${pedido.valorTotal.toFixed(2)}`);

        const desconto = this.descontoStrategy.calcularDesconto(pedido);
        const valorComDesconto = pedido.valorTotal - desconto;
        console.log(`Desconto Aplicado: R$ ${desconto.toFixed(2)} -> Total Final: R$ ${valorComDesconto.toFixed(2)}`);

        const pagamentoSucesso = this.pagamentoStrategy.processarPagamento(valorComDesconto);

        if (pagamentoSucesso) {
            const msg = `Seu pedido ${pedido.id} foi pago com sucesso no valor final de R$ ${valorComDesconto.toFixed(2)}!`;
            this.notificacaoStrategy.enviarNotificacao(msg, pedido.destinatario);
        }
        console.log(`==================================================\n`);
    }
}