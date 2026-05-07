type IconProps = {
  size?: number
  className?: string
}

const baseSvgProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 32 32',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true as const,
})

export function EthereumIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...baseSvgProps(size)} className={className} fill="currentColor">
      <path d="M16 3 L8 16.5 L16 21 L24 16.5 Z" opacity="0.85" />
      <path d="M16 3 L24 16.5 L16 21 Z" opacity="1" />
      <path d="M16 22.5 L8 18 L16 29 L24 18 Z" opacity="0.85" />
      <path d="M16 22.5 L24 18 L16 29 Z" opacity="1" />
    </svg>
  )
}

export function SolanaIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...baseSvgProps(size)} className={className} fill="currentColor">
      <path d="M7 9 L24 9 L26 7 L9 7 Z" />
      <path d="M7 17 L24 17 L26 15 L9 15 Z" />
      <path d="M7 25 L24 25 L26 23 L9 23 Z" />
    </svg>
  )
}

export function BitcoinIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...baseSvgProps(size)} className={className}>
      <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.5 8.5 L13.5 23.5 M16 8.5 L16 23.5 M11 11 L18.5 11 C20.5 11 21.5 12 21.5 13.5 C21.5 15 20.5 16 18.5 16 L11 16 M11 16 L19 16 C21 16 22.2 17 22.2 18.7 C22.2 20.5 21 21.5 19 21.5 L11 21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function PolygonIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...baseSvgProps(size)} className={className} fill="currentColor">
      <path d="M22 11.5 L19 9.7 L13 13.2 L13 17.5 L10 19.3 L7 17.5 L7 13.5 L10 11.7 L12 12.9 L12 10 L10 8.7 L4 12.2 L4 19.3 L10 22.7 L16 19.3 L16 14.7 L19 13.2 L22 14.7 L22 18.7 L19 20.5 L17 19.3 L17 22.2 L19 23.3 L25 19.8 L25 12.7 L22 11.5 Z" />
    </svg>
  )
}

export function ArbitrumIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...baseSvgProps(size)} className={className}>
      <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 7.5 L22.5 21 L20.2 22.5 L16 13.5 L11.8 22.5 L9.5 21 Z M16 18 L18 22.2"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AvalancheIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...baseSvgProps(size)} className={className}>
      <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 8 L23 22 L18 22 L16 18 L14 22 L9 22 Z M19 14.5 L22 19.5 L25 14.5 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BaseIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...baseSvgProps(size)} className={className}>
      <circle cx="16" cy="16" r="13.5" fill="currentColor" opacity="0.15" />
      <path
        d="M16 3 A13 13 0 0 1 16 29 L16 24 A8 8 0 0 0 16 8 Z"
        fill="currentColor"
      />
    </svg>
  )
}
