import { CodeGridBackground } from "@/components/code-grid-background"
import { ScrollSection } from "@/components/scroll-section"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { TimelineSection } from "@/components/timeline-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative min-h-screen snap-y snap-mandatory overflow-y-scroll">
      <CodeGridBackground />

      <ScrollSection id="hero">
        <HeroSection />
      </ScrollSection>

      <ScrollSection id="about">
        <AboutSection />
      </ScrollSection>

      <ScrollSection id="expertise">
        <ExpertiseSection />
      </ScrollSection>

      <ScrollSection id="timeline">
        <TimelineSection />
      </ScrollSection>

      <ScrollSection id="contact">
        <ContactSection />
      </ScrollSection>

      <footer className="relative z-10 border-t border-[color:var(--panel-border)] bg-[color:var(--panel)]/50 py-8 text-center backdrop-blur-xl">
        <p className="font-mono text-sm text-[color:var(--fg-soft)]">© 2025 Daniel Piro</p>
      </footer>
    </main>
  )
}
