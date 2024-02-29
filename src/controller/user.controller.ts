import bcrypt, { compareSync } from "bcrypt"
import {  deleteUser, getUsers, postUser, update } from "../repositorys/user.repository";
import { userValidation } from "../validation/user.validation";
import { JWT_SECRET } from "../secrets";
import { prisma } from "../services/prisma";
import * as jwt from 'jsonwebtoken'


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

//GET BY ID ---> LOGIN
export async function login(req: any, res:any){  
  //desestruturando emaile senha do body insomnia
  const { email, password } = req.body;

  //armazenando em variavel o 
  //usuário do prisma com o mesmo e-mail
  let user = await prisma.user.findFirst({where:{email}})

  //verifico se já existe
  if (!user) {
    throw Error("Usuário não existe!") // Retornar null se o usuário não foi encontrado
}

// Verifica se a senha fornecida corresponde à senha do usuário encontrado
if (compareSync(user.password, password)) {
  throw Error("Senha incorreta!")
}
const token = jwt.sign({
  userId: user.id
},JWT_SECRET)

res.json({user, token})
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