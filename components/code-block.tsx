import type { ReactNode } from "react"

interface CodeBlockProps {
  children: ReactNode
  language?: string
}

export function CodeBlock({ children, language = "typescript" }: CodeBlockProps) {
  const renderWithSyntax = (code: string, lang: string) => {
    if (lang === "json") {
      const highlighted = code
        .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:') // property names
        .replace(/:\s*"([^"]+)"/g, ': <span class="json-string">"$1"</span>') // string values
        .replace(/:\s*\[/g, ': <span class="json-bracket">[</span>')
        .replace(/\]/g, '<span class="json-bracket">]</span>')
        .replace(/{/g, '<span class="json-bracket">{</span>')
        .replace(/}/g, '<span class="json-bracket">}</span>')

      return <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    }
    return <code>{code}</code>
  }

  return (
    <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 dark:border-white/10 bg-black/40 dark:bg-black/40 p-4 text-xs font-mono text-foreground md:text-sm [&_.json-key]:text-blue-600 dark:[&_.json-key]:text-blue-400 [&_.json-string]:text-orange-600 dark:[&_.json-string]:text-orange-400 [&_.json-bracket]:text-foreground/80 dark:[&_.json-bracket]:text-foreground/80">
      {language && (
        <div className="mb-2 text-[10px] uppercase tracking-wider text-[color:var(--accent-blue)] opacity-60">
          {language}
        </div>
      )}
      {renderWithSyntax(String(children), language)}
    </pre>
  )
}
