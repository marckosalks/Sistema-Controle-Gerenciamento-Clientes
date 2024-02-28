import LoginForm from "./LoginForm";


export default function page() {
  return (
    <div className="flex flex-col gap-6 text-center">
      <h2 className="pt-5 text-3xl font-bold">Faça Seu login ❄️</h2>
      <LoginForm/>
    </div>
    
  )
}
