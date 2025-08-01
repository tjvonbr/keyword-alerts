import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Link } from "lucide-react"
import { cn } from "@/lib/utils"
import { dashboardConfig } from "@/config/dashboard"

interface DataDeletionLayoutProps {
  children: React.ReactNode
}

export default async function DataDeletionLayout({
  children,
}: DataDeletionLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={dashboardConfig.mainNav} />
          <nav>
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
} 