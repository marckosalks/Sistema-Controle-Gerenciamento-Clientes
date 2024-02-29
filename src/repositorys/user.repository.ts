
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
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      phone: true,
      zipcode: true,
      createdAt: true,
      updatedAt: true,
    }
  })
  return user
} 



export async function getUsers(){
  const listUsers = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      phone:true,
      zipcode: true,
    }  
  })
  return listUsers
}

export async function update(data: unknown | any , id: number | any){
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      phone:true,
      zipcode: true,
      createdAt: true,
      updatedAt: true,
    }
  })
  return user
}

export async function deleteUser(id: number | undefined){
   await prisma.user.delete({
    where: {
      id,
    },
  })
  return
}