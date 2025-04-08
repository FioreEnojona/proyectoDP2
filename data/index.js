import { blog } from "./pages/blog";
import { galeria } from "./pages/galeria";
export const getPageContext = (pagePath) => {
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
        ...blog,
        ...galeria
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/galeria.html':
            pageVariables = galeria
            break;
        case '/blog.html':
            pageVariables = blog
            break;

    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }

    return finalContext
}