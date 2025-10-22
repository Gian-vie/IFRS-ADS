const somar = require("../src/somar");
// Teste automatizado com Jest
test("Deve somar dois números corretamente", () => {
  const resultado = somar(2, 3);
  expect(resultado).toBe(5);
});

// Bloco que agrupa testes relacionados
describe("Testes da função somar()", () => {
  // Caso de teste individual
  test("Deve somar dois números positivos corretamente", () => {
    const resultado = somar(2, 3);
    expect(resultado).toBe(5); // Verifica se o resultado é igual a 5
  });
  // Segundo caso de teste
  test("Deve somar números negativos corretamente", () => {
    const resultado = somar(-4, -2);
    expect(resultado).toBe(-6);
  });
});

test("Deve somar 1 + 2 = 3", () => {
  expect(somar(1, 2)).toBe(3);
});
test("Deve somar 2 + 3 = 5", () => {
  expect(somar(2, 3)).toBe(5);
});
test("Deve somar 10 + 5 = 15", () => {
  expect(somar(10, 5)).toBe(15);
});

test.each([
  [2, 3, 5],
  [-4, -2, -6],
  [5, -2, 3],
])("Deve somar %i + %i e retornar %i", (a, b, esperado) => {
  expect(somar(a, b)).toBe(esperado);
});

// Bloco que agrupa testes relacionados
describe("Testes da função somar()", () => {
  // test.each permite testar múltiplos casos de forma compacta
  test.each([
    [2, 3, 5], // soma de positivos
    [-4, -2, -6], // soma de negativos
    [5, -2, 3], // positivo com negativo
    [0, 10, 10], // zero com positivo
    [0, 0, 0], // zero com zero
  ])("Deve somar %i + %i e retornar %i", (a, b, esperado) => {
    // Act: executa a função
    const resultado = somar(a, b);
    // Assert: verifica o valor esperado
    expect(resultado).toBe(esperado);
  });
});

//  espera um erro, usamos toThrow()

expect(() => somar("2", 3)).toThrow();

//////////
describe("Testes da função somar()", () => {
  test("Deve somar dois números corretamente", () => {
    expect(somar(2, 3)).toBe(5);
  });
  test("Deve lançar erro se o primeiro parâmetro não for número", () => {
    expect(() => somar("2", 3)).toThrow("Os parâmetros devem ser números");
  });
  test("Deve lançar erro se o segundo parâmetro não for número", () => {
    expect(() => somar(2, null)).toThrow("Os parâmetros devem ser números");
  });
});

// Agrupa os testes de entradas VÁLIDAS
describe("Casos VÁLIDOS da função somar()", () => {
  // test.each: Executa o MESMO teste com vários valores diferentes
  test.each([
    [2, 3, 5], // positivo + positivo
    [-4, -2, -6], // negativo + negativo
    [5, -2, 3], // positivo + negativo
    [0, 10, 10], // zero + positivo
    [0, 0, 0], // zero + zero
  ])("Deve somar %p + %p e retornar %p", (a, b, esperado) => {
    // Act + Assert
    expect(somar(a, b)).toBe(esperado);
  });
});
// Agrupa os testes de entradas INVÁLIDAS (que devem lançar erro)
describe("Casos INVÁLIDOS da função somar() (espera ERROS)", () => {
  // test.each: Vários cenários que devem lançar erro
  test.each([
    ["2", 3], // string no primeiro parâmetro
    [2, "3"], // string no segundo parâmetro
    [null, 5], // null em a
    [5, null], // null em b
    [undefined, 2], // undefined em a
    [2, undefined], // undefined em b
    [NaN, 1], // NaN em a
    [1, NaN], // NaN em b
    [{}, 1], // objeto em a
    [1, {}], // objeto em b
  ])("Deve lançar erro ao somar %p e %p", (a, b) => {
    // Para testar erros, passamos uma função para o expect
    expect(() => somar(a, b)).toThrow("Os parâmetros devem ser números");
  });
});
