"use client"

import { StatusBadge } from "./status-badge"
import { ArrowDown, Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <div className="space-y-4">
      <StatusBadge label="Online · Daniel Piro" color="green" />

      <h1 className="font-mono text-3xl font-bold leading-tight text-[color:var(--fg)] md:text-5xl">
        <span className="text-[color:var(--accent-blue)]">function</span>{" "}
        <span className="text-[color:var(--accent-yellow)]">DanielPiro</span>
        <span className="text-[color:var(--fg-soft)]">() {"{"}</span>
      </h1>

      <div className="space-y-4 pl-6 text-base leading-relaxed text-[color:var(--fg-soft)] md:text-lg">
        <p>
          <span className="text-[color:var(--accent-green)]">return</span>{" "}
          <span className="font-semibold text-[color:var(--fg)]">Technologist, Inventor & Builder</span>
        </p>
        <p className="max-w-2xl text-pretty">
          I'm a technologist and builder passionate about creating at the intersection of software, hardware, and human experience.
        </p>
      </div>

      <p className="pl-6 font-mono text-[color:var(--fg-soft)]">{"}"}</p>

      <div className="flex items-center justify-end gap-4 pt-2">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="sm"
              className="gap-2 bg-[#238636] font-mono text-sm font-bold text-white hover:bg-[#2ea043] shadow-[0_0_20px_rgba(35,134,54,0.6)] hover:shadow-[0_0_25px_rgba(46,160,67,0.8)] transition-shadow duration-300"
            >
              <Play className="h-4 w-4" />
              Run
            </Button>
          </DialogTrigger>
          <DialogContent
            className="w-fit max-w-[90vw] bg-[color:var(--panel)]/95 p-4 backdrop-blur-xl md:p-4 
                       max-md:h-screen max-md:max-w-full max-md:w-screen max-md:p-0 max-md:m-0 max-md:rounded-none"
            showCloseButton={true}
          >
            <DialogTitle className="sr-only">Introduction Video</DialogTitle>
            <DialogDescription className="sr-only">
              Watch an introduction video demonstration
            </DialogDescription>
            <div className="relative overflow-hidden rounded-lg bg-black md:rounded-lg max-md:h-full max-md:rounded-none max-md:flex max-md:items-center max-md:justify-center">
              <video
                className="max-h-[70vh] w-auto md:max-h-[70vh] max-md:h-full max-md:w-full max-md:max-h-none"
                style={{ aspectRatio: '480/872' }}
                controls
                autoPlay
                playsInline
                preload="auto"
                onEnded={() => setIsOpen(false)}
              >
                <source src="/intro.mov" type="video/quicktime" />
                <source src="/intro.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
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

      <div className="flex justify-center pt-4">
        <div
          onClick={() => scrollToSection('about')}
          className="cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
        >
          <ArrowDown className="h-6 w-6 text-[color:var(--accent-blue)]" />
        </div>
      </div>
    </div>
  )
}
