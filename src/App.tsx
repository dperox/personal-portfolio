import React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { CodeGridBackground } from "@/components/code-grid-background"
import { ScrollSection } from "@/components/scroll-section"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { TimelineSection } from "@/components/timeline-section"
import { ContactSection } from "@/components/contact-section"

export default function App() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen">
        <CodeGridBackground />

        <ScrollSection>
          <HeroSection />
        </ScrollSection>

        <ScrollSection>
          <AboutSection />
        </ScrollSection>

        <ScrollSection>
          <ExpertiseSection />
        </ScrollSection>

        <ScrollSection>
          <TimelineSection />
        </ScrollSection>

        <ScrollSection>
          <ContactSection />
        </ScrollSection>

        <footer className="relative z-10 border-t border-[color:var(--panel-border)] bg-[color:var(--panel)]/50 py-8 text-center backdrop-blur-xl">
          <p className="font-mono text-sm text-[color:var(--fg-soft)]">© 2025 Daniel Piro</p>
        </footer>
      </main>
    </ThemeProvider>
  )
}
