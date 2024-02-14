import { z } from "zod"

export const createUserSchema = z.object({
  nome: z.string().nonempty("O nome é obrigatório"),
  email: z.string().nonempty("O e-mail é obrigatório").email(),
  password: z.string().min(8, "A senha precisa conter 8  caracteres"),
  telefone: z.string().nonempty("O telefone é obrigatório"),
  cep: z.string().nonempty("O cep é obrigatório").min(8).max(9)
})
