import { logginUserSchemaType } from "@/types/logginUserSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Button from "../components/Button"
import { getUser } from "@/services/get"
import toast from "react-hot-toast"
import { logginUserSchema } from "../schemas/logginUserSchema"
import  Span  from "@/app/components/Span"
import  Input  from "@/app/components/Input"

export default function LoginForm() {
  
  const { 
    register,
    handleSubmit, 
    formState: {errors} } = useForm<logginUserSchemaType>({
    resolver: zodResolver(logginUserSchema)
  })

  function isLoggin(){
    console.log("Usuários existe na base ?")
    
    const response = getUser()

    response.then( usuario =>{
      const result = usuario

      if(result == 'encontrei'){
        toast.success('Seja bem vindo!')
      }else{
        toast.error('tente novamente')
      }
    })

  }

  return (
      // aqui eu preciso usar o reacthookforms
    <form onSubmit={handleSubmit(isLoggin)} >
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
