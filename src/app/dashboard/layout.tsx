'use client'

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { dashboardSettings } from "@/config/dashboard";

import Sidebar from "./_components/Sidebar";
import SidebarHeader from "./_components/Header";
import { fetchTest } from "@/services/apis/endpoints/auth";
import { getServiceAllPod } from "@/services/apis/endpoints/services";

//
function DashboardLayout({ children }: { children: React.ReactNode }) {

  // const dataQuery = useQuery({
  //   queryKey: [`test`],
  //   queryFn: async () => await fetchTest()
  // })

  // const da = useQuery({
  //   queryKey: [`wo`],
  //   queryFn: async () => await getServiceAllPod()
  // })

  // useEffect(() => {
  //   console.log(dataQuery.data)
  //   console.log(da.data)
  // }, [dataQuery.data, da.data])

  return (
    <div className="flex w-full h-full">
      {/* <Sidebar settings={dashboardSettings} /> */}
      <div className="w-full">
        <SidebarHeader />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout
