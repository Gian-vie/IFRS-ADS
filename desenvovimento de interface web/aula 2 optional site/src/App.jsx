import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import News from "./componentes/News";
import Sidebar from "./componentes/Sidebar";
import Footer from "./componentes/Footer";

function App() {
  const art = ["Artigo 1","Artigo 2" ,"Artigo 3"]
  const Noticias = [
  {id: 1, link: "link", tit: "Noticia_acb" },
  {id: 2, link: "link", tit: "Noticia_acb" },
  {id: 3, link: "link", tit: "Noticia_acb" },
  {id: 4, link: "link", tit: "Noticia_acb" }
];

  return (
    <div>
      <Header title="Gian"/>
      <Menu />
      <News Noticias={Noticias} />
      <Sidebar art={art}/>
      <Footer value="© 2024 Meu Website. Todos os direitos reservados."/>
    </div>
  );
}

export default App;
