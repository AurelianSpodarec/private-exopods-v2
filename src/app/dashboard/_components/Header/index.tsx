'use client'

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { getUserProfile } from "@/services/apis/endpoints/user";
import { settingsUserMenu } from "@/config/userMenu";

import UserAvatar from "../UserAvatar"
import Logo from "./_components/Logo";
import TeamBalance from "./_components/TeamBalance";
import SelectProjectMenu from "./_components/SelectProjectMenu";

function SidebarHeader() {
  const dataQuery = useQuery({
    queryKey: [`user`],
    queryFn: async () => await getUserProfile()
  })

  console.log(dataQuery.data)
  if (!dataQuery.data) return <></>
  return (
    <header className="relative bg-dashboard-header-background border-b py-2 border-b-header-border-bottom ">
      <div className="flex items-center px-6 text-white">

        <div className="flex items-center">
          <Link href="/" className="max-w-[50px] text-white fill-white p-2">
            <Logo />
          </Link>
          <div className="ml-3 flex items-center">
            <SelectProjectMenu />
          </div>
        </div>

        <div className="ml-auto flex space-x-4 items-center align-center">
          <ul className="space-x-4">
            <button type="button">Feedback</button>
            <Link href="/help">Help</Link>
            <Link href="/docs">Docs</Link>
          </ul>
          <TeamBalance amount={dataQuery.data.data.credits} />
          <UserAvatar menu={settingsUserMenu} email={dataQuery.data.data.email} name={dataQuery.data.data.name} avatar={dataQuery.data.data.picture} />
        </div>

      </div>
    </header>
  )
}

export default SidebarHeader
