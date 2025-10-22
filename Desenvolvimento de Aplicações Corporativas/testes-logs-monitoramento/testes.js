// // Função a ser testada
// function somar(a, b) {
//   return a + b;
// }
// // Teste automatizado simples
// function testarSomar() {
//   const a = 2; // Preparação dos dados
//   const b = 3;
//   const resultado = somar(2, 3); // Execução
//   const esperado = 5;
//   if (resultado === esperado) {
//     // Verificação do valor esperado
//     console.log("Teste passou!");
//   } else {
//     console.error("Teste falhou! Resultado:", resultado);
//   }
// }
// testarSomar();

// //Testes Unitários
// function calcularDesconto(preco, desconto) {
//   return preco - preco * desconto;
// }
// // Teste unitário
// const resultado = calcularDesconto(100, 0.1);
// console.log(resultado === 90 ? "passou" : "falhou");


// //Testes de Integração
// const request = require("supertest");
// const app = require("./app"); // sua API Express
// test("Deve criar um novo usuário", async () => {
//   const res = await request(app).post("/users").send({ nome: "João" });
//   expect(res.statusCode).toBe(201);
//   expect(res.body.nome).toBe("João");
// });


// //Testes End-to-End (E2E)
// const { Builder, By } = require("selenium-webdriver");
// (async function testeLogin() {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:5173/login");
//   await driver.findElement(By.name("email")).sendKeys("teste@email.com");
//   await driver.findElement(By.name("password")).sendKeys("123456");
//   await driver.findElement(By.css("button[type='submit']")).click();
// })();

