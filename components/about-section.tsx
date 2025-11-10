"use client"

import { CodeBlock } from "./code-block"
import { ArrowDown, ArrowUp } from "lucide-react"

export function AboutSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <div className="space-y-4">
      <h2 className="font-mono text-2xl font-bold text-[color:var(--fg)] md:text-4xl">
        <span className="text-[color:var(--accent-blue)]">const</span>{" "}
        <span className="text-[color:var(--accent-yellow)]">about</span> ={" "}
        <span className="text-[color:var(--fg-soft)]">{"{"}</span>
      </h2>

      <CodeBlock language="json">
        {`{
  "location": "Washington DC-Baltimore Area",
  "experience": "Nearly two decades in engineering, research, and applied innovation",
  "focus": [
    "Generative AI Integration",
    "AI-Powered Wearables",
    "Physical AI",
    "Computer Vision & ML",
    "Real-Time Systems",
    "Human-AI Interaction"
  ],
  "current_work": [
    "Ray-Ban Meta Smart Glasses",
    "Next-Gen Wearable Devices",
    "Rapid Prototyping at Meta Reality Labs"
  ]
}`}
      </CodeBlock>

      <div className="space-y-4 pt-2">
        <p className="text-base leading-relaxed text-[color:var(--fg-soft)]">
          My work spans AI, full-stack development, and device integration, focusing on how intelligent systems can feel natural, intuitive, and empowering.
        </p>
        <p className="text-base leading-relaxed text-[color:var(--fg-soft)]">
          With a background in rapid prototyping and system architecture, I enjoy transforming abstract ideas into tangible, functional products that connect people and technology in meaningful ways.
        </p>
        <p className="text-base leading-relaxed text-[color:var(--fg-soft)]">
          Above all, I believe innovation should serve curiosity — and that the best technology is built with both precision and imagination.
        </p>
      </div>

      <p className="font-mono text-[color:var(--fg-soft)]">{"}"}</p>

      <div className="flex justify-center gap-4 pt-4">
        <div 
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
        >
          <ArrowUp className="h-6 w-6 text-[color:var(--accent-green)]" />
        </div>
        <div 
          onClick={() => scrollToSection('expertise')}
          className="cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
        >
          <ArrowDown className="h-6 w-6 text-[color:var(--accent-green)]" />
        </div>
      </div>
    </div>
  )
}
