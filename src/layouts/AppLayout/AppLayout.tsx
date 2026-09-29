import AppSidebar from "@/components/AppSidebar/AppSidebar.tsx"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx"
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default AppLayout
