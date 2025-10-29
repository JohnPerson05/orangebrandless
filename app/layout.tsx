import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Orange Brandless - Unfiltered. Original. Unstoppable.",
  description: "Join the Orange Brandless crew. Unfiltered, original, and unstoppable content and community.",
  generator: "v0.app",
  openGraph: {
    title: "Orange Brandless",
    description: "Unfiltered. Original. Unstoppable.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRANDLESS%20PFP-black-aG4ZU3wqXFKfs6dNLQUAim6EQCPLhp.jpg",
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
