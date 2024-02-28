import { z } from "zod"

export const logginUserSchema = z.object({
  email: z.string().nonempty("O e-mail é obrigatório").email("insira um e-mail válido!"),
  password: z.string().min(8, "A senha precisa conter 8  caracteres"),
})
