import { useState } from "react";
import { Link } from "react-router-dom";

import GetStartedContainer from "../_sections/GetStartedContainer";

import Container from "layout/Container";
import PageHeader from "molecules/PageHeader";
import { configPages } from "config/configPages";

function ServicesIndex() {
    const [hasContainer, setHasContainer] = useState(true)

    if(!hasContainer) return <GetStartedContainer />
    return (
        <Container>
        <PageHeader title="Services" />

        <section>

        </section>

        <section className="">
        <div className="mt-8 flow-root">

            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">

                <div className="relative">
                <table className="min-w-full table-fixed divide-y divide-gray-300">

                    <thead className="bg-[#F5F5F7] h-12">
                    <tr>
                        <th scope="col" className="min-w-[5rem] pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                        <th scope="col" className="px-3 text-left text-sm font-semibold text-gray-900">Image</th>
                        <th scope="col" className="px-3 text-left text-sm font-semibold text-gray-900">Last Updated</th>
                        <th scope="col" className="px-3 text-left text-sm font-semibold text-gray-900">Port(S)</th>
                        <th scope="col" className="px-3 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th scope="col" className="relative  pl-3 pr-4 sm:pr-3">
                            <span className="sr-only">Manage</span>
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                
                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0 w-10">
                                <img className="h-full w-full" src="https://i.postimg.cc/g0LrxxFR/Avatar.png" alt="Brand"/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold">Google</p>
                                <Link to="https://google.com" className="text-blue-700">www.google.com</Link>
                            </div>
                        </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span>docker/welcome-to-docker:latest</span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1 hours ago</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            8088
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Running
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <Link to={`${configPages.SERVICES.path}/google`} className="border py-2 px-3 rounded-lg text-indigo-600 hover:text-indigo-900">
                                Manage<span className="sr-only">Google</span>
                            </Link>
                        </td>
                    </tr>

                    </tbody>
                </table>
                </div>

            </div>
            </div>

        </div>
        </section>

    </Container>
    )
}

export default ServicesIndex;
