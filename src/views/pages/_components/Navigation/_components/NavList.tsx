import { useLocation, } from 'react-router-dom';
import NavItem from "./NavItem";

function NavList({ data, className, bottom = false }:NavListProps) {
    const location = useLocation();
    const pathnameWithoutDashboard = location.pathname.replace(/^\/dashboard(\/|$)/, '/');

    return (
        <nav className={`flex flex-1 flex-col ${className}`}>
        <ul role="list" className={`flex flex-1 flex-col ${bottom ? "justify-end" : ""}`}>
    
            {data && data.map(((item:any) => {
                return <NavItem key={item.url} item={item} isActive={pathnameWithoutDashboard === item.url}/>
            }))}
    
        </ul>
        </nav>
    )
}

export default NavList;

interface NavListProps {
    data: any;
    className?: string;
    bottom?: boolean;
}
