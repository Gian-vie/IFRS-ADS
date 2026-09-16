interface Pagamento {
    efetuar():void
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

// class ProcessadorDePedidos {
//     processar(tipoPagamento: string){
//         let Pagamento
//         if (tipoPagamento === 'PIX'){
//             Pagamento = new PagamentoPIX()
//         } else if (tipoPagamento === 'CARTAO'){
//             Pagamento = new PagamentoCartão()
//         } else {
//             throw new Error("Tipo Invalido")
//         }
//         Pagamento.efetuar
//     }
// }

// let processador = new ProcessadorDePedidos()
// processador.processar('PIX')