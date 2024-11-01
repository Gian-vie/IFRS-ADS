import { useState, useCallback } from "react";
function App() {
    const [contador, setContador] = useState(0);
    // Função memorizada com useCallback
    const incrementar = useCallback(() => {
        setContador((prevContador) => prevContador + 1);
        console.log(1)
    }, []); // Dependências vazias, a função só é criada uma vez
    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}
export default App;
