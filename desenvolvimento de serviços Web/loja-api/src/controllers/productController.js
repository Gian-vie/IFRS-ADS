const ProductService = require('../services/productService');
// Importa o serviço que contém a lógica de negócio para manipular produtos
class ProductController {
  // Lista todos os produtos
  static async getAll(req, res) {
    try {
      const products = await ProductService.listProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }
  // Cria um novo produto
  static async create(req, res) {
    try {
      const product = await ProductService.addProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
    }
  }
  // Atualiza um produto existente
  static async update(req, res) {
    try {
      const { id } = req.params;
      await ProductService.editProduct(id, req.body);
      res.json({ message: 'Produto atualizado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
    }
  }
  // Exclui um produto
  static async remove(req, res) {
    try {
      const { id } = req.params;
      await ProductService.removeProduct(id);
      res.json({ message: 'Produto deletado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
    }
  }
}
module.exports = ProductController;
// Exporta o Controller para ser usado nas rotas
