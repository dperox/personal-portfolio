"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ScrollSectionProps {
  children: React.ReactNode
  id?: string
}

export function ScrollSection({ children, id }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [400, 0, 0, -400])
  const translateZ = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-500, 0, 0, -500])
  const rotateX = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [35, 0, 0, -35])
  const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-20, 0, 0, 20])
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.6, 1, 1, 0.6])
  const blur = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [10, 0, 0, 10], { clamp: false })
  const filter = useTransform(blur, (value) => `blur(${value}px)`)

  return (
    <section ref={ref} id={id} className="relative flex min-h-screen items-center justify-center py-4 snap-start snap-always" style={{ scrollMarginTop: '0px' }}>
      <div
        className="pointer-events-none relative flex h-full w-full items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          style={{
            opacity,
            translateY,
            translateZ,
            rotateX,
            rotateY,
            scale,
            filter,
            transformStyle: "preserve-3d",
          }}
          className="pointer-events-auto w-full max-w-5xl px-6"
        >
          <motion.div
            animate={{
              translateY: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="w-full rounded-3xl border border-[color:var(--panel-border)] bg-[color:var(--panel)]/85 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-6"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
