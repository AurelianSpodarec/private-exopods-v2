import { Navigate, useRoutes } from "react-router-dom";
import { configPages } from "config/configPages";

import Forbidden from "pages/Forbidden/Forbidden";
import NotFound from "pages/NotFound/NotFound";
import ServicesIndex from "pages/Services/ServicesIndex/ServicesIndex";
import ServicesShow from "pages/Services/ServicesShow/ServicesShow";
import LogsIndex from "pages/Services/ServicesShow/Logs/LogsIndex";
import RevisionIndex from "pages/Services/ServicesShow/Revision/RevisionIndex";
import InspectIndex from "pages/Services/ServicesShow/Inspect/InspectIndex";
import FilesIndex from "pages/Services/ServicesShow/Files/FilesIndex";
import NetworkingIndex from "pages/Services/ServicesShow/Networking/NetworkingIndex";
import IntegregationIndex from "pages/Services/ServicesShow/Integregation/IntegregationIndex";
import TriggersIndex from "pages/Services/ServicesShow/Triggers/TriggersIndex";
import ServicesCreate from "pages/Services/ServicesCreate/ServicesCreate";

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
            path: "/services/new",
            element: <ServicesCreate />
        },
        {
            path: `${configPages.SERVICES.path}/:id/`,
            element: <ServicesShow  />,
            children: [
                {
                    path: '',
                    element: <Navigate to="logs" replace={true} />
                },
                {
                    path: "logs",
                    element: <LogsIndex />
                },
                {
                    path: "revision",
                    element: <RevisionIndex />
                },
                {
                    path: "inspect",
                    element: <InspectIndex />
                },
                {
                    path: "files",
                    element: <FilesIndex />
                },
                {
                    path: "networking",
                    element: <NetworkingIndex />
                },
                {
                    path: "integregation",
                    element: <IntegregationIndex />
                },
                {
                    path: "triggers",
                    element: <TriggersIndex />
                }
            ]
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
