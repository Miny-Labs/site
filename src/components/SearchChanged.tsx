import { motion } from 'framer-motion'
import { ShieldCheck, BrainCircuit, Network } from 'lucide-react'
import { fadeUp } from '../lib/animations'

const PARADIGMS = [
  {
    Icon: ShieldCheck,
    title: 'Zero-Knowledge',
    body: 'Verifiable privacy is no longer optional. Identity, compliance, and credit are moving on-chain — and proofs are how trust scales.',
  },
  {
    Icon: BrainCircuit,
    title: 'Autonomous Agents',
    body: 'Frontier models can now read, reason, and transact. The interesting question is what they should be allowed to do — and how to constrain them.',
  },
  {
    Icon: Network,
    title: 'Multi-chain',
    body: 'No single chain wins. Real protocols live across ecosystems — and the teams that ship fastest are the ones who treat chains as primitives, not religions.',
  },
]

export default function SearchChanged() {
  return (
    <section
      id="how-we-build"
      className="relative px-6 md:px-12 pt-52 md:pt-64 pb-6 md:pb-9 max-w-7xl mx-auto"
    >
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-center text-foreground leading-[1.05]"
      >
        Crypto has{' '}
        <span className="font-serif italic font-normal">evolved.</span>
        <br />
        Have you?
      </motion.h2>

      <motion.p
        {...fadeUp(0.1)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto mt-8 mb-24 text-center"
      >
        The last cycle was about exchanges, AMMs, and yield. The next one is
        about privacy proofs, autonomous agents, and protocols that compose
        across every chain. We build for that one.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {PARADIGMS.map(({ Icon, title, body }, i) => (
          <motion.div
            key={title}
            {...fadeUp(0.2 + i * 0.1)}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[200px] h-[200px] rounded-3xl liquid-glass flex items-center justify-center mb-8">
              <Icon
                size={88}
                strokeWidth={1.2}
                className="text-foreground/90"
              />
            </div>
            <h3 className="font-semibold text-base mb-2 text-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        {...fadeUp(0.4)}
        className="text-muted-foreground text-sm text-center"
      >
        If you don't ship the next primitive, someone else will.
      </motion.p>
    </section>
  )
}
