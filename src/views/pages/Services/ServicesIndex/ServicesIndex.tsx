import { useState } from "react";
import { Link } from "react-router-dom";

import GetStartedContainer from "../_sections/GetStartedContainer";

import Container from "layout/Container";
import PageHeader from "molecules/PageHeader";
import { configPages } from "config/configPages";

function ServiceItemTR() {
    return (
        <tr>
            <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0 w-10 h-10">
                    <img className="h-full w-full" src="https://i.postimg.cc/g0LrxxFR/Avatar.png" alt="Brand"/>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-semibold">Catalog</p>
                    <Link to="https://google.com" className="text-[#667085] text-[10px] underline">https://react-client-w.runapp</Link>
                </div>
            </div>
            </td>
            <td className="whitespace-nowrap">
                <div className="text-[#175CD3] bg-[#EFF8FF] rounded-2xl px-2 py-1 text-xs inline-block space-x-0.5">
                    <span className="underline">docker/welcome-to-docker:latest</span>
                    <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M3.5498 11.5498L10.6499 4.44974" stroke="#1A73E8" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.88135 4.44974H10.6502V10.2186" stroke="#1A73E8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1 hours ago</td>
            <td className="whitespace-nowrap">
                <div className="text-[#175CD3] bg-[#EFF8FF] rounded-2xl px-2 py-1 text-xs inline-block space-x-0.5">
                    <span className="underline">8088</span>
                    <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M3.5498 11.5498L10.6499 4.44974" stroke="#1A73E8" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.88135 4.44974H10.6502V10.2186" stroke="#1A73E8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                Running
            </td>
            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                <Link to={`${configPages.SERVICES.path}/google`} className="border py-2 px-3 rounded-lg text-indigo-600 hover:text-indigo-900">
                    Manage<span className="sr-only">Catalog</span>
                </Link>
            </td>
        </tr>
    )
}

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
                        <ServiceItemTR />
                        <ServiceItemTR />
                        <ServiceItemTR />
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
