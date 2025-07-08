import * as z from "zod";

export const createKeywordSchema = z.object({
  name: z.string().min(1, "Keyword name is required").max(100, "Keyword name must be less than 100 characters"),
  channelId: z.string().min(1, "Please select a channel"),
});

export type CreateKeywordInput = z.infer<typeof createKeywordSchema>; 