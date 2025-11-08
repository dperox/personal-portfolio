"use client"

import React from "react"
import { motion } from "framer-motion"

const expertiseAreas = [
  {
    title: "Artificial Intelligence",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP"],
    color: "var(--accent-blue)",
  },
  {
    title: "Extended Reality",
    skills: ["AR/VR Development", "3D Graphics", "Spatial Computing", "Real-time Rendering"],
    color: "var(--accent-mauve)",
  },
  {
    title: "Computer Vision",
    skills: ["Object Detection", "Scene Understanding", "Depth Sensing", "Image Processing"],
    color: "var(--accent-green)",
  },
]

export function ExpertiseSection() {
  return (
    <section className="space-y-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-blue)]/40 bg-black/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em]">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-blue)] animate-pulse" />
        async expertise()
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--fg)]">
        Areas of Expertise
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel)]/50 p-6 backdrop-blur-sm transition-all hover:border-[color:var(--accent-blue)]/50 hover:shadow-lg hover:shadow-[color:var(--accent-blue)]/10"
          >
            <h3 className="mb-4 text-xl font-semibold text-[color:var(--fg)]">
              {area.title}
            </h3>
            <ul className="space-y-2">
              {area.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-[color:var(--fg-soft)]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: area.color }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
