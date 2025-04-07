import { eventos } from "./pages/evento";
import { noticias } from "./pages/noticia";

export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
      ...eventos,
      ...noticias
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
    
    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}