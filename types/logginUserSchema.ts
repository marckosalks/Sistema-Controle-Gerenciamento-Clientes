import { logginUserSchema } from "@/app/schemas/logginUserSchema"
import { z } from "zod"

export type logginUserSchemaType = z.infer<typeof logginUserSchema>