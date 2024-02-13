import classNames from 'classnames';

type ButtonProps = {
  label: string
  type: "button" | "submit" | "reset" 
  className?: string
}

export default function Button({label, className, ...rest }: ButtonProps) {
  const baseClasses = "bg-[#caf0f8] text-zinc-500 w-32 rounded-md p-2 text-center hover:transition-all hover:bg-[#e2eafc]"

  const mergedClasses = classNames(baseClasses, className)
  
  return (
    <button className={mergedClasses} {...rest}>{label}</button>
  )
}
