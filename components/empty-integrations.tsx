"use client"

import { Platform, SocialIntegrations } from "@prisma/client"
import { PlatformCard } from "./platform-card"
import { Session } from "next-auth"

interface EmptyIntegrationsProps {
  integrations: SocialIntegrations[]
  platforms: Platform[]
  session: Session
}

export default function EmptyIntegrations({ integrations, platforms, session }: EmptyIntegrationsProps) {
  return (  
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
      {platforms && platforms.map((platform) => (
        <PlatformCard
          integrations={integrations}
          key={platform.id} 
          platform={platform}
          userId={session.user?.id || ''}
          isConnected={integrations.some(integration => integration.platformId === platform.id)}
        />
      ))}
    </div>
  )
}