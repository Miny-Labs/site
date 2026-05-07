const LINKS = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: 'mailto:akash@miny-labs.com' },
]

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-28 border-t border-border/30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} miny-labs. All rights reserved.
        </p>
        <ul className="flex items-center gap-6">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
