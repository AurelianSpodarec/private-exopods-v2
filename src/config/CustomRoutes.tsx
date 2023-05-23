import { Navigate, useRoutes } from "react-router-dom";
import { configPages } from "config/configPages";

// ===========================================================
// Dashboard
// ===========================================================

// Services
// -----------------
import ServicesIndex from "pages/Services/ServicesIndex/ServicesIndex";
import ServicesShow from "pages/Services/ServicesShow/ServicesShow";
import ServicesCreate from "pages/Services/ServicesCreate/ServicesCreate";

// Networking
// -----------------
import NetworkingIndex from "pages/Services/ServicesShow/Networking/NetworkingIndex";
    import LogsIndex from "pages/Services/ServicesShow/Logs/LogsIndex";
    import RevisionIndex from "pages/Services/ServicesShow/Revision/RevisionIndex";
    import InspectIndex from "pages/Services/ServicesShow/Inspect/InspectIndex";
    import FilesIndex from "pages/Services/ServicesShow/Files/FilesIndex";
    import IntegregationIndex from "pages/Services/ServicesShow/Integregation/IntegregationIndex";
    import TriggersIndex from "pages/Services/ServicesShow/Triggers/TriggersIndex";


// ===========================================================
// Authentication
// ===========================================================
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";


// ===========================================================
// Other 
// ===========================================================

// LAYOUT
// -----------------
import LayoutAuth from "pages/_layout/LayoutAuth";
import LayoutDashboard from "pages/_layout/LayoutDashboard";

// NOT ALLOWED
// -----------------
import Forbidden from "pages/Forbidden/Forbidden";
import NotFound from "pages/NotFound/NotFound";


function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "/",
            element: <LayoutDashboard />,
            children: [
                {
                    path: "/",
                    element: <Navigate to="/services" replace={true} />,
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
            ]
        },
         // ====================================================
        // CustomRoutes: Authentication
        // ====================================================
        {
            path: configPages.AUTH.path,
            element: <LayoutAuth />,
            children :[
                {
                    path: configPages.AUTH.path + configPages.LOGIN.path,
                    element: <Login />
                },
                {
                    path: configPages.AUTH.path + configPages.REGISTER.path,
                    element: <Register />
                },
                // {
                //     path: configPages.AUTH.path + configPages.FORGOTTEN_PASSWORD.path,
                //     element: <Forgot />
                // },
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
