// Componente News

// function News(props) {
//     return (
//         <section>
//             <h2>Últimas Notícias</h2>
//             <p>Notícia {props.News}</p>
//             <p>Notícia {props.News2}</p>
//         </section>
//     );
// }

function News({Noticias}) {
    return (
        <section>
            <h2>Últimas Notícias</h2>
            <ul>
                {Noticias.map((Noticia) => (
                    <li key={Noticia.id}>{Noticia.tit} confira em: {Noticia.link}</li>
                ))}
            </ul>
        </section>
    );
}


// function News() {
//     return (
//         <section>
//             <h2>Últimas Notícias</h2>
//             <p>Notícia 1...</p>
//             <p>Notícia 2...</p>
//         </section>
//     );
// }

export default News;