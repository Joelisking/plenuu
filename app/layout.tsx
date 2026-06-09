import type { Metadata } from "next"
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/site/smooth-scroll"
import { CartProvider } from "@/lib/cart"
import { cn } from "@/lib/utils"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://plenuu.com"),
  title: {
    default: "Plenuu — Shop everything, delivered across Ghana & the USA",
    template: "%s · Plenuu",
  },
  description:
    "Plenuu is the marketplace connecting Ghana and the USA. Shop fashion, electronics, home, beauty and more from verified vendors, paid your way, delivered in 3–5 days.",
  keywords: [
    "Plenuu",
    "Ghana marketplace",
    "USA marketplace",
    "online shopping Ghana",
    "vendors",
    "mobile money",
  ],
  openGraph: {
    title: "Plenuu — Shop everything, delivered across Ghana & the USA",
    description:
      "One marketplace, two markets. Shop verified vendors across Ghana and the USA. Pay with cards or mobile money. Tracked delivery in 3–5 days.",
    url: "https://plenuu.com",
    siteName: "Plenuu",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", bricolage.variable, hanken.variable)}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-js')}}catch(e){}",
          }}
        />
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <SmoothScroll />
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
