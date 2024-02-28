import classNames from 'classnames';

export type SpanProps = {
  label: string
  className?: string
}

export default function Button({label, className, ...rest }: SpanProps) {
  const baseClasses = "pr-2 flex ali text-xl font-semibold"

  const mergedClasses = classNames(baseClasses, className)
  
  return (
    <span className={mergedClasses} {...rest}>{label}</span>
  )
}
