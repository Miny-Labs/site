import { useEffect, useState } from 'react'
import Logo from './Logo'
import { GithubIcon, XIcon, LinkedinIcon } from './BrandIcons'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'How We Build', href: '#how-we-build' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Experiments', href: '#experiments' },
]

const SOCIALS = [
  {
    href: 'https://github.com/Miny-Labs',
    label: 'GitHub',
    Icon: GithubIcon,
  },
  {
    href: 'https://x.com/akshmnd',
    label: 'X',
    Icon: XIcon,
  },
  {
    href: 'https://www.linkedin.com/in/akshmnd/',
    label: 'LinkedIn',
    Icon: LinkedinIcon,
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-md border-b border-border/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-3.5 max-w-[1600px] mx-auto gap-6">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-foreground shrink-0"
        >
          <Logo size={32} />
          <span className="font-bold tracking-tight text-base md:text-lg">
            Miny Labs
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-3 lg:gap-4 text-sm">
          {NAV_LINKS.map((link, i) => (
            <li key={link.label} className="flex items-center gap-3 lg:gap-4">
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <span aria-hidden="true" className="text-muted-foreground/40">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="liquid-glass w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
