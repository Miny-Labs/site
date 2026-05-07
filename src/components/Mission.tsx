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
  baseSize,
}: {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
  highlighted: boolean
  baseSize: 'lg' | 'sm'
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.15, 1])

  const colorClass = highlighted
    ? 'text-foreground'
    : ''
  const colorStyle = highlighted
    ? undefined
    : { color: 'hsl(var(--hero-subtitle))' }
  const sizeClass =
    baseSize === 'lg'
      ? 'text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px]'
      : 'text-xl md:text-2xl lg:text-3xl font-medium'

  return (
    <motion.span
      style={{ opacity, ...colorStyle }}
      className={`inline-block mr-[0.25em] ${sizeClass} ${colorClass}`}
    >
      {word}
    </motion.span>
  )
}

export default function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  })

  const words1 = PARAGRAPH_1.split(' ')
  const words2 = PARAGRAPH_2.split(' ')
  const totalWords = words1.length + words2.length

  return (
    <section ref={ref} className="relative pt-0 pb-32 md:pb-44 px-6">
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

        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-[1.25] text-center">
          {words1.map((w, i) => {
            const cleaned = w.replace(/[^a-zA-Z]/g, '').toLowerCase()
            return (
              <Word
                key={`p1-${i}`}
                word={w}
                index={i}
                total={totalWords}
                progress={scrollYProgress}
                highlighted={HIGHLIGHT_1.has(cleaned)}
                baseSize="lg"
              />
            )
          })}
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] text-center mt-10">
          {words2.map((w, i) => (
            <Word
              key={`p2-${i}`}
              word={w}
              index={words1.length + i}
              total={totalWords}
              progress={scrollYProgress}
              highlighted={false}
              baseSize="sm"
            />
          ))}
        </p>
      </div>
    </section>
  )
}
