import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

const SOLUTION_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4'

const FEATURES = [
  {
    title: 'Protocol Research',
    body: 'We start with first principles — economic, cryptographic, adversarial — and prototype the primitives that make a thesis testable in production.',
  },
  {
    title: 'Agent Architectures',
    body: 'Multi-agent systems that read on-chain state, reason with frontier models, and act with cryptographic guarantees on what they touch.',
  },
  {
    title: 'Multi-chain Builds',
    body: 'EVM, Solana, Bitcoin L2s, Midnight, SKALE, Mantle, Creditcoin — we follow the work, not the chain. Every stack we ship is portable by design.',
  },
  {
    title: 'Adversarial Testing',
    body: 'We red-team our own systems before anyone else gets the chance. Threat models, MEV simulations, fuzzers — the unglamorous work that keeps things alive.',
  },
]

export default function Solution() {
  return (
    <section
      id="experiments"
      className="relative py-32 md:py-44 px-6 md:px-12 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6"
        >
          Solution
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-[-1px] mb-16 max-w-4xl leading-[1.1]"
        >
          The lab for{' '}
          <span className="font-serif italic font-normal">meaningful</span>{' '}
          crypto and AI primitives.
        </motion.h2>

        <motion.div
          {...fadeUp(0.2)}
          className="rounded-2xl overflow-hidden aspect-[3/1] mb-20"
        >
          <video
            src={SOLUTION_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(0.3 + i * 0.08)}>
              <h3 className="font-semibold text-base mb-3 text-foreground">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
