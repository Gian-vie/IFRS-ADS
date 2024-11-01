import { useReducer } from "react";
// Função reducer para gerenciar o estado do perfil
function perfilReducer(state, action) {
    switch (action.type) {
        case "atualizarNome":
            return {
                ...state,
                nome: action.payload,
            };
        case "atualizarIdade":
            return {
                ...state,
                idade: action.payload,
            };
        case "atualizarCidade":
            return {
                ...state,
                cidade: action.payload,
            };
        default:
            return state;
    }
}
function PerfilUsuario() {
    // Estado inicial do perfil
    const [perfil, dispatch] = useReducer(perfilReducer, {
        nome: "João",
        idade: 25,
        cidade: "São Paulo",
    });
    return (
        <div>
            <h2>Perfil do Usuário</h2>
            <p>Nome: {perfil.nome}</p>
            <p>Idade: {perfil.idade}</p>
            <p>Cidade: {perfil.cidade}</p>
            {/* Botões para disparar ações que atualizam o estado */}
            <button onClick={() => dispatch({ type: "atualizarNome", payload: "Maria" })}>
                Mudar Nome para Maria
            </button>
            <button onClick={() => dispatch({ type: "atualizarIdade", payload: 30 })}>
                Mudar Idade para 30
            </button>
            <button onClick={() => dispatch({
                type: "atualizarCidade", payload: "Rio de Janeiro"
            })}>
                Mudar Cidade para Rio de Janeiro
            </button>
            <button 
            onClick={() =>dispatch({ type: "atualizarNome", payload: "Maria", type: "atualizarIdade", payload: 30,  type: "atualizarCidade", payload: "Rio de Janeiro" })}
            // onMouseMove={() =>dispatch({ type: "atualizarIdade", payload: 30 })}
            // onMouseUp={() =>dispatch({ type: "atualizarCidade", payload: "Rio de Janeiro" })}   
            >att all</button>
        </div >
    );
}
export default PerfilUsuario;