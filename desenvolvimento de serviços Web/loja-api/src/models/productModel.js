const db = require('../config/database');
// Importa a conexão pool com o banco de dados
class ProductModel {
  // Retorna todos os produtos
  static async getAllProducts() {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
  }
  // Busca um produto por nome (usada para evitar duplicação)
  static async getProductByName(name) {
    const [rows] = await db.query('SELECT * FROM products WHERE name = ?', [
      name,
    ]);
    return rows[0];
  }
  // Inserir um novo produto
  static async createProduct({ name, price, stock }) {
    const [result] = await db.query(
      'INSERT INTO products (name, price, stock) VALUES (?, ?, ?)',
      [name, price, stock]
    );
    return { id: result.insertId, name, price, stock };
  }
  // Atualizar um produto existente
  static async updateProduct(id, { name, price, stock }) {
    await db.query(
      'UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?',
      [name, price, stock, id]
    );
  }
  // Deletar produto
  static async deleteProduct(id) {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
  }
}
module.exports = ProductModel;
// Exporta a classe ProductModel para ser usada nos services
