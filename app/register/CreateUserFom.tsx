'use client'

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Span from "@/app/components/Span";
import { useState } from "react";
import {useForm } from 'react-hook-form';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

// criando schema para validação do formulário

const createUserSchema = z.object({
  nome: z.string().nonempty("O nome é obrigatório"),
  email: z.string().nonempty("O e-mail é obrigatório").email(),
  password: z.string().nonempty("A senha inválida"),
  telefone: z.string().nonempty("O telefone é obrigatório"),
  cep: z.string().nonempty("O cep é obrigatório")
})

export default function CreateUserFom() {
  //estado para exibir conteudo do formulário
  const [ outPut, setOutPut] = useState('')
  
  //Aqui vou resgatar as funcionalidades do useHookForm
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(createUserSchema)
  })
  
  console.log(formState.errors)

  //uma função para o handleSubmit
  function createUser(data:any){
    setOutPut(JSON.stringify(data, null, 2))
  }


  return (
    <main >
      <form onSubmit={handleSubmit(createUser)}
      className='flex flex-col gap-3 items-center'>
        
      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Nome:"/>
        <Input name="nome" type="text" register={register} />
      </div>

      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Email:"/>
        <Input name='email' type="email" register={register}/>
      </div>

      <div className='flex flex-col  w-[30%] gap-2'>
        <div className="flex items-center align-bottom justify-between">
          <Span label="🧹Senha:"/>
          <p className="text-xs font-bold">Senha no mínimo com 8 caracters</p>
        </div>
        <Input name='password' type="password" register={register}/>
      </div>

      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Telefone:"/>
        <Input type="text" name='telefone' register={register} />
      </div>

      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Cep:"/>
        <Input type="text" name='cep' register={register}/>
      </div> 
        <Button  type="submit" label="Enviar"/>
      </form>

      <div className=" flex flex-col gap-4" >
        {outPut}
      </div>
    </main>
  )
}

