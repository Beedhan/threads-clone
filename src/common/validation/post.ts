import { z } from "zod";

export const CreatePostSchema =z.object({
    text: z.string(),
})
export type ICreatePost = z.infer<typeof CreatePostSchema>