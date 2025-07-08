"use server"

import { prisma } from "@/lib/prisma"
import { createKeywordSchema, type CreateKeywordInput } from "@/lib/validations/keywords"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache"

export async function createKeyword(data: CreateKeywordInput) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return { error: "Unauthorized" }
    }

    const validatedData = createKeywordSchema.parse(data)

    // Get the channel to get the platformId
    const channel = await prisma.channel.findUnique({
      where: { id: validatedData.channelId },
      include: { platform: true }
    })

    if (!channel) {
      return { error: "Channel not found" }
    }

    // Check if user owns the channel
    if (channel.userId !== session.user.id) {
      return { error: "Unauthorized" }
    }

    // Check if keyword already exists for this channel
    const existingKeyword = await prisma.keyword.findFirst({
      where: {
        name: validatedData.name,
        channelId: validatedData.channelId,
        userId: session.user.id
      }
    })

    if (existingKeyword) {
      return { error: "Keyword already exists for this channel" }
    }

    const keyword = await prisma.keyword.create({
      data: {
        name: validatedData.name,
        userId: session.user.id,
        channelId: validatedData.channelId,
        platformId: channel.platformId,
        status: "ACTIVE"
      }
    })

    revalidatePath("/keywords")
    return { success: true, keyword }
  } catch (error) {
    console.error("Error creating keyword:", error)
    if (error instanceof Error) {
      return { error: error.message }
    }
    return { error: "Failed to create keyword" }
  }
} 