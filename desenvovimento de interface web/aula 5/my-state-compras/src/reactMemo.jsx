import { memo, useState } from "react";
// Componente pai
function App() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    return (
        <>
            <label>
                Nome:
                <input
                    name="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Endereço:
                <input
                    name="endereco"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <hr />
            <Saudacao name={name} />
            <endereco address={address}/>
        </>
    );
}
// Componente filho
const Saudacao = memo(({ name }) => {
    console.log("Renderizando Saudacao em", new Date().toLocaleTimeString());
    return <h3>Olá, {name}!</h3>;
});
const endereco = memo(({ address }) => {
    console.log("Renderizando endereço em", new Date().toLocaleTimeString());
    return <h3>morador de : {address}!</h3>;
});
export default App;
