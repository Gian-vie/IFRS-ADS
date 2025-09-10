// Função para validar se o email tem um formato válido
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Expressão regular que verifica se o email tem um formato padrão: texto@texto.texto
  return regex.test(email);
  // Retorna true se o email for válido conforme o padrão, ou false se não for
}
module.exports = validateEmail;
// Exporta a função para ser utilizada em outros módulos, como nos services
