import { Navigate, useRoutes } from "react-router-dom";
import { configPages } from "config/configPages";

import HomeIndex from "pages/Home/HomeIndex";

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
            path: `${configPages.SERVICES.path}/:id`,
            element: <ServicesShow />,
            children: [
                {
                    path: `${configPages.SERVICES.path}/:id`,
                    element: <Navigate to={`${configPages.SERVICES.path}/:id/logs`} replace={true}/>
                },
                {
                    path: `${configPages.SERVICES.path}/:id${configPages.LOGS.path}`,
                    element: <LogsIndex />
                },
                {
                    path: `${configPages.SERVICES.path}/:id${configPages.REVISION.path}`,
                    element: <RevisionIndex />
                },
                {
                    path: `${configPages.SERVICES.path}/:id${configPages.INSPECT.path}`,
                    element: <InspectIndex />
                },
                {
                    path: `${configPages.SERVICES.path}/:id${configPages.FILES.path}`,
                    element: <FilesIndex />
                },
                {
                    path: `${configPages.SERVICES.path}/:id${configPages.NETWORKING.path}`,
                    element: <NetworkingIndex />
                },
                {
                    path: `${configPages.SERVICES.path}/:id${configPages.INTEGREGATION.path}`,
                    element: <IntegregationIndex />
                },
                {
                    path: `${configPages.SERVICES.path}/:id${configPages.TRIGGERS.path}`,
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
