import { useState } from "react";
function App() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    nota: "",
    opiniao: "",
  });
  // Estado para armazenar mensagens de erro de validação
  const [errors, setErrors] = useState({});
  // Estado para guardar a avaliação final enviada
  const [avaliacaoFinal, setAvaliacaoFinal] = useState(null);

  // Função que atualiza o campo do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para validar o formulário
  const validateForm = () => {
    const newErrors = {}; // Objeto para armazenar os erros
    // Verifica se o título foi informado
    if (!formData.titulo.trim()) {
      newErrors.titulo = "Informe o título";
    }
    // Verifica se o gênero foi escolhido
    if (!formData.genero) {
      newErrors.genero = "Escolha um gênero";
    }
    // Verifica se a nota foi escolhida
    if (!formData.nota) {
      newErrors.nota = "Escolha uma nota";
    }
    // Verifica se a opinião tem pelo menos 10 caracteres
    if (formData.opiniao.trim().length < 10) {
      newErrors.opiniao = "Escreva uma opinião com pelo menos 10 caracteres";
    }
    return newErrors; // Retorna os erros encontrados
  };
  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    // Valida os dados do formulário
    const validationErrors = validateForm();
    setErrors(validationErrors); // Atualiza os erros no estado
    // Se não houver erros, exibe a avaliação e limpa o formulário
    if (Object.keys(validationErrors).length === 0) {
      setAvaliacaoFinal(formData); // Exibe a avaliação
      setFormData({ titulo: "", genero: "", nota: "", opiniao: "" }); // Limpa o formulário
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h2>🎬 Avaliação Criativa</h2>
      {/* Formulário de Avaliação */}
      <form onSubmit={handleSubmit}>
        {/* Campo: Título */}
        <div>
          <label>Título:</label>
          <br />
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
          />
          {/* Exibe erro se houver */}
          {errors.titulo && <p style={{ color: "red" }}>{errors.titulo}</p>}
        </div>
        {/* Campo: Gênero */}
        <div>
          <label>Gênero:</label>
          <br />
          <select name="genero" value={formData.genero} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="comedia">Comédia</option>
            <option value="drama">Drama</option>
            <option value="terror">Terror</option>
            <option value="acao">Ação</option>
            <option value="anime">Anime</option>
          </select>
          {/* Exibe erro se houver */}
          {errors.genero && <p style={{ color: "red" }}>{errors.genero}</p>}
        </div>
        {/* Campo: Nota */}
        <div>
          <label>Nota:</label>
          <br />
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n}>
              <input
                type="radio"
                name="nota"
                value={n}
                checked={formData.nota === n.toString()}
                onChange={handleChange}
              />
              {n}
            </label>
          ))}
          {/* Exibe erro se houver */}
          {errors.nota && <p style={{ color: "red" }}>{errors.nota}</p>}
        </div>
        {/* Campo: Opinião */}
        <div>
          <label>Opinião:</label>
          <br />
          <textarea
            name="opiniao"
            value={formData.opiniao}
            onChange={handleChange}
          ></textarea>
          {/* Exibe erro se houver */}
          {errors.opiniao && <p style={{ color: "red" }}>{errors.opiniao}</p>}
        </div>
        {/* Botão de envio */}
        <button type="submit">Enviar Avaliação</button>
      </form>

      {avaliacaoFinal && (
        <div style={{ marginTop: 30, padding: 20, border: "1px solid #ccc" }}>
          {/* Exibe a avaliação registrada se 'avaliacaoFinal' existir */}
          <h3>Avaliação Registrada</h3>
          <p>
            <strong>Título:</strong> {avaliacaoFinal.titulo}
          </p>
          <p>
            <strong>Gênero:</strong> {avaliacaoFinal.genero}
          </p>
          <p>
            <strong>Nota:</strong> {avaliacaoFinal.nota}
          </p>
          <p>
            <strong>Opinião:</strong> {avaliacaoFinal.opiniao}
          </p>
        </div>
      )}
    </div>
  );
}
export default App;
