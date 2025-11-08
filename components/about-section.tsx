import React from "react"

export function AboutSection() {
  return (
    <section className="space-y-6 text-[color:var(--fg-soft)]">
      <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-blue)]/40 bg-black/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em]">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-blue)] animate-pulse" />
        async about()
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--fg)]">
        Senior Staff Software Engineer · Meta Reality Labs
      </h2>

      <p className="max-w-2xl text-[color:var(--fg-soft)]">
        Daniel Piro is a Senior Staff Software Engineer at Meta Reality Labs, researching
        and developing intelligent systems at the intersection of AI, XR, and human–computer
        interaction. His work blends perception, learning, and design to create technologies
        that extend human capability.
      </p>

      <p className="max-w-2xl text-[color:var(--fg-soft)]">
        Previously, Daniel led key vision and sensing initiatives at Intel — contributing to
        RealSense's depth and scene understanding stack, and before that, engineering mobile
        perception systems at Intel Mobile Communications. With over a decade of hands-on
        experience in AI systems, embedded hardware, and multimodal computing, he builds
        prototypes that bridge human intuition and machine intelligence.
      </p>
    </section>
  )
}
