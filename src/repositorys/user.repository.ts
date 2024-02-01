import { prisma } from "../services/prisma"

// metodo para cadastrar usuário 

export type DataTypes = {
  id: string
  name: string
  email: string
  password:  string
  phone: string 
}

export async function postUser(data: unknown | any){
  const user = await prisma.user.create({
    data,
  })
  return user
} 