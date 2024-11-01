import React, { useState, useMemo } from "react";
// Lista de produtos
const produtos = ["Notebook", "Celular", "Tablet", "Teclado", "Mouse",
    "Monitor", "Impressora"];
function App() {
    const [busca, setBusca] = useState("");
    // Memoriza o resultado do filtro e só recalcula quando 'busca' mudar
    const produtosFiltrados = useMemo(() => {
        console.log("Filtrando produtos...");
        return produtos.filter((produto) =>
            produto.toLowerCase().includes(busca.toLowerCase())
        );
    }, [busca]);
    return (
        <div>
            <input type="text" placeholder="Buscar produtos" value={busca}
                onChange={(e) => setBusca(e.target.value)} />
            <ul>
                {produtosFiltrados.map((produto, index) => (
                    <li key={index}>{produto}</li>
                ))}
            </ul>
        </div>
    );
}
export default App;