import { prisma } from "./prisma";

export async function getChannelsByUserId(userId: string) {
  const channels = await prisma.channel.findMany({
    where: {
      userId,
    },
  })

  return channels
}

export async function getChannelsWithKeywordsByUserId(userId: string) {
  const channels = await prisma.channel.findMany({
    where: {
      userId,
    },
    include: {
      keywords: true,
      platform: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return channels
}