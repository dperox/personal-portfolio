interface StatusBadgeProps {
  label: string
  color?: "blue" | "green" | "red" | "yellow"
}

export function StatusBadge({ label, color = "blue" }: StatusBadgeProps) {
  const colorMap = {
    blue: "var(--accent-blue)",
    green: "var(--accent-green)",
    red: "var(--accent-red)",
    yellow: "var(--accent-yellow)",
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--panel-border)] bg-black/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] dark:bg-white/5">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: colorMap[color] }} />
      {label}
    </span>
  )
}
