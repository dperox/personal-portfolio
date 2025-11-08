"use client"

import React from "react"
import { motion } from "framer-motion"

export function ScrollSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-32"
    >
      {children}
    </motion.section>
  )
}
