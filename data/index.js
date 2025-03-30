import { noticias } from "./pages/noticia";
export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
      ...noticias
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = noticias
        break;
    
    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }

    return finalContext
}