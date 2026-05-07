import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Globe, Mail } from 'lucide-react'
import { GithubIcon, XIcon } from './BrandIcons'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

function animateOpacity(
  el: HTMLVideoElement,
  from: number,
  to: number,
  durationMs: number,
) {
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs)
    el.style.opacity = String(from + (to - from) * t)
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.style.opacity = '0'

    const onCanPlay = () => {
      video.play().catch(() => {})
      animateOpacity(video, 0, 1, 500)
    }

    const onTimeUpdate = () => {
      const remaining = video.duration - video.currentTime
      if (
        !Number.isNaN(remaining) &&
        remaining <= 0.55 &&
        video.dataset.fading !== 'out'
      ) {
        video.dataset.fading = 'out'
        animateOpacity(video, parseFloat(video.style.opacity || '1'), 0, 500)
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      delete video.dataset.fading
      window.setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        animateOpacity(video, 0, 1, 500)
      }, 100)
    }

    video.addEventListener('canplay', onCanPlay, { once: true })
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-black">
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 text-white">
              <Globe size={20} />
              <span className="font-semibold text-lg tracking-tight">
                miny-labs
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8 ml-10">
              <a
                href="#about"
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                Lab
              </a>
              <a
                href="#work"
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                Work
              </a>
              <a
                href="#manifesto"
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                Manifesto
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="text-white text-sm font-medium hidden sm:inline"
            >
              Contact
            </a>
            <a
              href="mailto:hello@miny-labs.dev"
              className="liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[12%] md:-translate-y-[20%]">
        <h1 className="font-serif-display text-white tracking-tight whitespace-nowrap text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">
          Build the <em className="font-serif-italic">frontier</em>.
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl w-full liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3"
        >
          {submitted ? (
            <p className="flex-1 text-white text-sm py-2">
              Thanks — we'll be in touch.
            </p>
          ) : (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm py-2"
            />
          )}
          <button
            type="submit"
            aria-label="Subscribe"
            className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </form>

        <p className="mt-6 max-w-md text-white/70 text-sm leading-relaxed px-4">
          Drop your email to follow what we're building. New experiments,
          protocol notes, and agent demos — straight from the lab, no noise.
        </p>

        <a
          href="#manifesto"
          className="mt-8 liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Read the manifesto
        </a>
      </div>

      {/* Social icons footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="https://github.com/Miny-Labs"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <GithubIcon size={20} />
        </a>
        <a
          href="#"
          aria-label="X"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <XIcon size={20} />
        </a>
        <a
          href="mailto:hello@miny-labs.dev"
          aria-label="Email"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  )
}
