import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NZ Casino - Best Online Casinos in New Zealand",
  description:
    "Find the best online casinos in New Zealand with exclusive bonuses, expert reviews, and reliable ratings.",
  robots: "noindex, nofollow",
  icons: {
  icon: [
    { url: "/logos/favicon_nzcasino.webp", type: "image/webp", sizes: "32x32" },
    
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
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
