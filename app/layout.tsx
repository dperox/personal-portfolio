import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Piro | Software Engineer",
  description: "Portfolio of Daniel Piro - Software Engineer building modern web experiences with Next.js, React, and TypeScript",
  metadataBase: new URL("https://danielpiro.com"),
  keywords: ["Daniel Piro", "Software Engineer", "Web Developer", "Next.js", "React", "TypeScript", "Full-Stack"],
  authors: [{ name: "Daniel Piro" }],
  creator: "Daniel Piro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielpiro.com",
    title: "Daniel Piro | Software Engineer",
    description: "Portfolio of Daniel Piro - Software Engineer building modern web experiences",
    siteName: "Daniel Piro Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Daniel Piro - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Piro | Software Engineer",
    description: "Portfolio of Daniel Piro - Software Engineer building modern web experiences",
    images: ["/og-image.svg"],
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
