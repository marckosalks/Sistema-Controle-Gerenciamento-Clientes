import CreateUserFom from "./CreateUserFom";


export default function Register() {
  return (
    <div className="flex flex-col gap-6 text-center h-screen justify-center w-full">
      <h2 className="pt-5 text-3xl font-bold">Comece criando uma conta ❄️</h2>
      <CreateUserFom/>
    </div>
  )
}
