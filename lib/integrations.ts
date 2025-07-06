import { prisma } from "./prisma";

export async function getIntegrationsByUserId(userId: string) {
  const integrations = await prisma.socialIntegrations.findMany({
    where: {
      userId,
    },
  })

  return integrations
}