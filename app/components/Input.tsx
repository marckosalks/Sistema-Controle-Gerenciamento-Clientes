import classNames from 'classnames';

type InputProps = {
  type: "text" | "password" | "email" | "number" | "date"
  className?: string
  register: any
  name: string
}

export default function Button({ className, type, name, register, ...rest }: InputProps) {
  const baseClasses = "rounded-md outline-none border  border-blue-500 p-1"

  const mergedClasses = classNames(baseClasses, className)
  
  return (
    <input className={ mergedClasses}  
    type={type}
    {...register(name)}
    {...rest} />
  )
}
