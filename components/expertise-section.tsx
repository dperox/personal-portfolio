"use client"

import { Cpu, Glasses, Zap, Code, Layers, Sparkles, Bot, ArrowDown, ArrowUp } from "lucide-react"

const skills = [
  {
    icon: Cpu,
    title: "Generative AI",
    items: ["LLM Integration", "ML/AI Systems", "Computer Vision", "NLP & Contextual Intelligence"],
    color: "blue",
  },
  {
    icon: Glasses,
    title: "Wearable Computing",
    items: ["Ray-Ban Meta Glasses", "AR/VR Headsets", "Smart Devices", "Real-Time Systems"],
    color: "green",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    items: ["Experimental Prototypes", "User-Facing Features", "Systems Integration", "Innovation Pipeline"],
    color: "yellow",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    items: ["Mobile & Desktop", "System Software", "Game Engines (Unity)", "Cross-Platform Apps"],
    color: "red",
  },
  {
    icon: Layers,
    title: "Computer Vision",
    items: ["CV / ML Algorithms", "Sensor Fusion", "Scene Understanding", "Vision-Based Applications"],
    color: "blue",
  },
  {
    icon: Bot,
    title: "Robotics",
    items: ["Physical AI", "Simulation", "Hardware Prototyping", "Low-Level Software"],
    color: "red",
  },
  {
    icon: Sparkles,
    title: "Human-AI Interaction",
    items: ["Social Intelligence", "Personal Assistants", "HCI Design", "User Experience"],
    color: "green",
  },
]

const colorMap = {
  blue: "var(--accent-blue)",
  green: "var(--accent-green)",
  yellow: "var(--accent-yellow)",
  red: "var(--accent-red)",
}

export function ExpertiseSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
  return (
    <div className="space-y-6">
      <h2 className="font-mono text-2xl font-bold text-[color:var(--fg)] md:text-4xl">
        <span className="text-[color:var(--accent-blue)]">const</span>{" "}
        <span className="text-[color:var(--accent-yellow)]">skills</span> ={" "}
        <span className="text-[color:var(--fg-soft)]">{"["}</span>
      </h2>

      <div className="grid gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          const accentColor = colorMap[skill.color as keyof typeof colorMap]

          return (
            <div
              key={index}
              className="group space-y-4 rounded-2xl border border-[color:var(--panel-border)] bg-gradient-to-br from-black/20 to-transparent p-6 transition-all hover:scale-105 hover:border-opacity-60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:from-white/5"
              style={{
                borderColor: accentColor,
                borderOpacity: 0.2,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${accentColor}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: accentColor }} />
                </div>
                <h3 className="font-mono text-base font-semibold text-[color:var(--fg)]">{skill.title}</h3>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[color:var(--fg-soft)]">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <p className="font-mono text-[color:var(--fg-soft)]">{"]"}</p>

      <div className="flex justify-center gap-4 pt-8">
        <div 
          onClick={() => scrollToSection('about')}
          className="cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
        >
          <ArrowUp className="h-6 w-6 text-[color:var(--accent-yellow)]" />
        </div>
        <div 
          onClick={() => scrollToSection('timeline')}
          className="animate-bounce cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
        >
          <ArrowDown className="h-6 w-6 text-[color:var(--accent-yellow)]" />
        </div>
      </div>
    </div>
  )
}
