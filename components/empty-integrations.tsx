import { auth } from "@/auth"
import { getIntegrationsByUserId } from "@/lib/integrations"
import { getPlatforms } from "@/lib/platforms"
import { Platform, SocialIntegrations } from "@prisma/client"
import { redirect } from "next/navigation"
import { PlatformCard } from "./platform-card"


export default async function EmptyIntegrations() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/sign-in')
  }

  const integrations: SocialIntegrations[] = await getIntegrationsByUserId(session.user.id)
  const platforms: Platform[] = await getPlatforms()

  return (  
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
      {platforms && platforms.map((platform) => (
        <PlatformCard 
          key={platform.id} 
          platform={platform}
          userId={session.user?.id || ''}
          isConnected={integrations.some(integration => integration.platformId === platform.id)}
        />
      ))}
    </div>
  )
}