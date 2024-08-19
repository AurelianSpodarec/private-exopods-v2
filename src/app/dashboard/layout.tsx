'use client'

import SidebarHeader from "./_components/Header";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full bg-[#0c1015]">
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
