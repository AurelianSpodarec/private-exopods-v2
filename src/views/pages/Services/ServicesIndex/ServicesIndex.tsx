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
import { DropdownItem, DropdownMenuWrap, DropdownRoot, DropdownTrigger } from "molecules/Dropdown";

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
                <DropdownRoot>
                    <DropdownTrigger>
                        <svg className="h-8 px-4 py-2 text-[#665C5C] fill-[#665C5C]" viewBox="0 0 128 512">
                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                        </svg>
                    </DropdownTrigger>

                    <DropdownMenuWrap className="py-1 w-36">
                        <DropdownItem>
                        <Link to={`${configPages.SERVICES.path}/google`} className="h-full w-full px-4 py-3 hover:bg-gray-50 cursor-default">
                        <div className="flex items-center text-xs">
                            <div className="pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                                    <path d="M7.5 0C12.1875 0 15 5.5 15 5.5C15 5.5 12.1875 11 7.5 11C2.8125 11 0 5.5 0 5.5C0 5.5 2.8125 0 7.5 0ZM7.5 1C4.2 1 1.87312 4.251 1.10156 5.5C1.87219 6.748 4.19906 10 7.5 10C10.8 10 13.1269 6.749 13.8984 5.5C13.1278 4.252 10.8009 1 7.5 1ZM7.5 2C8.37024 2 9.20484 2.36875 9.82019 3.02513C10.4355 3.6815 10.7812 4.57174 10.7812 5.5C10.7812 6.42826 10.4355 7.3185 9.82019 7.97487C9.20484 8.63125 8.37024 9 7.5 9C6.62976 9 5.79516 8.63125 5.17981 7.97487C4.56445 7.3185 4.21875 6.42826 4.21875 5.5C4.21875 4.57174 4.56445 3.6815 5.17981 3.02513C5.79516 2.36875 6.62976 2 7.5 2ZM7.5 3C6.87863 3.00079 6.28292 3.26444 5.84354 3.73311C5.40416 4.20178 5.15699 4.8372 5.15625 5.5C5.15625 6.878 6.20719 8 7.5 8C8.79281 8 9.84375 6.878 9.84375 5.5C9.84375 4.122 8.79281 3 7.5 3Z" fill="#C2C2C2"/>
                                </svg>
                            </div>
                            <span>
                                View Details
                            </span>
                        </div>
                        </Link>
                        </DropdownItem>

                        <DropdownItem>
                        <Link to={`${configPages.SERVICES.path}/google`} className="h-full w-full px-4 py-3 hover:bg-gray-50 cursor-default">
                        <div className="flex items-center text-xs">
                            <div className="pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2008 0.691906C11.4686 -0.0403247 10.2814 -0.0403309 9.54919 0.691906L8.49931 1.74178L3.55806 6.683C3.47796 6.76312 3.42114 6.8635 3.39366 6.97337L2.76866 9.47337C2.71541 9.68637 2.77782 9.91169 2.93306 10.0669C3.08829 10.2221 3.3136 10.2846 3.52659 10.2313L6.02656 9.60631C6.1365 9.57881 6.23681 9.522 6.31694 9.44187L11.2222 4.53661L12.3081 3.45079C13.0403 2.71856 13.0403 1.53137 12.3081 0.799137L12.2008 0.691906ZM10.4331 1.57579C10.6771 1.33171 11.0729 1.33171 11.3169 1.57579L11.4242 1.68302C11.6682 1.9271 11.6682 2.32283 11.4242 2.56691L10.7889 3.20223L9.81675 2.19211L10.4331 1.57579ZM8.93269 3.07616L9.90481 4.08627L5.5555 8.43562L4.23398 8.766L4.56435 7.4445L8.93269 3.07616ZM1.5 3.99996C1.5 3.65479 1.77982 3.37496 2.125 3.37496H5.25C5.59519 3.37496 5.875 3.09514 5.875 2.74996C5.875 2.40479 5.59519 2.12496 5.25 2.12496H2.125C1.08947 2.12496 0.25 2.96443 0.25 3.99996V10.8749C0.25 11.9105 1.08947 12.7499 2.125 12.7499H9C10.0356 12.7499 10.875 11.9105 10.875 10.8749V7.74994C10.875 7.40481 10.5952 7.12494 10.25 7.12494C9.90481 7.12494 9.625 7.40481 9.625 7.74994V10.8749C9.625 11.2201 9.34519 11.4999 9 11.4999H2.125C1.77982 11.4999 1.5 11.2201 1.5 10.8749V3.99996Z" fill="#D7D7D7"/>
                                </svg>
                            </div>
                            <span>
                                Edit
                            </span>
                        </div>
                        </Link>
                        </DropdownItem>

                        <DropdownItem>
                        <Link to={`${configPages.SERVICES.path}/google`} className="h-full w-full px-4 py-3 hover:bg-gray-50 cursor-default">
                        <div className="flex items-center text-xs">
                            <div className="pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M5.35086 3.49405V2.56548C5.35086 1.69001 5.35086 1.25228 5.62284 0.980305C5.89482 0.708336 6.33255 0.708336 7.20801 0.708336H11.8509C12.7263 0.708336 13.164 0.708336 13.436 0.980305C13.708 1.25228 13.708 1.69001 13.708 2.56548V7.20834C13.708 8.08379 13.708 8.52152 13.436 8.7935C13.164 9.06548 12.7263 9.06548 11.8509 9.06548H10.9223M2.56515 13.7083H7.20801C8.08346 13.7083 8.52119 13.7083 8.79317 13.4364C9.06515 13.1644 9.06515 12.7266 9.06515 11.8512V7.20834C9.06515 6.33288 9.06515 5.89515 8.79317 5.62317C8.52119 5.35119 8.08346 5.35119 7.20801 5.35119H2.56515C1.68968 5.35119 1.25196 5.35119 0.979977 5.62317C0.708008 5.89515 0.708008 6.33288 0.708008 7.20834V11.8512C0.708008 12.7266 0.708008 13.1644 0.979977 13.4364C1.25196 13.7083 1.68968 13.7083 2.56515 13.7083Z" stroke="#C2C2C2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <span>
                                Duplicate
                            </span>
                        </div>
                        </Link>
                        </DropdownItem>

                        <DropdownItem>
                        <Link to={`${configPages.SERVICES.path}/google`} className="h-full w-full px-4 py-3 hover:bg-gray-50 cursor-default">
                        <div className="flex items-center text-xs">
                            <div className="pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <g clip-path="url(#clip0_350_822)">
                            <path d="M14.0625 2.34375H9.79687C9.68929 1.81393 9.40185 1.33759 8.98325 0.995448C8.56465 0.653306 8.04064 0.4664 7.5 0.4664C6.95936 0.4664 6.43535 0.653306 6.01675 0.995448C5.59815 1.33759 5.31071 1.81393 5.20313 2.34375H0.9375C0.81318 2.34375 0.693951 2.39314 0.606044 2.48104C0.518136 2.56895 0.46875 2.68818 0.46875 2.8125C0.46875 2.93682 0.518136 3.05605 0.606044 3.14396C0.693951 3.23186 0.81318 3.28125 0.9375 3.28125H14.0625C14.1868 3.28125 14.306 3.23186 14.394 3.14396C14.4819 3.05605 14.5312 2.93682 14.5312 2.8125C14.5312 2.68818 14.4819 2.56895 14.394 2.48104C14.306 2.39314 14.1868 2.34375 14.0625 2.34375ZM7.5 1.40625C7.79013 1.40707 8.07291 1.4976 8.30956 1.66544C8.54622 1.83328 8.72517 2.07021 8.82187 2.34375H6.17813C6.27483 2.07021 6.45378 1.83328 6.69044 1.66544C6.92709 1.4976 7.20987 1.40707 7.5 1.40625ZM12.3656 4.25625C12.2803 4.22035 12.1862 4.21055 12.0952 4.22806C12.0043 4.24558 11.9206 4.28964 11.8547 4.35469C11.8112 4.39849 11.7769 4.45043 11.7535 4.50754C11.7302 4.56465 11.7184 4.62581 11.7188 4.6875C11.7188 4.81182 11.7681 4.93105 11.856 5.01896C11.944 5.10686 12.0632 5.15625 12.1875 5.15625C12.3118 5.15625 12.431 5.10686 12.519 5.01896C12.6069 4.93105 12.6562 4.81182 12.6562 4.6875C12.6545 4.56339 12.606 4.44452 12.5203 4.35469C12.4757 4.31201 12.4232 4.27856 12.3656 4.25625ZM12.1875 6.09375C12.0632 6.09375 11.944 6.14314 11.856 6.23104C11.7681 6.31895 11.7188 6.43818 11.7188 6.5625V7.96875C11.7188 8.09307 11.7681 8.2123 11.856 8.30021C11.944 8.38811 12.0632 8.4375 12.1875 8.4375C12.3118 8.4375 12.431 8.38811 12.519 8.30021C12.6069 8.2123 12.6562 8.09307 12.6562 7.96875V6.5625C12.6562 6.43818 12.6069 6.31895 12.519 6.23104C12.431 6.14314 12.3118 6.09375 12.1875 6.09375ZM12.1875 9.375C12.0632 9.375 11.944 9.42439 11.856 9.51229C11.7681 9.6002 11.7188 9.71943 11.7188 9.84375V13.125C11.7188 13.2493 11.6694 13.3685 11.5815 13.4565C11.4935 13.5444 11.3743 13.5937 11.25 13.5937H3.75C3.62568 13.5937 3.50645 13.5444 3.41854 13.4565C3.33064 13.3685 3.28125 13.2493 3.28125 13.125V4.6875C3.28125 4.56318 3.23186 4.44395 3.14396 4.35604C3.05605 4.26814 2.93682 4.21875 2.8125 4.21875C2.68818 4.21875 2.56895 4.26814 2.48104 4.35604C2.39314 4.44395 2.34375 4.56318 2.34375 4.6875V13.125C2.34375 13.498 2.49191 13.8556 2.75563 14.1194C3.01935 14.3831 3.37704 14.5312 3.75 14.5312H11.25C11.623 14.5312 11.9806 14.3831 12.2444 14.1194C12.5081 13.8556 12.6562 13.498 12.6562 13.125V9.84375C12.6562 9.71943 12.6069 9.6002 12.519 9.51229C12.431 9.42439 12.3118 9.375 12.1875 9.375Z" fill="#C2C2C2"/>
                            <path d="M5.625 11.25V5.15625C5.625 5.03193 5.57561 4.9127 5.48771 4.82479C5.3998 4.73689 5.28057 4.6875 5.15625 4.6875C5.03193 4.6875 4.9127 4.73689 4.82479 4.82479C4.73689 4.9127 4.6875 5.03193 4.6875 5.15625V11.25C4.6875 11.3743 4.73689 11.4935 4.82479 11.5815C4.9127 11.6694 5.03193 11.7188 5.15625 11.7188C5.28057 11.7188 5.3998 11.6694 5.48771 11.5815C5.57561 11.4935 5.625 11.3743 5.625 11.25ZM7.96875 11.25V5.15625C7.96875 5.03193 7.91936 4.9127 7.83146 4.82479C7.74355 4.73689 7.62432 4.6875 7.5 4.6875C7.37568 4.6875 7.25645 4.73689 7.16854 4.82479C7.08064 4.9127 7.03125 5.03193 7.03125 5.15625V11.25C7.03125 11.3743 7.08064 11.4935 7.16854 11.5815C7.25645 11.6694 7.37568 11.7188 7.5 11.7188C7.62432 11.7188 7.74355 11.6694 7.83146 11.5815C7.91936 11.4935 7.96875 11.3743 7.96875 11.25ZM10.3125 11.25V5.15625C10.3125 5.03193 10.2631 4.9127 10.1752 4.82479C10.0873 4.73689 9.96807 4.6875 9.84375 4.6875C9.71943 4.6875 9.6002 4.73689 9.51229 4.82479C9.42439 4.9127 9.375 5.03193 9.375 5.15625V11.25C9.375 11.3743 9.42439 11.4935 9.51229 11.5815C9.6002 11.6694 9.71943 11.7188 9.84375 11.7188C9.96807 11.7188 10.0873 11.6694 10.1752 11.5815C10.2631 11.4935 10.3125 11.3743 10.3125 11.25Z" fill="#C2C2C2"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_350_822">
                            <rect width="15" height="15" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </div>
                            <span>
                                Delete
                            </span>
                        </div>
                        </Link>
                        </DropdownItem>
                    </DropdownMenuWrap>    
                </DropdownRoot>
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
