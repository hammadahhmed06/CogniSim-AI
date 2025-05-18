import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrainCircuit } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in-fade">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Transform Your Agile Process?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of teams using CogniSim AI to optimize their agile workflow and deliver better results.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="transition-all hover:scale-105">
              <Link href="/signup">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" />
                  Get Started for Free
                </div>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-all hover:scale-105">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
