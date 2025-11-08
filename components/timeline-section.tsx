"use client"

import { Calendar, ArrowDown, ArrowUp } from "lucide-react"

const timeline = [
  {
    year: "2021-Present",
    title: "Senior Staff Software Engineer",
    company: "Meta Reality Labs",
    description:
      "Leading AI integration into everyday wearables including Ray-Ban Meta smart glasses. Driving rapid prototyping and technical innovation to push the boundaries of AI-powered wearable technology.",
    tech: ["Generative AI", "Wearables", "Computer Vision", "Mobile Software", "AI/ML"],
  },
  {
    year: "2013-2021",
    title: "Staff Software Engineer, RealSense",
    company: "Intel Corporation",
    description:
      "Research and development of new use cases for depth perception and CV/ML applications in AR/VR, robotics and mobile devices. Focus on efficient on-device processing and real-time performance optimization.",
    tech: ["Computer Vision", "Machine Learning", "AR/VR", "Robotics", "Depth Perception"],
  },
  {
    year: "2010-2013",
    title: "Senior Software Engineer, Mobile Computing",
    company: "Intel Corporation",
    description: "Post-Silicon validation and emulation for mobile computing platforms.",
    tech: ["Mobile Platforms", "Validation", "Emulation", "Hardware Testing"],
  },
  {
    year: "2004-2010",
    title: "Software Engineer, HPC & Server Networking",
    company: "Intel Corporation",
    description: "High performance computing and server networking systems development.",
    tech: ["HPC", "Server Networking", "Distributed Systems"],
  },
]

export function TimelineSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="font-mono text-2xl font-bold text-[color:var(--fg)] md:text-4xl">
        <span className="text-[color:var(--accent-blue)]">log</span>
        <span className="text-[color:var(--fg-soft)]">.</span>
        <span className="text-[color:var(--accent-yellow)]">timeline</span>
        <span className="text-[color:var(--fg-soft)]">()</span>
      </h2>

      <div className="space-y-4 pt-2">
        {timeline.map((entry, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-[color:var(--panel-border)] bg-gradient-to-r from-[color:var(--accent-blue)]/5 to-transparent p-4 transition-all hover:border-[color:var(--accent-blue)]/40 hover:shadow-[0_8px_32px_rgba(137,180,250,0.1)]"
          >
            <div className="absolute -left-3 top-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[color:var(--panel)] bg-[color:var(--accent-blue)]">
              <Calendar className="h-3 w-3 text-white" />
            </div>

            <div className="space-y-3 pl-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[color:var(--accent-blue)]/20 px-3 py-1 font-mono text-xs font-bold text-[color:var(--accent-blue)]">
                  {entry.year}
                </span>
                <h3 className="font-mono text-lg font-bold text-[color:var(--fg)]">{entry.title}</h3>
              </div>

              <p className="text-sm font-semibold text-[color:var(--accent-green)]">{entry.company}</p>

              <p className="text-pretty leading-relaxed text-[color:var(--fg-soft)]">{entry.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {entry.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-[color:var(--panel-border)] bg-black/20 px-2 py-1 font-mono text-xs text-[color:var(--fg-soft)] dark:bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 pt-4">
        <div
          onClick={() => scrollToSection('expertise')}
          className="cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
        >
          <ArrowUp className="h-6 w-6 text-[color:var(--accent-blue)]" />
        </div>
        <div
          onClick={() => scrollToSection('contact')}
          className="cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
        >
          <ArrowDown className="h-6 w-6 text-[color:var(--accent-blue)]" />
        </div>
      </div>
    </div>
  )
}
