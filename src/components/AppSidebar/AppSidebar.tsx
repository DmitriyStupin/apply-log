import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar.tsx"
import {
  Building2,
  MessageSquareReplyIcon,
  User2,
  Settings,
  House,
} from "lucide-react"

export const AppSidebar = () => {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar variant={"floating"} collapsible={"icon"}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex h-12 items-center px-2 font-black tracking-tight transition-all">
              {isCollapsed ? "AL" : "ApplyLog"}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="flex flex-col gap-1 px-1">
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Главная">
              <House />
              <span>Главная</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Отклики">
              <MessageSquareReplyIcon />
              <span>Отклики</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Компании">
              <Building2 />
              <span>Компании</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Настройки">
              <Settings /> Настройки
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Username">
              <User2 /> Username
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
