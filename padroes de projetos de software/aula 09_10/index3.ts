interface Pagamento {
    efetuar(): void
}

// class PagamentoPIX implements Pagamento {
//     efetuar(): void {
//         console.log('pagamento efetuado com PIX!')
//     }
// }
// class PagamentoCartão implements Pagamento {
//     efetuar(): void {
//         console.log('pagamento efetuado com Cartão!')
//     }
// }

// abstract class ProcessadorDePedidos {
//     abstract criarPagamento(): Pagamento
//     processar() {
//         const pagamento = this.criarPagamento()
//         pagamento.efetuar()
//     }
// }

// class ProcessadorPIX extends ProcessadorDePedidos {
//     criarPagamento(): Pagamento {
//         return new PagamentoPIX()
//     }
// }

// class ProcessadorCartao extends ProcessadorDePedidos {
//     criarPagamento(): Pagamento {
//         return new PagamentoCartão()
//     }
// }

// let processador = new ProcessadorPIX()
// processador.processar()