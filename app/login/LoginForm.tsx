'use client'

import { logginUserSchemaType } from "@/types/logginUserSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Button from "../components/Button"
import toast from "react-hot-toast"
import { logginUserSchema } from "../schemas/logginUserSchema"
import  Span  from "@/app/components/Span"
import  Input  from "@/app/components/Input"
import { loginUser } from "@/services/auth"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const route = useRouter()
  const { 
    register,
    handleSubmit, 
    formState: {errors} } = useForm<logginUserSchemaType>({
    resolver: zodResolver(logginUserSchema)
  })

  async function isLoggin(data:logginUserSchemaType){
    console.log("Usuários existe na base ?", data)
    
    //consumindo metodo post
    try{
      const response = await loginUser(data)

      if(response.token){
        toast.success("Seja bem-do meu nobre!")
        route.push('/private')
      }else{
        toast.error("Credenciais inválidas!")
      }
    }catch(error: unknown){
      toast.error("Erro ao efetuar login")
      console.error("Erro ao efetuar login:", error);
    }
    
  }

  return (
      // aqui eu preciso usar o reacthookforms
    <form onSubmit={handleSubmit(isLoggin)} 
    className='flex flex-col gap-4 items-center'>
      <div className='flex flex-col  w-[30%] gap-2'>
          <Span label="🧹Email:"/>
          <Input name='email' type="email" register={register}/>
          {errors.email && <span className=" text-red-600">{errors.email.message}</span>}
        </div>

        <div className='flex flex-col  w-[30%] gap-2'>
          <div className="flex items-center align-bottom justify-between">
            <Span label="🧹Senha:"/>
            <p className="text-xs font-bold">Senha no mínimo com 8 caracters</p>
          </div>
          <Input name='password' type="password" register={register}/>
          {errors.password && <span className=" text-red-600">{errors.password.message}</span>}
        </div>
      <Button type="submit" label="Entrar"></Button>
    </form>
  )
}
