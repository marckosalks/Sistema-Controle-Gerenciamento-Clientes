import ButtonLink from "../src/pages/components/ButtonLink";


export default function UsagePage() {
  return (
    <div className="flex flex-col gap-8 justify-center w-full h-screen items-center">
      <h2 className="text-5xl font-semibold">Está é a areá do usuário, Seja bem-vindo!❄️</h2>
      <ButtonLink label={"Sair"} link={"/"} />
    </div>
  )
}
