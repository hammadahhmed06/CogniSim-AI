import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container w-full max-w-full px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About CogniSim AI</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to transform project management with cognitive intelligence
                </p>
              </div>
            </div>

            <div className="mx-auto mt-16 w-full max-w-5xl px-4">
              <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
              <p className="mb-6 text-muted-foreground">
                CogniSim AI was founded in 2023 by a team of AI researchers and project management experts who saw the
                potential for cognitive intelligence to revolutionize how teams work together. We recognized that
                traditional project management tools were rigid and failed to adapt to the unique ways teams actually
                work.
              </p>

              <p className="mb-6 text-muted-foreground">
                Our platform uses advanced cognitive simulation to understand your team's patterns, predict outcomes,
                and provide intelligent suggestions that optimize your workflow. Unlike other AI tools that simply
                automate tasks, CogniSim AI actually learns how your team thinks and works together.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">Our Technology</h2>
              <p className="mb-6 text-muted-foreground">
                At the heart of CogniSim AI is our proprietary Cognitive Simulation Engine, which builds a detailed
                model of your team's workflow patterns, communication styles, and decision-making processes. This model
                continuously evolves as it learns from your team's activities, becoming more accurate and helpful over
                time.
              </p>

              <p className="mb-6 text-muted-foreground">
                Our platform integrates seamlessly with your existing tools and processes, providing intelligent
                insights without disrupting your workflow. We're committed to privacy and security, ensuring that your
                data is always protected.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">Our Team</h2>
              <p className="mb-6 text-muted-foreground">
                CogniSim AI is built by a diverse team of AI researchers, software engineers, UX designers, and project
                management experts. We're united by our passion for using technology to make work more efficient,
                enjoyable, and productive.
              </p>

              <div className="mt-12 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/signup">Join Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
