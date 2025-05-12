import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { dashboardConfig } from "@/config/dashboard"

interface PrivacyPolicyLayoutProps {
  children: React.ReactNode
}

export default async function PrivacyPolicyLayout({
  children,
}: PrivacyPolicyLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={dashboardConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}