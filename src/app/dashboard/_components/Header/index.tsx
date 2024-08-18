'use client'

import { settingsUserMenu } from "@/config/userMenu";
// import ModeToggle from "@/components/ModeToggle"
// import UserAvatar from "../UserAvatar"
// import { auth } from "@/auth"
// import { serverLogout } from "@/actions/loginServerAction"

import UserAvatar from "../UserAvatar"

 function SidebarHeader() {
  // const session = await auth()
  // console.log(session.user)

  const session = "";
  return (
    <header className="bg-dashboard-header-background border-b border-b-header-border-bottom">
      <div className="flex h-14 items-center px-6">
        
        {/* <ModeToggle /> */}
        <div className="ml-auto">
          <UserAvatar menu={settingsUserMenu} email={session?.user?.email} avatar={session?.user?.avatar} />
        </div>
      </div>
    </header>
  )
}

export default SidebarHeader
