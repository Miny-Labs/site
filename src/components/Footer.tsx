import { Mail, Globe } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-white/5 px-6 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">
        <div>
          <h3 className="font-serif-display text-5xl md:text-6xl text-white tracking-tight leading-none">
            Let's build <em className="font-serif-italic">together</em>.
          </h3>
          <p className="mt-4 text-white/50 text-sm max-w-md leading-relaxed">
            Have a wild idea at the edge of crypto and AI? We probably want to
            hear about it.
          </p>
          <a
            href="mailto:hello@miny-labs.dev"
            className="inline-flex items-center gap-2 mt-6 liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <Mail size={16} />
            hello@miny-labs.dev
          </a>
        </div>

        <div className="flex flex-col gap-6 text-sm">
          <div className="flex items-center gap-3 text-white/60">
            <Globe size={16} />
            <span>miny-labs · {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Miny-Labs"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="mailto:hello@miny-labs.dev"
              aria-label="Email"
              className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-white/30 text-xs tracking-widest uppercase">
            Experiments at the edge.
          </p>
        </div>
      </div>
    </footer>
  )
}
