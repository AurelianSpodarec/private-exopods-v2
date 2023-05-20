import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "config/CustomRoutes";


function Layout() {
    
    return (
        <BrowserRouter>
        <div className="relative h-full ">

            <div id="context-wrap" className={`flex flex-col h-full`}> 

                {/* Nav */}

                <div className={`flex pl-[50px] flex-col h-full relative`}>

                    {/* Header */}
                    <main className="h-full w-full">
                        <CustomRoutes />
                    </main>      
                </div>            

            </div>

        </div>
        </BrowserRouter>
    )
}

export default Layout;
