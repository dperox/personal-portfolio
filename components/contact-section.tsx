"use client"

import React from "react"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section className="space-y-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-blue)]/40 bg-black/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em]">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-blue)] animate-pulse" />
        async contact()
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--fg)]">
        Get in Touch
      </h2>

      <p className="max-w-2xl text-[color:var(--fg-soft)]">
        Interested in collaborating on AI, XR, or computer vision projects? Feel free to reach out.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-4"
      >
        <a
          href="mailto:contact@danielpiro.dev"
          className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--accent-blue)]/40 bg-[color:var(--accent-blue)]/10 px-6 py-3 font-mono text-sm text-[color:var(--fg)] transition-all hover:bg-[color:var(--accent-blue)]/20 hover:shadow-lg hover:shadow-[color:var(--accent-blue)]/20"
        >
          Email
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--panel-border)] bg-[color:var(--panel)]/50 px-6 py-3 font-mono text-sm text-[color:var(--fg)] transition-all hover:border-[color:var(--accent-blue)]/50 hover:bg-[color:var(--panel)]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--panel-border)] bg-[color:var(--panel)]/50 px-6 py-3 font-mono text-sm text-[color:var(--fg)] transition-all hover:border-[color:var(--accent-blue)]/50 hover:bg-[color:var(--panel)]"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  )
}
