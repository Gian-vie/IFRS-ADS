// Componente Sidebar
function Sidebar({art}) {
  return (
    <aside>
      <h3>Artigos Recomendados</h3>
      <ul>
        {art.map((art, index) => (
          <li key={index}> {art} </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;