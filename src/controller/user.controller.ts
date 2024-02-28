import bcrypt from "bcrypt"
import {  deleteUser, getUserId, getUsers, postUser, update } from "../repositorys/user.repository";
import { userValidation } from "../validation/user.validation";

// POST

export async function post(req: any, res:any) {
  try{
    await userValidation.validate(req.body)

    // criptografia para senha 
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashPassword
    const user = await postUser(req.body)

    res.status(200).send(user)
    console.log("este é o MAIS NOVO, usuário cadastrado !")
  
  }catch(error: unknown){
    res.status(400).send(error)
    console.log("Não consegui cadastrar um novo usuário!", error)
  }

}

//GET BY ID
export async function get(req: any, res: any) {
  try{
    const user = await getUserId(Number(req.params.id))
    res.status(200).send(user)
    console.log("Encontrei o usuário que voce procura! (:", user)
  
  }catch(error: unknown){
    res.status(400).send(error)
    console.log("Não encontrei esse usuário! );", error)
  }
}

//GET
export async function getAll (req: any, res:any){
  try{
    const users = await getUsers()
    res.status(200).send(users)
    console.log("Encontrei todos os usuários que existem na base!", users)
  }catch(error: unknown){
    res.status(400).send(error)
    console.log("Não consegui encontrar nenhum usuário!", error)
  }
}

export async function put(req: any, res:any){
  try{
    const user = await update(req.body, Number(req.params.id))
    res.status(200).send(user)
    console.log("Acabei de atualizar esse usuário", user)
  }catch(error: unknown){
    res.status(400).send(error)
    console.log("Não consegui encontrar esse usuário, poderia ser mais claro ?!")
  }
}

export async function deleted(req: any, res: any){
  try{
    const user = await deleteUser(Number(req.params.id))
    res.status(200).send(user)
    console.log("Usuário não existe mais na base!", user)
  }catch(error: unknown){
    res.status(400).send(error)
    console.log("Não consegui apagar esse usuário!")
  }
}