import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import GetStartedContainer from "../_sections/GetStartedContainer";

import Container from "atoms/Container";
import PageHeader from "molecules/PageHeader";
import { configPages } from "config/configPages";

import CellStatus from "./CellStatus";
import CellLink from "./CellLink";
import Button from "atoms/Button/Button";
import Input from "atoms/Input";

function ServiceItemTR({ status }:any) {
    return (
        <tr>
            <td className="whitespace-nowrap pr-3 text-sm font-medium">
            <div className="flex items-center gap-3 px-2.5 xl:p-5">
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

function FilterTypeItem({ id, checked, label }:any) {
    return (
        <li>
        <input defaultChecked type="radio" id={id} name="hosting" value={id} className="hidden peer" required />
        <label 
            htmlFor={id} 
            className="
                inline-flex items-center justify-between w-full h-10 cursor-pointer
                bg-[#F5F5F7] text-black
                peer-checked:bg-black peer-checked:text-[#FEFEFF]
            ">                           
            <div className="text-xs font-medium py-2 px-4 ">
                {label}    
            </div>  
        </label>
    </li>
    )
}

function StatBox({ label, value, config }:any) {
    return (
        <div className="flex flex-col">
            <span className="text-sm mb-2">{label}</span>
            <div className="flex items-center space-x-2">
                <div>
                    {config === "up" &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 5.70703C0.105316 5.5195 0 5.26519 0 5.00003C0 4.73487 0.105316 4.48056 0.292787 4.29303L4.29279 0.293031C4.48031 0.105559 4.73462 0.000244141 4.99979 0.000244141C5.26495 0.000244141 5.51926 0.105559 5.70679 0.293031L9.70679 4.29303C9.88894 4.48163 9.98974 4.73423 9.98746 4.99643C9.98518 5.25863 9.88001 5.50944 9.6946 5.69485C9.5092 5.88026 9.25838 5.98543 8.99619 5.9877C8.73399 5.98998 8.48139 5.88919 8.29279 5.70703L5.99979 3.41403V15C5.99979 15.2652 5.89443 15.5196 5.70689 15.7071C5.51936 15.8947 5.265 16 4.99979 16C4.73457 16 4.48022 15.8947 4.29268 15.7071C4.10514 15.5196 3.99979 15.2652 3.99979 15V3.41403L1.70679 5.70703C1.51926 5.8945 1.26495 5.99982 0.999786 5.99982C0.734622 5.99982 0.480314 5.8945 0.292787 5.70703Z" fill="#47D16C"/>
                    </svg>
                    }
                    {
                        config === "down" && 
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70721 10.293C9.89468 10.4805 10 10.7348 10 11C10 11.2651 9.89468 11.5194 9.70721 11.707L5.70721 15.707C5.51969 15.8944 5.26538 15.9998 5.00021 15.9998C4.73505 15.9998 4.48074 15.8944 4.29321 15.707L0.293214 11.707C0.111055 11.5184 0.0102615 11.2658 0.0125399 11.0036C0.0148182 10.7414 0.119987 10.4906 0.305395 10.3052C0.490803 10.1197 0.741616 10.0146 1.00381 10.0123C1.26601 10.01 1.51861 10.1108 1.70721 10.293L4.00021 12.586L4.00021 0.999969C4.00021 0.734753 4.10557 0.480398 4.29311 0.292862C4.48064 0.105326 4.735 -3.05176e-05 5.00021 -3.05176e-05C5.26543 -3.05176e-05 5.51978 0.105326 5.70732 0.292862C5.89486 0.480398 6.00021 0.734753 6.00021 0.999969L6.00021 12.586L8.29321 10.293C8.48074 10.1055 8.73505 10.0002 9.00021 10.0002C9.26538 10.0002 9.51969 10.1055 9.70721 10.293Z" fill="#F02849"/>
                        </svg>
                    }
                </div>
                <span className="text-4xl font-bold">{value}</span>
            </div>
        </div>
    )
}

function ServicesIndex() {
    const [hasContainer] = useState(true)


    if(!hasContainer) return <GetStartedContainer />
    return (
        <Container>

        <section className="pb-2">
        <PageHeader title="Services" className="flex items-center justify-between">

            <div className="ml-auto">
                <div className="flex items-center space-x-24">
                    <StatBox label="Running" value="18" config="up" />
                    <StatBox label="Stop" value="4" config="down" />
                </div>
            </div>
        </PageHeader>
        </section>


        <section>
        <div className="flex items-center justify-between">
            <div>
                
            <ul className="flex overflow-hidden rounded-xl">
                <FilterTypeItem checked label="View all" id="view-all" />
                <FilterTypeItem label="Running"  id="running"/>
                <FilterTypeItem label="Stopped"  id="stopped"/>
            </ul>

            </div>

            <div className="flex items-center space-x-6">

                <Input placeholder="Search container" type="text" className="bg-[#F5F5F7] py-2 px-12 pl-10 h-10 border-0" iconLeft={`
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M17.5 18L13.875 14.375M15.8333 9.66667C15.8333 13.3486 12.8486 16.3333 9.16667 16.3333C5.48477 16.3333 2.5 13.3486 2.5 9.66667C2.5 5.98477 5.48477 3 9.16667 3C12.8486 3 15.8333 5.98477 15.8333 9.66667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `}/>

                <Button>
                    <NavLink to="/services/new">New Container</NavLink>
                </Button>
            </div>
        </div>
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
                        <ServiceItemTR status="running" />
                        <ServiceItemTR status="running" />
                        <ServiceItemTR status="stopped" />
                        <ServiceItemTR status="running" />
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
