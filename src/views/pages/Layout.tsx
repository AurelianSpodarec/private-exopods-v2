import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "config/CustomRoutes";
import Navigation from "./_components/Navigation/Navigation";
import Header from "./_components/Header/Header";


function Layout() {
    
    return (
        <BrowserRouter>
        <div className="relative h-full ">

            <div id="context-wrap" className={`flex flex-col h-full`}> 

                <Navigation />

                <div className={`flex pl-[104px] flex-col h-full relative mt-8`}>

                    <Header />
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
