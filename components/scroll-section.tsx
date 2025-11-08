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

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])
  const translateZ = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-150, 0, 0, -150])
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [15, 0, 0, -15])
  const rotateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-8, 0, 0, 8])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85])

  return (
    <section ref={ref} id={id} className="relative flex min-h-screen items-center justify-center py-20">
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
            className="rounded-3xl border border-[color:var(--panel-border)] bg-[color:var(--panel)]/85 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
