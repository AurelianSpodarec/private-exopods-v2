import { NavLink, Outlet, useParams } from "react-router-dom";
import { configPages } from "config/configPages";

import Container from "layout/Container";

function ServiceNavItem({ id, name, url }: any) {
    return (
        <NavLink
            to={`${configPages.SERVICES.path}/${id}${url}`}
            className={({ isActive }) => (
                `text-xs px-1 pb-3 whitespace-nowrap border-b ${isActive ? "text-[#252C32] border-[#000] font-semibold active-class" : "font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`
            )}
        >
            {name}
        </NavLink>
    );
}

function ServicesShow() {
    const { id } = useParams();

    return (
        <Container>
            {/* <PageHeader title={`Site ${id}`} className="capitalize" /> */}

            <section className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10">
                        <img className="h-full w-full" src="https://i.postimg.cc/g0LrxxFR/Avatar.png" />
                    </div>
                    <div>
                        <h1 className="font-medium capitalize text-2xl">{id}</h1>
                        <div className="flex items-center space-x-2 text-[#48535B]">
                            <span className="text-xs">73d7dfd56</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path d="M4.91634 3.3335V2.54183C4.91634 1.79544 4.91634 1.42225 5.14822 1.19037C5.3801 0.958496 5.75329 0.958496 6.49967 0.958496H10.458C11.2044 0.958496 11.5776 0.958496 11.8095 1.19037C12.0413 1.42225 12.0413 1.79544 12.0413 2.54183V6.50016C12.0413 7.24655 12.0413 7.61974 11.8095 7.85162C11.5776 8.0835 11.2044 8.0835 10.458 8.0835H9.66634M2.54134 12.0418H6.49967C7.24606 12.0418 7.61925 12.0418 7.85113 11.8099C8.08301 11.5781 8.08301 11.2049 8.08301 10.4585V6.50016C8.08301 5.75378 8.08301 5.38059 7.85113 5.14871C7.61925 4.91683 7.24606 4.91683 6.49967 4.91683H2.54134C1.79495 4.91683 1.42176 4.91683 1.18988 5.14871C0.958008 5.38059 0.958008 5.75378 0.958008 6.50016V10.4585C0.958008 11.2049 0.958008 11.5781 1.18988 11.8099C1.42176 12.0418 1.79495 12.0418 2.54134 12.0418Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button>
                        Run
                    </button>
                    <button>
                        Delete
                    </button>
                </div>
            </section>

    

            <section>
                <div className="border-b border-gray-200 pb-2.5 mb-4">
                    <nav className="space-x-8">
                        <ServiceNavItem id={id} url={configPages.LOGS.path} name="Logs" />
                        <ServiceNavItem id={id} url={configPages.REVISION.path} name="Revision" />
                        <ServiceNavItem id={id} url={configPages.INSPECT.path} name="Inspect" />
                        <ServiceNavItem id={id} url={configPages.FILES.path} name="Files" />
                        <ServiceNavItem id={id} url={configPages.NETWORKING.path} name="Networking" />
                        <ServiceNavItem id={id} url={configPages.INTEGREGATION.path} name="Integregation" />
                        <ServiceNavItem id={id} url={configPages.TRIGGERS.path} name="Triggers" />
                    </nav>
                </div>

                <div>
                    <Outlet />
                </div>
            </section>
        </Container>
    )
}

export default ServicesShow;
