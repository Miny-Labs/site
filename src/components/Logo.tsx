type LogoProps = {
  outerSize?: string
  innerSize?: string
  className?: string
}

export default function Logo({
  outerSize = 'w-7 h-7',
  innerSize = 'w-3 h-3',
  className = '',
}: LogoProps) {
  return (
    <div
      className={`${outerSize} rounded-full border-2 border-foreground/60 flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <div className={`${innerSize} rounded-full border border-foreground/60`} />
    </div>
  )
}
