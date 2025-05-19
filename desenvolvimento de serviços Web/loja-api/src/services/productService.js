const ProductModel = require('../models/productModel');
// Importa o Model responsável pelo acesso ao banco de dados (tabela products)
const validateProduct = require('../utils/validateProduct');
// Importa a função utilitária que valida os dados informados para um produto
class ProductService {
  // Serviço para listar todos os produtos
  static async listProducts() {
    return await ProductModel.getAllProducts();
  }
  // Serviço para criar produto, com validação
  static async addProduct(product) {
    validateProduct(product); // valida campos
    const existing = await ProductModel.getProductByName(product.name);
    if (existing) {
      throw new Error('Produto com este nome já existe.');
    }
    return await ProductModel.createProduct(product);
  }
  // Serviço para atualizar produto, com validação
  static async editProduct(id, product) {
    validateProduct(product);
    await ProductModel.updateProduct(id, product);
  }
  // Serviço para deletar produto
  static async removeProduct(id) {
    await ProductModel.deleteProduct(id);
  }
}
module.exports = ProductService;
// Exporta a classe para ser utilizada pelos controllers
