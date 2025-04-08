import { eventos } from "./pages/evento";
import { noticias } from "./pages/noticia";
import { tarjetas } from "./pages/ayuda";
import { blog } from "./pages/blog";
import { galeria } from "./pages/galeria";
import { donaciones } from "./pages/donaciones";
import { preguntas } from "./pages/preguntas";

export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
      ...eventos,
      ...noticias,
      ...tarjetas,
      ...blog,
      ...galeria,
      ...preguntas,
      ...donaciones,
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = noticias
            break;
        case '/eventos.html':
            pageVariables = eventos
        break;
        case '/comoAyudar.html':
            pageVariables = tarjetas
        break;
        case '/galeria.html':
            pageVariables = galeria
            break;
        case '/blog.html':
            pageVariables = blog
            break;
        case '/preguntas.html':
            pageVariables = preguntas
            break;
        case '/donaciones.html':
            pageVariables = donaciones
            break;

    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}