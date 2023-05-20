import { useRoutes } from "react-router-dom";
import { configPages } from "config/configPages";

import HomeIndex from "pages/Home/HomeIndex";

import Forbidden from "pages/Forbidden/Forbidden";
import NotFound from "pages/NotFound/NotFound";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "/",
            element: <HomeIndex />
        },
        // ====================================================
        // CustomRoutes: Self Service
        // ====================================================
        
        // ====================================================
        // CustomRoutes: Something Went Wrong
        // ====================================================
        {
            path: configPages.NOT_FOUND.path,
            element: <NotFound />
        },
        {
            path: configPages.FORBIDDEN.path,
            element: <Forbidden />
        },
    ]);

    return routes;
}

export default CustomRoutes;
