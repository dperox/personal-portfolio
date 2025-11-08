"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--panel)]/85 backdrop-blur-xl p-2 text-[color:var(--fg)] shadow-lg transition-all hover:scale-110 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        aria-label="Toggle theme"
        title={theme === "light" ? "Switch to dark" : "Switch to light"}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-[color:var(--accent-yellow)]" />
        ) : (
          <Moon className="h-5 w-5 text-[color:var(--accent-blue)]" />
        )}
      </button>
    </div>
  )
}
