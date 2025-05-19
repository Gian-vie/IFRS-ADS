/**
 * Valida os dados de um produto antes de inserção ou atualização.
 * Lança erro se algum campo for inválido.
 */
function validateProduct({ name, price, stock }) {
  // Valida nome
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('O nome do produto é obrigatório e deve ser uma string.');
  }
  // Valida preço
  if (typeof price !== 'number' || isNaN(price) || price <= 0) {
    throw new Error('O preço deve ser um número positivo válido.');
  }
  // Valida estoque
  if (!Number.isInteger(stock) || stock < 0) {
    throw new Error(
      'O estoque deve ser um número inteiro igual ou maior que zero.'
    );
  }
}
module.exports = validateProduct;
