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
import { NavLink, useLocation } from "react-router-dom"

export const AppSidebar = () => {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const location = useLocation()

  const mainMenuItems = [
    {
      title: "Главная",
      url: "/",
      icon: House,
    },
    {
      title: "Отклики",
      url: "/applications",
      icon: MessageSquareReplyIcon,
    },
    {
      title: "Компании",
      url: "/companies",
      icon: Building2,
    },
  ]

  const footerMenuItems = [
    {
      title: "Настройки",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Пользователь",
      url: "/user",
      icon: User2,
    },
  ]

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
        <SidebarMenu className="flex flex-col gap-1 px-2">
          {mainMenuItems.map((menuItem) => (
            <SidebarMenuItem key={menuItem.url}>
              <SidebarMenuButton
                render={<NavLink to={menuItem.url} />}
                tooltip={menuItem.title}
                isActive={location.pathname === menuItem.url}
              >
                <menuItem.icon />
                <span>{menuItem.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {footerMenuItems.map((menuItem) => (
            <SidebarMenuItem key={menuItem.url}>
              <SidebarMenuButton
                render={<NavLink to={menuItem.url} />}
                tooltip={menuItem.title}
                isActive={location.pathname === menuItem.url}
              >
                <menuItem.icon />
                <span>{menuItem.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
