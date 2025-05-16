import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-muted/40 py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 w-full max-w-full px-4 md:flex-row md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center gap-2 text-lg font-semibold text-primary">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            C
          </div>
          <span>CogniSim</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © 2025 CogniSim AI. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
