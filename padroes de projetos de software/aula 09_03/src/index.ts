// index.ts (Arquivo de Testes)
import { NotificadorEmail, SMSDecorator, WhatsAppDecorator, LogDecorator } from './server';

console.log("--- TESTE BÁSICO ---");
const emailBasico = new NotificadorEmail();
emailBasico.enviar("Bem-vindo ao sistema de gestão!");

console.log("\n--- CENÁRIO A: E-mail + SMS ---");
// Composição dinâmica respeitando o Open/Closed Principle
const notificadorCenarioA = new SMSDecorator(new NotificadorEmail());
notificadorCenarioA.enviar("Sua fatura foi gerada.");

console.log("\n--- CENÁRIO B: E-mail + WhatsApp + SMS + Log ---");
// O Log fica na camada mais externa para registrar a cadeia inteira
const notificadorCenarioB = new LogDecorator(
    new SMSDecorator(
        new WhatsAppDecorator(
            new NotificadorEmail()
        )
    )
);
notificadorCenarioB.enviar("Alerta de segurança: Novo login detectado.");