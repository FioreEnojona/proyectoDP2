import { eventos } from "./pages/evento";
import { noticias } from "./pages/noticia";
import { tarjetas } from "./pages/ayuda";

export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
      ...eventos,
      ...noticias,
      ...tarjetas
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
    
    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}