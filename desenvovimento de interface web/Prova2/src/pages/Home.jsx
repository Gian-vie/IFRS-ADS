import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo à Admin Store!</h1>
      <p>Gerencie seus produtos de maneira fácil e prática.</p>
      <Link to="/admin">Administração</Link>
    </div>
  );
}

export default Home;
