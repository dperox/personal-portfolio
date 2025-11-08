"use client"

import React from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[color:var(--fg)]">
          Daniel Piro
        </h1>
        <p className="text-2xl md:text-3xl text-[color:var(--fg-soft)] font-light">
          AI Engineer & XR Developer
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap gap-3"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-blue)]/40 bg-black/10 px-4 py-2 text-sm font-mono">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent-blue)] animate-pulse" />
          Artificial Intelligence
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-mauve)]/40 bg-black/10 px-4 py-2 text-sm font-mono">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent-mauve)] animate-pulse" />
          Extended Reality
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-green)]/40 bg-black/10 px-4 py-2 text-sm font-mono">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent-green)] animate-pulse" />
          Computer Vision
        </span>
      </motion.div>
    </section>
  )
}
