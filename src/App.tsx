import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx"
import AppSidebar from "@/components/AppSidebar/AppSidebar.tsx"

export function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  )
}

export default App
