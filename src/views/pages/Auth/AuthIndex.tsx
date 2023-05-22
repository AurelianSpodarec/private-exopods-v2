import { Outlet } from "react-router-dom";

function AuthIndex() {
    return (
        <div>
        <div className="grid grid-col-12">

            <div className="col-span-6">
                <div className="bg-green-100 h-full w-full">
                    Side
                </div>
            </div>

            <div className="col-span-6">
                <div className="flex min-h-full flex-1 flex-col justify-center py-12 ">
                    <Outlet />
                </div>
            </div>

        </div>
        </div>
    )
}

export default AuthIndex;
