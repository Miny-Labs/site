import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { fadeUp } from '../lib/animations'

const HLS_URL =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export default function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(HLS_URL)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL
      video.addEventListener(
        'loadedmetadata',
        () => {
          video.play().catch(() => {})
        },
        { once: true },
      )
    }

    return () => {
      if (hls) hls.destroy()
    }
  }, [])

  return (
    <section
      id="manifesto"
      className="relative py-32 md:py-44 px-6 border-t border-border/30 overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.div {...fadeUp(0)}>
          <Logo outerSize="w-10 h-10" innerSize="w-5 h-5" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="mt-8 text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-1px] leading-[1.05]"
        >
          Start your{' '}
          <span className="font-serif italic font-normal">experiment</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
        >
          We pair with founders, funds, and protocol teams to ship what's just
          out of reach. Bring a thesis — we'll build it.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <motion.a
            href="mailto:akash@miny-labs.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-lg px-8 py-3.5 text-sm font-semibold"
          >
            Get in touch
          </motion.a>
          <motion.a
            href="https://github.com/Miny-Labs"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-lg px-8 py-3.5 text-foreground text-sm font-semibold"
          >
            View our work
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
