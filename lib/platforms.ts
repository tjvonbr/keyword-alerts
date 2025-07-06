import { Platform } from "@prisma/client"
import { prisma } from "./prisma"

export async function getPlatforms(): Promise<Platform[]> {
  const platforms = await prisma.platform.findMany()

  return platforms
}