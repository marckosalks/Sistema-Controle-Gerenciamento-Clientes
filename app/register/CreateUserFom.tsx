import Button from "@/app/components/Button";
import Input from "@/app/components/Input";

import Span from "@/app/components/Span";


export default function CreateUserFom() {
  return (
    <form className='flex flex-col gap-3 items-center'>
      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Nome:"/>
        <Input type="text" />
      </div>

      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Email:"/>
        <Input type="email" />
      </div>

      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Telefone:"/>
        <Input type="text" />
      </div>

      <div className='flex flex-col  w-[30%] gap-2'>
        <Span label="🧹Cep:"/>
        <Input type="text" />
      </div>

      <Button  type="submit" label="Enviar"/>
    </form>
  )
}
