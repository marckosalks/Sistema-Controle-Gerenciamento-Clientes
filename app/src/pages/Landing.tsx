import ButtonLink from "./components/ButtonLink";



export default function LandingPage() {
  return (
    <div className="flex flex-col w-full justify-center text-center gap-3 pt-4">
      <h1 className="text-5xl font-semibold">Alvo como a Neve❄️</h1>
      <p className="text-md">Mantenha sua casa limpa com os nossos serviços!</p>

      <div className="pt-4">
       <ButtonLink link="/register" label="Começar"/>
      </div>
    </div>
  )
}
