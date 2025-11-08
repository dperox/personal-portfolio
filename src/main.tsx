import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// global styles (Tailwind v4, Catppuccin, shadcn tokens)
import "../app/globals.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
