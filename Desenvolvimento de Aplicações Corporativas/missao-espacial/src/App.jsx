import { useState, useEffect } from "react";

function App() {
  const [missao, setMissao] = useState({
    nome: "Apolo 11",
    fase: 1,
    combustivel: 100,
  });
  const [hasFuel, setHasFuel] = useState(true);
  const consumo = 10;
  const avancarFase = () => {
    setMissao((prevMissao) => ({
      ...prevMissao,
      fase: prevMissao.fase + 1,
    }));
  };

  const consumirCombustivel = () => {
    if (missao.combustivel > 0 && (missao.combustivel - consumo) >= 0) {
      setMissao((prevMissao) => ({
        ...prevMissao,
        combustivel: prevMissao.combustivel - consumo,
      }));
    }
    if (missao.combustivel < 0) {
      setMissao((prevMissao) => ({
        ...prevMissao,
        combustivel: 0,
      }));
    }
  };

  useEffect(() => {
    console.log(`🚀 Fase atual da missão: ${missao.fase}, ${missao.combustivel}`);
  }, [missao.fase]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Título do simulador */}
      <h1>🛰 Simulador de Missão Espacial</h1>
      {/* Exibe informações da missão */}
      <p>
        <strong>Nome da Missão:</strong> {missao.nome}
      </p>
      <p>
        <strong>Fase Atual:</strong> {missao.fase}
      </p>
      <p>
        <strong>Combustível:</strong> {missao.combustivel}%
      </p>
      {!hasFuel && <p style={{ color: "red" }}>Sem combustivel</p>}
      {/* Botões para avançar fase e consumir combustível */}
      <button onClick={avancarFase} style={{ marginRight: "10px" }}>
        Avançar Fase
      </button>
      <button onClick={consumirCombustivel}>Consumir Combustível</button>
    </div>
  );
}

export default App;
