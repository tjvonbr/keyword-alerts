import { prisma } from "@/lib/prisma"
import { Keyword } from "@prisma/client"

export async function getKeywordsByUserId(userId: string): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      userId: userId
    }
  })

  return keywords
}