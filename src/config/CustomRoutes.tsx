import { Navigate, useRoutes } from "react-router-dom";
import { configPages } from "config/configPages";

import HomeIndex from "pages/Home/HomeIndex";

import Forbidden from "pages/Forbidden/Forbidden";
import NotFound from "pages/NotFound/NotFound";
import ServicesIndex from "pages/Services/ServicesIndex/ServicesIndex";
import ServicesShow from "pages/Services/ServicesShow/ServicesShow";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "/",
            element: <Navigate to="/services" replace={true} />
        },
        {
            path: "/services",
            element: <ServicesIndex />
        },
        {
            path: "/services/:id",
            element: <ServicesShow />
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
