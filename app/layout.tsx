import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Scholarship Guide 2025 - Government Scholarships & Application Help",
  description:
    "Complete guide to Indian government scholarships, state schemes, and educational funding. Get step-by-step application help for NSP, UP, Rajasthan, MP scholarships and more.",
  keywords:
    "scholarship, government scholarship, NSP, UP scholarship, student financial aid, education funding, merit scholarship",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
