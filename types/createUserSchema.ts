import { createUserSchema } from "@/app/schemas/createUserSchema"
import { z } from "zod"

export type CreateUserSchemaType = z.infer<typeof createUserSchema>