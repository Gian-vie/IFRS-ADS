import { useEffect } from "react";
import axios from "axios";
function MyGet() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://reqres.in/api/users/2");
                // Registra as informações do usuário específico no console
                const user = response.data.data;
                console.log(`ID: ${user.id} - Nome: ${user.first_name}
${user.last_name}`);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        };
        fetchData();
    }, []);
    return <p>Teste com API Axios</p>;
}
export default MyGet;
