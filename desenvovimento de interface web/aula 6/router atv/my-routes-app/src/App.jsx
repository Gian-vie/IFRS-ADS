import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'; // Importa estilos globais
import CustomerList from './pages/CustomerList';
import CustomerDetails from './pages/CustomerDetails';
// Dados estáticos dos clientes
const customersData = [
  {
    id: 1, name: "John Doe", email: "john@example.com", phone: "(555) 123-4567",
    address: "123 Main St, Springfield"
  },
  {
    id: 2, name: "Jane Smith", email: "jane@example.com", phone: "(555) 987-6543",
    address: "456 Elm St, Springfield"
  },
  {
    id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "(555)555-5555", address: "789 Oak St, Springfield" }];
// Loader para carregar a lista de clientes
const customersLoader = () => {
  return customersData; // Retorna a lista de clientes diretamente
};
// Loader para carregar os detalhes de um cliente específico
const customerDetailsLoader = ({ params }) => {
  const customerId = parseInt(params.customerId, 10); // Converte o ID para número
  const customer = customersData.find(c => c.id === customerId); // Encontra o cliente no array
  if (!customer) {
    throw new Error("Cliente não encontrado"); // Caso o cliente não exista
  }
  return customer;
};
// Definimos o router com as rotas dinâmicas e loaders
const router = createBrowserRouter([
  {
    path: "/customers",
    children: [
      {
        index: true, // Define esta rota como indexada (padrão é "/customers")
        element: <CustomerList />, // Página da lista de clientes
        loader: customersLoader, // Carrega a lista de clientes
      },
      {
        path: ":customerId", // Rota dinâmica para detalhes do cliente
        element: <CustomerDetails />,
        loader: customerDetailsLoader, // Carrega os detalhes do cliente específico
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;