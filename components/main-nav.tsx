"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState } from "react"

export function MainNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isMarketingPage =
    pathname === "/" ||
    pathname === "/pricing" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/demo" ||
    pathname === "/terms" ||
    pathname === "/privacy"

  return (
    <header className="sticky top-0 z-50 w-full flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 lg:px-8">
      <div className="flex items-center gap-2 text-lg font-semibold text-primary">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            C
          </div>
          <span>CogniSim</span>
        </Link>
      </div>

      {isMarketingPage && (
        <button
          className="ml-auto md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {mobileMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      )}

      {isMarketingPage ? (
        <>
          {/* Desktop Navigation */}
          <nav className="ml-auto hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Testimonials
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </nav>

          {/* Mobile Navigation */}
          {isMarketingPage && mobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 z-50 bg-background border-b md:hidden">
              <div className="flex flex-col p-4 space-y-4">
                <Link
                  href="/#features"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#how-it-works"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/#testimonials"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/#pricing"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/login"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          )}

          <div className="ml-auto md:ml-4 flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="mr-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hidden md:inline-block"
            >
              Login
            </Link>
            <Button asChild size="sm" className="h-9">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </>
      ) : (
        <div className="ml-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild variant="outline" size="sm" className="h-9">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
