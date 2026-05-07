import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const MISSION_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4'

const PARAGRAPH_1 =
  "We're building primitives where cryptography meets autonomy — where systems gain trust, agents gain agency, and every protocol becomes infrastructure worth using."
const HIGHLIGHT_1 = new Set(['cryptography', 'meets', 'autonomy'])

const PARAGRAPH_2 =
  'A lab where research, code, and capital flow together — with less noise, less ceremony, and more conviction in what gets shipped.'

function Word({
  word,
  index,
  total,
  progress,
  highlighted,
}: {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
  highlighted: boolean
}) {
  // Each word's reveal window covers ~30% of progress, staggered.
  // This means a word starts revealing well before the previous one finishes.
  const span = 1 / total
  const start = Math.max(0, index * span - span * 1.5)
  const end = Math.min(1, index * span + span * 1.2)
  const opacity = useTransform(progress, [start, end], [0.18, 1])

  const colorClass = highlighted ? 'text-foreground' : ''
  const colorStyle = highlighted
    ? undefined
    : { color: 'hsl(var(--hero-subtitle))' }

  return (
    <motion.span
      style={{ opacity, ...colorStyle }}
      className={`inline-block mr-[0.25em] ${colorClass}`}
    >
      {word}
    </motion.span>
  )
}

function ScrollParagraph({
  text,
  highlightedWords,
  className,
}: {
  text: string
  highlightedWords?: Set<string>
  className: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.55'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const cleaned = w.replace(/[^a-zA-Z]/g, '').toLowerCase()
        return (
          <Word
            key={i}
            word={w}
            index={i}
            total={words.length}
            progress={scrollYProgress}
            highlighted={highlightedWords?.has(cleaned) ?? false}
          />
        )
      })}
    </p>
  )
}

export default function Mission() {
  return (
    <section className="relative pt-0 pb-32 md:pb-44 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-full max-w-[800px] aspect-square rounded-3xl overflow-hidden mb-16 md:mb-24">
          <video
            src={MISSION_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>

        <ScrollParagraph
          text={PARAGRAPH_1}
          highlightedWords={HIGHLIGHT_1}
          className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-[1.25] text-center"
        />

        <ScrollParagraph
          text={PARAGRAPH_2}
          className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] text-center mt-10"
        />
      </div>
    </section>
  )
}
