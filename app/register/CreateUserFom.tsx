'use client'

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Span from "@/app/components/Span";
import {useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchemaType} from "@/types/createUserSchema";
import { createUserSchema } from "../schemas/createUserSchema";
import { postUser } from "@/services/post";

export default function CreateUserFom() {
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
    postUser(formatData)

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