import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Piro | Technologist, Inventor & Builder",
  description: "Technical Lead at Meta Reality Labs, integrating Generative AI into next-generation wearables including Ray-Ban Meta smart glasses",
  metadataBase: new URL("https://danielpiro.com"),
  keywords: ["Daniel Piro", "Meta", "Technical Lead", "AI Wearables", "Generative AI", "Computer Vision", "AR/VR", "Ray-Ban Meta"],
  authors: [{ name: "Daniel Piro" }],
  creator: "Daniel Piro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielpiro.com",
    title: "Daniel Piro | Technologist, Inventor & Builder",
    description: "Leading AI integration into next-generation wearables at Meta Reality Labs. Building socially intelligent, AI-driven experiences.",
    siteName: "Daniel Piro Portfolio",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Daniel Piro - Technologist, Inventor & Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Piro | Technologist, Inventor & Builder",
    description: "Leading AI integration into next-generation wearables at Meta Reality Labs",
    images: ["/og-image-v2.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/icon-dark-32x32.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
