import { eventos } from "./pages/evento";
export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
      ...eventos
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
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