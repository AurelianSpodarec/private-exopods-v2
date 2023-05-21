import { useState } from "react";
import { Link } from "react-router-dom";

import GetStartedContainer from "../_sections/GetStartedContainer";

import Container from "layout/Container";
import PageHeader from "molecules/PageHeader";
import { configPages } from "config/configPages";

import CellStatus from "./CellStatus";
import CellLink from "./CellLink";

function ServiceItemTR({ status }:any) {
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
            <CellLink label="docker/welcome-to-docker:latest" />
            <td className="whitespace-nowrap px-3 py-4 text-sm text-[#667085]">1 hours ago</td>
            <CellLink label="8088" />
            <CellStatus label={status} status={status} />
            <td className="whitespace-nowrap py-4 pl-3 pr-4">
                <Link to={`${configPages.SERVICES.path}/google`} className="">
                <svg className="h-5 text-[#665C5C] fill-[#665C5C]" viewBox="0 0 128 512">
                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
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
                <table className="min-w-full table-fixed">

                    <thead className=" rounded-2xl h-12">
                    <tr className="text-[#667085] text-xs font-normal">
                        <th scope="col" className="min-w-[5rem] text-left pl-4 bg-[#F5F5F7] rounded-tl-2xl rounded-bl-2xl">Name</th>
                        <th scope="col" className="text-left bg-[#F5F5F7]">Image</th>
                        <th scope="col" className="text-left bg-[#F5F5F7]">Last Updated</th>
                        <th scope="col" className="text-left bg-[#F5F5F7]">Port(S)</th>
                        <th scope="col" className="text-left bg-[#F5F5F7]">Status</th>
                        <th scope="col" className="text-left bg-[#F5F5F7] rounded-tr-2xl rounded-br-2xl pl-3">
                            <span className="sr-only">Manage</span>
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                        <ServiceItemTR status="running" />
                        <ServiceItemTR status="running" />
                        <ServiceItemTR status="stopped" />
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
