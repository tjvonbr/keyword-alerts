import { Icons } from "../components/icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavItem[]
    }
)

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  mainNav: [],
  sidebarNav: [
    {
      title: "Channels",
      href: "/channels",
      icon: "users",
    },
    {
      title: "Leads",
      href: "/leads",
      icon: "lead",
    },
    {
        title: "Messages",
        href: "/messages",
        icon: "messages",
    },
    {
      title: "Keywords",
      href: "/keywords",
      icon: "alert",
    },
  ],
}