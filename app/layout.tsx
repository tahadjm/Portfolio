import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Djemili Taha Abdelwadoud - Full Stack Developer",
  description:
    "Portfolio of Djemili Taha Abdelwadoud, Full Stack Developer and Computer Science Student specializing in Next.js, TypeScript, and modern web technologies.",
  keywords: "Full Stack Developer, Next.js, TypeScript, React, Web Development, Computer Science",
  authors: [{ name: "Djemili Taha Abdelwadoud" }],
  openGraph: {
    title: "Djemili Taha Abdelwadoud - Full Stack Developer",
    description: "Portfolio of Djemili Taha Abdelwadoud, Full Stack Developer and Computer Science Student",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
