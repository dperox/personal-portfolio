import { CodeBlock } from "./code-block"
import { MapPin, Heart, Brain } from "lucide-react"

export function AboutSection() {
  return (
    <div className="space-y-6">
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

      <div className="grid gap-6 pt-4 md:grid-cols-3">
        <div className="space-y-3 rounded-2xl border border-[color:var(--panel-border)] bg-gradient-to-br from-[color:var(--accent-blue)]/10 to-transparent p-6">
          <MapPin className="h-8 w-8 text-[color:var(--accent-blue)]" />
          <h3 className="font-mono text-lg font-semibold text-[color:var(--fg)]">Location</h3>
          <p className="text-sm leading-relaxed text-[color:var(--fg-soft)]">
            Based in Washington DC-Baltimore Area, working on Meta's global platforms.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl border border-[color:var(--panel-border)] bg-gradient-to-br from-[color:var(--accent-green)]/10 to-transparent p-6">
          <Brain className="h-8 w-8 text-[color:var(--accent-green)]" />
          <h3 className="font-mono text-lg font-semibold text-[color:var(--fg)]">Philosophy</h3>
          <p className="text-sm leading-relaxed text-[color:var(--fg-soft)]">
            Building socially intelligent experiences that enhance connection, communication, and collaboration.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl border border-[color:var(--panel-border)] bg-gradient-to-br from-[color:var(--accent-red)]/10 to-transparent p-6">
          <Heart className="h-8 w-8 text-[color:var(--accent-red)]" />
          <h3 className="font-mono text-lg font-semibold text-[color:var(--fg)]">Passion</h3>
          <p className="text-sm leading-relaxed text-[color:var(--fg-soft)]">
            Rapidly exploring, validating, and shipping AI-powered features from prototype to production.
          </p>
        </div>
      </div>

      <p className="font-mono text-[color:var(--fg-soft)]">{"}"}</p>
    </div>
  )
}
