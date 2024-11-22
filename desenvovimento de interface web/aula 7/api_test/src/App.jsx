// import { useState, useEffect } from "react";
// import axios from "axios";
// function App() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [error, setError] = useState(null); // Estado para armazenar erros
//   useEffect(() => {
//     const fetchUsuarios = async () => {
//       try {
//         const response = await
//           axios.get("https:minha_api_invalida.com");
//         setUsuarios(response.data);
//       } catch (error) {
//         console.error("Erro ao carregar usuários:", error); // Exibe no console
//         setError("Erro ao carregar usuários."); // Define uma mensagem de erro
//         // setUsuarios(null) // teria q tratar o map
//       }
//     };
//     fetchUsuarios();
//   }, []);
//   return (
//     <div>
//       {error && <p>{error}</p>} {/* Exibe a mensagem de erro se existir */}
//       <ul>
//         {usuarios.map((usuario) => (
//           <li key={usuario.id}>{usuario.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;



//CONSULTA DE API, TRATAMENTO DE ERRO E ESTADO DE CARREGAMENTO
// import { useState, useEffect } from "react";
// import axios from "axios";
// function App() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [loading, setLoading] = useState(true); // Estado de carregamento
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchUsuarios = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setUsuarios(response.data);
//       } catch (error) {
//         console.error("Erro ao carregar usuários:", error);
//         setError("Erro ao carregar usuários.");
//       } finally {
//         setLoading(false); // Atualiza o estado de carregamento para false
//       }
//     };
//     fetchUsuarios();
//   }, []);
//   // Renderiza o indicador de carregamento
//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>{error}</p>; // Exibe a mensagem de erro se houver
//   return (
//     <ul>
//       {usuarios.map((usuario) => (
//         <li key={usuario.id}>{usuario.name}</li>
//       ))}
//     </ul>
//   );
// }
// export default App;



// ADD TIME OUT 
// import { useState, useEffect } from "react";
// import axios from "axios";
// function App() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [loading, setLoading] = useState(true); // Estado de carregamento
//   const [error, setError] = useState(null);
//   const [timeoutError, setTimeoutError] = useState(false); // Estado para erro de timeout
//   useEffect(() => {
//     const fetchUsuarios = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/users",
//           {
//             timeout: 5000, // Tempo limite de 5000 ms (5 segundos)
//           }
//         );
//         setUsuarios(response.data);
//       } catch (error) {
//         if (error.code === "ECONNABORTED") {
//           // Erro de timeout
//           setTimeoutError(true);
//         } else {
//           // Outros erros
//           console.error("Erro ao carregar usuários:", error);
//           setError("Erro ao carregar usuários.");
//         }
//       } finally {
//         setLoading(false); // Atualiza o estado de carregamento para false
//       }
//     };
//     fetchUsuarios();
//   }, []);
//   // Mensagem de carregamento
//   if (loading) return <p>Carregando...</p>;
//   // Mensagem de erro de timeout
//   if (timeoutError)
//     return <p>O carregamento dos usuários demorou demais. Tente novamente.</p>;
//   // Mensagem de erro genérico
//   if (error) return <p>{error}</p>;
//   // Verifica se não há usuários disponíveis
//   if (usuarios.length === 0) return <p>Nenhum usuário encontrado.</p>;
//   return (
//     <div>
//       <h1>Lista de Usuários</h1>
//       <ul>
//         {usuarios.map((usuario) => (
//           <li key={usuario.id}>{usuario.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;


import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsuarios = async () => {
      // Tenta obter os usuários do Local Storage
      const localData = localStorage.getItem("usuarios");
      if (localData) {
        setUsuarios(JSON.parse(localData)); // Carrega dados do Local Storage
        setLoading(false); // Define carregamento como falso
        return; // Sai da função
      }
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsuarios(response.data);
        localStorage.setItem("usuarios", JSON.stringify(response.data)); // Armazena dados no Local Storage
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
        setError("Erro ao carregar usuários.");
      } finally {
        setLoading(false); // Atualiza o estado de carregamento para false
      }
    };
    fetchUsuarios();
  }, []);
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
}
export default App;