'use client'

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Span from "@/app/components/Span";
import {useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchemaType} from "@/types/createUserSchema";
import { createUserSchema } from "../schemas/createUserSchema";
import { postUser } from "@/services/post";
import toast from "react-hot-toast";
import emailjs, { send } from "@emailjs/browser"
import { useRouter } from "next/navigation";

//send email quando a conta for criada
function HandleSendEmail(name: string,  email:string, password:string){
  const templateParams = {
    to_name: name,
    email: email,
    password: password
  }
  
  emailjs.send("service_4atnenl", 
  "template_5pzawrb",
  templateParams,
  "sMn5adwNxqI3_Vv-e" )
  .then((respose) => {
    console.log("EMAIL ENVIADO", respose.status, respose.text)
    toast.success("Meus parabéns, conta criada com sucesso!")
  }, (err)=>{
    console.log("ERRO:",err)
  }) 
}

export default function CreateUserFom() {
  const route = useRouter()
  //Aqui vou resgatar as funcionalidades do useHookForm
  const { 
    register,
    handleSubmit, 
    formState:{errors} } = useForm <CreateUserSchemaType>({
    resolver: zodResolver(createUserSchema)
  })
  
  //uma função para o handleSubmit
  function createUser(data:any){

    const formatData = {
      "name": data.nome,
      "email": data.email,
      "password": data.password,
      "phone": data.telefone,
      "zipcode": data.cep,
    }

    
    const response = postUser(formatData)
   
    response.then(test => {
      const result = test
      
      if(result === "success"){
        HandleSendEmail(formatData.name, formatData.email, formatData.password)
        
        route.push("/login")
      }else{
        toast.error("erro ao preencher o cadastro, tente novamente!")
      }
    })
     
  }

  return (
      <form onSubmit={handleSubmit(createUser)}
      className='flex flex-col gap-3 items-center'>
        
        <div className='flex flex-col  w-[30%] gap-2'>
          <Span label="🧹Nome:"/>
          <Input name="nome" type="text" register={register} />
          {errors.nome && <span className=" text-red-600">{errors.nome.message}</span>}
        </div>

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

        <div className='flex flex-col  w-[30%] gap-2'>
          <Span label="🧹Telefone:"/>
          <Input type="text" name='telefone' register={register} />
          {errors.telefone && <span className=" text-red-600">{errors.telefone.message}</span>}
        </div>

        <div className='flex flex-col  w-[30%] gap-2'>
          <Span label="🧹Cep:"/>
          <Input type="text" name='cep' register={register}/>
          {errors.cep && <span className=" text-red-600">{errors.cep.message}</span>}
        </div> 
          <Button  type="submit" label="Enviar"/>
      </form>
  )
}