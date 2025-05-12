import * as z from "zod"
import { Industry } from "@prisma/client"

export const userAuthSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  industry: z.nativeEnum(Industry),
})