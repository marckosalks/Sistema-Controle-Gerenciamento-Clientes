'use client'

import * as yup from 'yup'

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Span from "@/app/components/Span";
import { useForm } from 'react-hook-form';

//Aqui vou resgatar as funcionalidades do useHookForm

export default function CreateUserFom() {

  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}
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
        <Span label="🧹Telefone:"/>
        <Input type="text" name='telefone' register={register} />
      </div>

      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Cep:"/>
        <Input type="text" name='cep' register={register}/>
      </div> 

      <Button  type="submit" label="Enviar"/>
    </form>
  )
}
