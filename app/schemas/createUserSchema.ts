import { z } from "zod"

export const createUserSchema = z.object({
  nome: z.string().nonempty("O nome é obrigatório")
  .min(3, "preencha no minimo 3 caracteres")
  .max(50, "atingiu o limite do campo"),
  email: z.string().nonempty("O e-mail é obrigatório").email("insira um e-mail válido!"),
  password: z.string().min(8, "A senha precisa conter 8  caracteres"),
  telefone: z.string().nonempty("O telefone é obrigatório")
  .min(11, "número de telefone com no minimo 11 caracters")
  .max(14, "número de telefone com no máximo 14 caracters"),
  cep: z.string().nonempty("O cep é obrigatório").min(8, "preencha no minimo 8").max(9,"atingiu o limite do campo")
})
