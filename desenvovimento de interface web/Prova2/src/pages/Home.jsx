import { link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <h1>Bem-vindo à Admin Store!</h1>
      <p>Gerencie seus produtos de maneira fácil e prática.</p>
      <div>
        <Link to="/admin">Administração</Link>
      </div>
    </div>
  );
}

export default Home;
