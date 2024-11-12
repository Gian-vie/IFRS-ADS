import { useLoaderData } from 'react-router-dom';
const products = [
    { id: 1, name: 'Produto A', description: 'Descrição do Produto A', price: 100 },
    { id: 2, name: 'Produto B', description: 'Descrição do Produto B', price: 200 },
    { id: 3, name: 'Produto C', description: 'Descrição do Produto C', price: 300 },
];
export function loader({ params }) {
    const product = products.find((p) => p.id === Number(params.id));
    if (!product) {
        throw new Error('Produto não encontrado!');
    }
    return product;
}
function ProductDetails() {
    const product = useLoaderData();
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price}</p>
        </div>
    );
}
export default ProductDetails;