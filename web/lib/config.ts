export interface SidebarNavItem {
  disabled: boolean
  title: string
  href: string
  icon: React.ReactNode
}

export const sidebarNavItems = [
  {
    disabled: false,
    title: "Groups",
    href: "/",
    icon: "users"
  },
  {
    disabled: false,
    title: "Messages",
    href: "/messages",
    icon: "messages"
  },
  {
    disabled: true,
    title: "Coming soon!",
    href: "/coming-soon",
    icon: "party"
  }

]