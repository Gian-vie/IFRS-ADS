import { Link, Outlet, useLoaderData } from "react-router-dom";
import "./CustomerList.css"; // Importa o CSS específico do componente
function CustomerList() {
    const customers = useLoaderData(); // Carrega a lista de clientes do loader
    return (
        <div className="container">
            <h1>Lista de Clientes</h1>
            <ul className="customer-list">
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {/* Link para a página de detalhes do cliente */}
                        <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
                    </li>
                ))}
            </ul>
            {/* Renderiza os detalhes do cliente na mesma página */}
            <Outlet />
        </div>
    );
}
export default CustomerList;