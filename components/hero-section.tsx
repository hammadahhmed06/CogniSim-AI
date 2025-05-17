import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrainCircuit } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-in-fade">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-in-slide-down">
                Project Management with Cognitive Intelligence
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                CogniSim AI transforms agile project management with intelligent sprint planning, story estimation, and
                team optimization.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="transition-all hover:scale-105">
                <Link href="/signup">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-4 w-4" />
                    Get Started
                  </div>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-all hover:scale-105">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-xl border bg-muted/50 p-8 shadow-lg animate-in-slide-up">
              <div className="flex flex-col space-y-4">
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <div className="h-4 w-32 rounded-full bg-muted"></div>
                  <div className="mt-2 space-y-2">
                    <div className="h-3 w-full rounded-full bg-muted"></div>
                    <div className="h-3 w-3/4 rounded-full bg-muted"></div>
                  </div>
                </div>
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 rounded-full bg-muted"></div>
                    <div className="h-4 w-12 rounded-full bg-primary/30"></div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="h-3 w-full rounded-full bg-muted"></div>
                    <div className="h-3 w-4/5 rounded-full bg-muted"></div>
                  </div>
                </div>
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-28 rounded-full bg-muted"></div>
                    <div className="h-4 w-12 rounded-full bg-green-500/30"></div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="h-3 w-full rounded-full bg-muted"></div>
                    <div className="h-3 w-2/3 rounded-full bg-muted"></div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="h-8 w-24 rounded-md bg-primary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
