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
    href: '#',
    label: 'X',
    Icon: XIcon,
  },
  {
    href: '#',
    label: 'LinkedIn',
    Icon: LinkedinIcon,
  },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-28 py-4">
      <nav className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-foreground">
          <Logo />
          <span className="font-bold tracking-tight text-lg">miny-labs</span>
        </a>

        <ul className="hidden md:flex items-center gap-3 lg:gap-4 ml-8">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.label}
              className="flex items-center gap-3 lg:gap-4 text-sm"
            >
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <span aria-hidden="true" className="text-muted-foreground/50">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
