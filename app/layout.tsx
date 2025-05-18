import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CogniSim AI - Project Management with Cognitive Intelligence',
  description: 'CogniSim AI transforms agile project management with intelligent sprint planning, story estimation, and team optimization.',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen w-full overflow-x-hidden">{children}</body>
    </html>
  )
}
