import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from '../lib/animations'
import {
  EthereumIcon,
  SolanaIcon,
  BitcoinIcon,
  PolygonIcon,
  ArbitrumIcon,
  AvalancheIcon,
} from './ChainIcons'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4'

const CHAINS = [
  { name: 'Ethereum', Icon: EthereumIcon },
  { name: 'Bitcoin', Icon: BitcoinIcon },
  { name: 'Solana', Icon: SolanaIcon },
  { name: 'Polygon', Icon: PolygonIcon },
  { name: 'Arbitrum', Icon: ArbitrumIcon },
  { name: 'Avalanche', Icon: AvalancheIcon },
]

export default function Hero() {
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

      {/* Top scrim under navbar to keep links readable */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent pointer-events-none z-[1]" />

      {/* Soft radial darkening behind content for legibility */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0) 75%)',
        }}
      />

      {/* Bottom fade to black, taller than original spec for stronger blend */}
      <div className="absolute inset-x-0 bottom-0 h-[55vh] bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 md:pt-36 pb-32 max-w-5xl mx-auto flex-1 justify-center">
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 mb-10 liquid-glass rounded-full px-4 py-2"
        >
          <div className="flex items-center gap-2 text-foreground/85">
            {CHAINS.map(({ name, Icon }) => (
              <span
                key={name}
                title={name}
                className="text-foreground/85"
                aria-label={name}
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
          <span className="w-px h-4 bg-foreground/20" />
          <p className="text-foreground/85 text-xs sm:text-sm font-medium tracking-wide">
            Building across 12+ chains
          </p>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground leading-[1.05]"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}
        >
          Engineer the{' '}
          <span className="font-serif italic font-normal">Frontier</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-8 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          style={{
            color: 'hsl(var(--hero-subtitle))',
            textShadow:
              '0 1px 2px rgba(0,0,0,0.9), 0 2px 16px rgba(0,0,0,0.7)',
          }}
        >
          A small lab building bleeding-edge experiments at the intersection of
          blockchain and autonomous agents — across every chain that matters.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <motion.a
            href="mailto:akash@miny-labs.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide inline-flex items-center gap-2"
          >
            Get in touch
            <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#experiments"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-full px-8 py-3.5 text-foreground text-sm font-semibold tracking-wide"
          >
            Explore the lab
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
