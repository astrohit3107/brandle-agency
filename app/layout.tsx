import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BRANDLE - Creator Intelligence & Management",
  description: "Elite creator intelligence and management platform for ambitious creators.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='900' fill='%23FFC700'>B</text></svg>" />
      </head>
      <body className="bg-dark text-white antialiased">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
