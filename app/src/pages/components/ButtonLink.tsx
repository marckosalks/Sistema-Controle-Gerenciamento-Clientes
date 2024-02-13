import Link from "next/link"

type ButtonLinkProps = {
  label: string
  link: string
}

export default function Button({label, link }: ButtonLinkProps) {
  return (
    <Link className="bg-[#caf0f8] text-zinc-500 w-24 rounded-md p-3 text-center hover:transition-all hover:bg-[#e2eafc]" href={link}>{label}</Link>
  )
}
