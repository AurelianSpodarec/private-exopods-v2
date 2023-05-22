import Header from "pages/_components/Header/Header";
import Navigation from "pages/_components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function LayoutDashboard() {
    return (
         <div className="relative h-full ">

            <div id="context-wrap" className={`flex flex-col h-full`}> 

                <Navigation />

                <div className={`flex pl-[104px] flex-col h-full relative mt-8`}>

                    <Header />
                    <main className="h-full w-full">
                        <Outlet />
                    </main>      
                </div>            

            </div>

        </div>
    )
}

export default LayoutDashboard;
