"use client"
import { Linkedin, ArrowUp } from "lucide-react"

export function ContactSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <div className="space-y-4">
      <h2 className="font-mono text-2xl font-bold text-[color:var(--fg)] md:text-4xl">
        <span className="text-[color:var(--accent-blue)]">async</span>{" "}
        <span className="text-[color:var(--accent-yellow)]">connect</span>
        <span className="text-[color:var(--fg-soft)]">() {"{"}</span>
      </h2>

      <div className="space-y-6">
        <p className="text-pretty leading-relaxed text-[color:var(--fg-soft)]">
          Let's build something extraordinary together.
        </p>

        <p className="text-pretty leading-relaxed text-[color:var(--fg-soft)]">
          Whether you have a project in mind, want to collaborate on AI and wearables, or just want to chat about the
          future of human–AI interaction, I'd love to connect.
        </p>

        <div className="pt-4">
          <p className="mb-4 text-pretty leading-relaxed text-[color:var(--fg-soft)]">You can reach me here:</p>

          <div className="space-y-3">
            <a
              href="https://linkedin.com/in/daniel-piro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[color:var(--panel-border)] bg-black/20 px-6 py-4 text-[color:var(--fg)] transition-all hover:border-[color:var(--accent-blue)] hover:bg-[color:var(--accent-blue)]/10 dark:bg-white/5"
            >
              <Linkedin className="h-5 w-5 text-[color:var(--accent-blue)]" />
              <span className="font-mono">LinkedIn</span>
            </a>

            <a
              href="https://www.threads.net/@dpiro.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[color:var(--panel-border)] bg-black/20 px-6 py-4 text-[color:var(--fg)] transition-all hover:border-[color:var(--accent-purple)] hover:bg-[color:var(--accent-purple)]/10 dark:bg-white/5"
            >
              <svg
                className="h-5 w-5 text-[color:var(--accent-purple)]"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.186 3.995c-2.39 0-4.337 1.947-4.337 4.337v3.273c0 2.39 1.947 4.337 4.337 4.337s4.337-1.947 4.337-4.337V8.332c0-2.39-1.947-4.337-4.337-4.337zm2.697 7.61c0 1.487-1.21 2.697-2.697 2.697s-2.697-1.21-2.697-2.697V8.332c0-1.487 1.21-2.697 2.697-2.697s2.697 1.21 2.697 2.697v3.273z" />
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.4c-4.64 0-8.4-3.76-8.4-8.4S7.36 3.6 12 3.6s8.4 3.76 8.4 8.4-3.76 8.4-8.4 8.4z" />
              </svg>
              <span className="font-mono">Threads</span>
            </a>
          </div>
        </div>
      </div>

      <p className="font-mono text-[color:var(--fg-soft)]">{"}"}</p>

      <div className="flex justify-center pt-4">
        <div 
          onClick={() => scrollToSection('timeline')}
          className="cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
        >
          <ArrowUp className="h-6 w-6 text-[color:var(--accent-green)]" />
        </div>
      </div>
    </div>
  )
}
