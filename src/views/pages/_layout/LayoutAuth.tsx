import AuthCarousel from "pages/Auth/_components/AuthCarousel";
import { Outlet } from "react-router-dom";

function LayoutAuth() {
    return (
        <div className="grid grid-cols-12 h-full">

            <div className="col-span-6">
                <AuthCarousel />
            </div>

            <div className="col-span-6">
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 mr-6">
                <Outlet />
            </div>
            </div>
             
        </div>
    )
}

export default LayoutAuth;
