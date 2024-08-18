import { dashboardSettings } from "@/config/dashboard";

import Sidebar from "./_components/Sidebar";
import SidebarHeader from "./_components/Header";

// import SidebarMain from "./_components/Main";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full">
      {/* <Sidebar settings={dashboardSettings} /> */}
      <div className="w-full">
        <SidebarHeader />
          {children}
      </div>
    </div>
  );
}

export default DashboardLayout
