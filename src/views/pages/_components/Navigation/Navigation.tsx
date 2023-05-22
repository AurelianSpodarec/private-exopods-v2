import { Link } from "react-router-dom";

import { configApp } from "config/configApp";
import { configMenu } from "config/menu/menuConfig";

import NavList from "./_components/NavList";

import logo from "./../../../../../src/assets/images/logo.png";

function Navigation() {

    return (
        <nav className={`
                fixed left-6 top-8 bottom-8
                h-window w-[80px]
                rounded-3xl z-30 bg-black 
                border-r border-r-gray-600
                drop-shadow-[0_4px_4px_rgba(0,0,0,1)]
            `}
        >
        <div className="h-full w-full text-white py-8 relative flex flex-col">

            <div className="flex items-center w-full justify-center mb-10">
                <Link to="/" className="block"> 
                    <div className="flex items-center justify-center">
                        
                        <img className="w-9 mx-auto" src={logo} alt="" />

                        <span className="sr-only">{configApp.name}</span>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col flex-1 h-full overflow-y-auto sidebar-scrollbar">
                <NavList data={configMenu.primary} />
                <NavList data={configMenu.secondary} bottom/>
            </div>

        </div>
    </nav>
    )
}

export default Navigation;
