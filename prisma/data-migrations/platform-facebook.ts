import { prisma } from "@/lib/prisma"
import { Platform } from "@prisma/client"

export default async function main(): Promise<Platform> {
  const facebookIntegration: Platform = await prisma.platform.create({
    data: {
      name: 'Facebook',
    }
  })

  return facebookIntegration
};

main()