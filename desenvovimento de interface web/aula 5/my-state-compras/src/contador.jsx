import { useReducer } from "react";
// Função reducer para gerenciar o estado
function reducer(state, action) {
    switch (action.type) {
        case "incrementar":
            return { contador: state.contador + 1 };
        case "decrementar":
            return { contador: state.contador - 1 };
        default:
            return state;
    }
}
function Contador() {
    // useReducer com o estado inicial do contador
    const [state, dispatch] = useReducer(reducer, { contador: 0 });
    return (
        <div>
            <p>Contador: {state.contador}</p>
            <button onClick={() => dispatch({ type: "incrementar" })}>
                Incrementar
            </button>
            <button onClick={() => dispatch({ type: "decrementar" })}>
                Decrementar
            </button>
        </div>
    );
}
export default Contador;
