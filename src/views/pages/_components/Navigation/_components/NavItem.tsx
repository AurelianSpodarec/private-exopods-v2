import { Link } from "react-router-dom";

function NavItem({ item, isActive }:NavItemProps) {
    return (
        <li className="cursor-default fill-gray-500 text-gray-500 hover:fill-gray-300 hover:text-gray-400 transition justify-center flex">
        <Link 
            to={`${item.url}`} 
            className={`
                cursor-default border-l-[5px] rounded-tr-[20px] rounded-br-[20px] ${isActive ? "fill-white border-white" : "border-transparent"}  
                group flex p-2 w-full
            `}>
                <div className="flex space-x-2 mx-auto">
                    <div className="h-6 w-6 text-center relative">
                        {item.icon}
                    </div>
                    <span className="sr-only">{item.name}</span> 
                </div>
        </Link>
        </li>
    )
}

export default NavItem;

interface NavItemProps {
    item: any;
    isActive: boolean;
    menuExpanded?: boolean;
    menuOpen?: boolean;
}
