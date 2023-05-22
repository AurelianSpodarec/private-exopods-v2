import { Outlet } from "react-router-dom";
import Login from "./Login";
import AuthCarousel from "./_components/AuthCarousel";

function AuthIndex() {
    return (
        <div className="grid grid-cols-12 py-6 pl-6 h-full">

            <div className="col-span-6">
                <AuthCarousel />
            </div>

            <div className="col-span-6">
                <div className="flex min-h-full flex-1 flex-col justify-center py-12 ">
                    {/* <Outlet /> */}

                    <Login />
                </div>
            </div>

        </div>
    )
}

export default AuthIndex;
