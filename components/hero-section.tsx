import { StatusBadge } from "./status-badge"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <div className="space-y-6">
      <StatusBadge label="Online · Daniel Piro" color="green" />

      <h1 className="font-mono text-3xl font-bold leading-tight text-[color:var(--fg)] md:text-5xl">
        <span className="text-[color:var(--accent-blue)]">function</span>{" "}
        <span className="text-[color:var(--accent-yellow)]">DanielPiro</span>
        <span className="text-[color:var(--fg-soft)]">() {"{"}</span>
      </h1>

      <div className="space-y-4 pl-6 text-base leading-relaxed text-[color:var(--fg-soft)] md:text-lg">
        <p>
          <span className="text-[color:var(--accent-green)]">return</span>{" "}
          <span className="font-semibold text-[color:var(--fg)]">Technical Lead @ Meta | AI Wearables Integration</span>
        </p>
        <p className="max-w-2xl text-pretty">
          Leading the integration of Generative AI into next-generation wearables at Meta Reality Labs. Building
          socially intelligent, AI-driven experiences that enhance how people connect and communicate.
        </p>
      </div>

      <p className="pl-6 font-mono text-[color:var(--fg-soft)]">{"}"}</p>

      <div className="flex items-center gap-4 pt-4">
        <div className="flex -space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--panel)] bg-[color:var(--accent-blue)] font-mono text-sm font-bold text-white">
            AI
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--panel)] bg-[color:var(--accent-green)] font-mono text-sm font-bold text-white">
            AR
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--panel)] bg-[color:var(--accent-yellow)] font-mono text-sm font-bold text-white">
            CV
          </div>
        </div>
        <div className="text-sm text-[color:var(--fg-soft)]">Generative AI · Wearables · Computer Vision</div>
      </div>

      <div className="flex animate-bounce justify-center pt-8">
        <ArrowDown className="h-6 w-6 text-[color:var(--accent-blue)]" />
      </div>
    </div>
  )
}
