import { donaciones } from "./pages/donaciones";
import { preguntas } from "./pages/preguntas";

export const getPageContext = (pagePath) => {
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
        ...preguntas,
        ...donaciones,
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
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