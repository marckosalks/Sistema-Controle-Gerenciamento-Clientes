import bcrypt from "bcrypt"
import { postUser } from "../repositorys/user.repository";
import { userValidation } from "../validation/user.validation";

export async function post(req: any, res:any) {
  try{
    await userValidation.validate(req.body)

    // criptografia para senha 
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    const user = await postUser(req.body)
    req.body.password = hashPassword

    res.status(200).send(user)
    console.log("este é o MAIS NOVO, usuário cadastrado !")
  
  }catch(error: unknown){
    res.status(400).send(error)
    console.log("Não consegui cadastrar um novo usuário!", error)
  }

}