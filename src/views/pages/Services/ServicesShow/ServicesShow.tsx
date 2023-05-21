import { Link, Outlet, useParams } from "react-router-dom";
import { configPages } from "config/configPages";

import Container from "layout/Container";

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
                <div>
                    <nav>
                        <Link to={configPages.SERVICES.path + configPages.LOGS.path}>Logs</Link>
                        <Link to={configPages.SERVICES.path + configPages.REVISION.path}>Revision</Link>
                        <Link to={configPages.SERVICES.path + configPages.INSPECT.path}>Inspect</Link>
                        <Link to={configPages.SERVICES.path + configPages.FILES.path}>Files</Link>
                        <Link to={configPages.SERVICES.path + configPages.NETWORKING.path}>Networking</Link>
                        <Link to={configPages.SERVICES.path + configPages.INTEGREGATION.path}>Integregation</Link>
                        <Link to={configPages.SERVICES.path + configPages.TRIGGERS.path}>Triggers</Link>
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
