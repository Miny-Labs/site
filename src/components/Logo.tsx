type LogoProps = {
  size?: number
  className?: string
}

export default function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Miny Labs"
      width={size}
      height={Math.round((size * 115) / 123)}
      className={className}
      style={{ display: 'block' }}
    />
  )
}
