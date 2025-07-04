"use client"

import { DashboardNav } from "@/components/dashboard-nav"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { dashboardConfig } from "@/config/dashboard"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="p-4 flex h-16 items-center justify-between py-4">
        <MainNav items={dashboardConfig.mainNav} />
      </div>
    </header>
    <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[225px] flex-col md:flex h-[calc(100vh-8rem)]">
        <DashboardNav items={dashboardConfig.sidebarNav} />
      </aside>
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
    </div>
    <SiteFooter className="border-t" />
  </div>
  )
}