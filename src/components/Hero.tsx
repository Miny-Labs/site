import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4'

const AVATARS = [
  'linear-gradient(135deg, #2a2a2a, #4a4a4a)',
  'linear-gradient(135deg, #1f1f1f, #555555)',
  'linear-gradient(135deg, #333333, #666666)',
]

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start"
    >
      <video
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-32 pb-32 max-w-5xl mx-auto flex-1 justify-center">
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {AVATARS.map((bg, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-background"
                style={{ background: bg }}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            Building across 12+ chains
          </p>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground leading-[1.05]"
        >
          Engineer the{' '}
          <span className="font-serif italic font-normal">Frontier</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-8 text-lg max-w-2xl"
          style={{ color: 'hsl(var(--hero-subtitle))' }}
        >
          We're a small lab building bleeding-edge experiments at the
          intersection of cryptography and autonomous agents — across every
          chain that matters.
        </motion.p>

        <motion.form
          {...fadeUp(0.3)}
          onSubmit={onSubmit}
          className="mt-10 liquid-glass rounded-full p-2 max-w-lg w-full flex items-center gap-2"
        >
          {submitted ? (
            <p className="flex-1 text-foreground text-sm py-3 px-4 text-left">
              Thanks — we'll be in touch.
            </p>
          ) : (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm py-3 px-4"
            />
          )}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-full px-8 py-3 text-xs font-semibold tracking-[2px] uppercase"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
