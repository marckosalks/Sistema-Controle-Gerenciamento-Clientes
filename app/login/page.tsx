import LoginForm from "./LoginForm";


export default function page() {
  return (
    <div className="flex flex-col gap-6 text-center h-screen w-full justify-center">
      <h2 className="pt-10 text-3xl font-bold items-center">Faça Seu login ❄️</h2>
      <LoginForm/>
    </div>
    
  )
}
