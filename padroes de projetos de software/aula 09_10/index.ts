// interface Transporte { entregar(): string}
// class Caminhão implements Transporte {
//     entregar(): string {
//         return "entrega realizada por terra."
//     }
// }
// class Navio implements Transporte {
//     entregar(): string {
//         return "entrega realizada por mar."
//     }
// }

// abstract class Logistica {
//     abstract criarTransporte(): Transporte
//     executaEntrega(): string {
//         const Transporte = this.criarTransporte()
//         return `Logistica: ${Transporte.entregar}`
//     }
// }

// class LogisticaTerrestre implements Logistica {
//     criarTransporte(): Transporte {
//         return new Caminhão()
//     }
// }
// class LogisticaMarinha implements Logistica {
//     criarTransporte(): Transporte {
//         return new Navio()
//     }
// }

// const logistica = new LogisticaTerrestre
// logistica.criarTransporte()
