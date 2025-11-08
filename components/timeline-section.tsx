import React from "react"

export function TimelineSection() {
  const entries = [
    {
      title: "Senior Staff Software Engineer · Meta Reality Labs",
      period: "2020 – Present",
      description: `Leading research and development of AI-native and XR-integrated systems. 
Building multimodal perception, on-device intelligence, and human–AI interaction platforms.`,
    },
    {
      title: "Staff Software Engineer · Intel RealSense",
      period: "2017 – 2020",
      description: `Developed computer vision algorithms, sensor fusion frameworks, and 
scene perception systems powering Intel's RealSense technology.`,
    },
    {
      title: "Senior Software Engineer · Intel Mobile Communications",
      period: "2012 – 2017",
      description: `Designed embedded systems and firmware for mobile and sensor-integrated platforms, 
focusing on efficient data acquisition, low-power compute, and real-time signal processing.`,
    },
  ]

  return (
    <section className="relative space-y-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-blue)]/40 bg-black/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em]">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-blue)] animate-pulse" />
        async timeline()
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--fg)]">
        Career Journey
      </h2>

      <ul className="mt-8 space-y-8">
        {entries.map((entry, i) => (
          <li
            key={i}
            className="relative pl-8 border-l border-[color:var(--panel-border)]"
          >
            <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-[color:var(--accent-blue)] shadow-[0_0_12px_var(--accent-blue)]" />
            <h3 className="font-semibold text-lg text-[color:var(--fg)]">
              {entry.title}
            </h3>
            <p className="text-sm text-[color:var(--fg-soft)] mb-1">{entry.period}</p>
            <p className="text-[color:var(--fg-soft)] text-sm leading-relaxed">
              {entry.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
