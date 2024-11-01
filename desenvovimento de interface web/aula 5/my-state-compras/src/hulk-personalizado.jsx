import { useState } from "react";
// Hook customizado para gerenciar um contador
function useContador(valorInicial = 0) {
    const [contador, setContador] = useState(valorInicial);
    // Função para incrementar o contador
    const incrementar = () => {
        setContador(contador + 1);
    };
    // Função para decrementar o contador
    const decrementar = () => {
        setContador(contador - 1);
    };
    // Função para resetar o contador
    const resetar = () => {
        setContador(valorInicial);
    };
    // Retorna o estado e as funções de controle
    return { contador, incrementar, decrementar, resetar };
}


///////////////////////////


// Componente que utiliza o hook customizado
function App() {
    const { contador, incrementar, decrementar, resetar } = useContador(5); //Começa com 5
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={resetar}>Resetar</button>
        </div>
    );
}
export default App;
