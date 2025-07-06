"use client"

import { Platform } from "@prisma/client"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Icons } from "./icons"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface PlatformCardProps {
  platform: Platform
  userId: string
  isConnected: boolean
}

export function PlatformCard({ platform, userId, isConnected }: PlatformCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const getPlatformIcon = (platformName: string) => {
    switch (platformName.toLowerCase()) {
      case 'facebook':
        return Icons.facebook
      case 'instagram':
        return Icons.earth // Placeholder
      case 'twitter':
        return Icons.earth // Placeholder
      case 'linkedin':
        return Icons.earth // Placeholder
      default:
        return Icons.earth
    }
  }

  const getPlatformColor = (platformName: string) => {
    switch (platformName.toLowerCase()) {
      case 'facebook':
        return 'bg-black'
      case 'instagram':
        return 'bg-pink-500 hover:bg-pink-600'
      case 'twitter':
        return 'bg-sky-500 hover:bg-sky-600'
      case 'linkedin':
        return 'bg-blue-600 hover:bg-blue-700'
      default:
        return 'bg-gray-500 hover:bg-gray-600'
    }
  }

  const handleIntegration = async () => {
    if (isConnected) {
      // Handle disconnection
      return
    }

    setIsLoading(true)
    
    try {
      // For now, we'll handle Facebook integration
      if (platform.name.toLowerCase() === 'facebook') {
        // This would trigger the Facebook OAuth flow
        // For now, we'll just simulate the process
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // In a real implementation, you would:
        // 1. Redirect to Facebook OAuth
        // 2. Handle the callback
        // 3. Save the integration to the database
        console.log(`Connecting to Facebook for user ${userId}...`)
      }
    } catch (error) {
      console.error('Integration failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const Icon = getPlatformIcon(platform.name)

  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2",
        isConnected 
          ? "border-green-200 bg-green-50/50 dark:bg-green-950/20" 
          : "border-border hover:border-primary/50"
      )}
      onClick={handleIntegration}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={cn(
            "p-3 rounded-lg transition-colors duration-300",
            getPlatformColor(platform.name),
            isConnected && "bg-green-500 hover:bg-green-600"
          )}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {isConnected && (
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <Icons.star className="h-4 w-4" />
              <span className="text-xs font-medium">Connected</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{platform.name}</h3>
          <p className="text-sm text-muted-foreground">
            {isConnected 
              ? "Your account is connected and ready to monitor."
              : "Connect your account to start monitoring keywords and finding leads."
            }
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icons.users className="h-3 w-3" />
              <span>Groups & Communities</span>
            </div>
            
            {isLoading ? (
              <Icons.spinner className="h-4 w-4 animate-spin text-primary" />
            ) : (
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium transition-colors",
                isConnected 
                  ? "text-green-600 dark:text-green-400" 
                  : "text-primary group-hover:text-primary/80"
              )}>
                <span>{isConnected ? "Connected" : "Connect"}</span>
                <Icons.arrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 