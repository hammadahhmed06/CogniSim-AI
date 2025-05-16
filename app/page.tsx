import Link from "next/link"
import { ArrowRight, BarChart3, BrainCircuit, Calendar, CheckCircle2, Layers, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 w-full overflow-x-hidden">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-28">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-background"></div>
            <div className="container relative z-10 w-full max-w-full px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="mx-auto w-full max-w-6xl">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Introducing CogniSim AI
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Project Management with{" "}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Cognitive Intelligence
                    </span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    CogniSim AI simulates human cognitive processes to deliver intelligent insights and automate complex
                    project management tasks.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                    <Button asChild size="lg" className="gap-1 h-12 px-6">
                      <Link href="/signup">
                        Start Free Trial
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-6">
                      <Link href="/demo">Watch Demo</Link>
                    </Button>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="mt-16 rounded-lg border bg-card p-2 shadow-lg">
                  <div className="overflow-hidden rounded-md bg-muted">
                    <img
                      src="/placeholder.svg?height=720&width=1280"
                      alt="CogniSim AI Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Section */}
          <section className="w-full bg-muted/40 py-20 md:py-24" id="features">
            <div className="container px-4 md:px-6 w-full max-w-full lg:px-8 xl:px-12">
              <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Cognitive Intelligence for Project Management
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  CogniSim AI learns from your team's patterns and optimizes workflows automatically.
                </p>
              </div>

              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:gap-6 lg:gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Cognitive Simulation</h3>
                  <p className="text-muted-foreground">
                    Our AI simulates human decision-making to provide context-aware suggestions for your projects.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Intelligent Decomposition</h3>
                  <p className="text-muted-foreground">
                    Automatically break down complex epics into well-structured stories with optimal dependencies.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Predictive Planning</h3>
                  <p className="text-muted-foreground">
                    AI-powered sprint planning that predicts team capacity and optimizes story allocation.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Adaptive Workflows</h3>
                  <p className="text-muted-foreground">
                    Workflows that adapt to your team's patterns and optimize for efficiency automatically.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Cognitive Analytics</h3>
                  <p className="text-muted-foreground">
                    Deep insights into team performance with AI-powered recommendations for improvement.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Contextual Assistance</h3>
                  <p className="text-muted-foreground">
                    AI assistant that understands your project context and provides relevant suggestions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-20 md:py-24" id="how-it-works">
            <div className="container px-4 md:px-6 w-full max-w-full lg:px-8 xl:px-12">
              <div className="flex flex-col items-center gap-4 text-center mb-16">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cognitive Intelligence in Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  See how CogniSim AI transforms your project management workflow
                </p>
              </div>

              <div className="grid gap-12 md:grid-cols-3 max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Connect Your Data</h3>
                  <p className="mt-2 text-muted-foreground">
                    Integrate with your existing tools or start fresh. CogniSim AI learns from your historical data.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Cognitive Analysis</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our AI analyzes patterns, identifies bottlenecks, and builds a cognitive model of your team's
                    workflow.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Intelligent Automation</h3>
                  <p className="mt-2 text-muted-foreground">
                    Get AI-powered suggestions, automated planning, and continuous optimization of your processes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="w-full bg-muted/40 py-20 md:py-24" id="testimonials">
            <div className="container px-4 md:px-6 w-full max-w-full lg:px-8 xl:px-12">
              <div className="flex flex-col items-center gap-4 text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted by Innovative Teams</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  See what our customers say about CogniSim AI
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
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
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        "CogniSim AI has transformed how we manage projects. The cognitive intelligence behind it feels
                        like having an expert PM who knows our team inside out."
                      </p>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">CTO, TechNova</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
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
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        "The predictive planning feature alone saved us countless hours of sprint planning meetings.
                        It's like the AI knows exactly what our team can accomplish."
                      </p>
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Engineering Manager, DataFlow</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
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
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        "We've tried many project management tools, but CogniSim AI is the first one that actually
                        adapts to how our team works instead of forcing us to adapt to it."
                      </p>
                      <div>
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Product Director, InnovateCorp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="w-full py-20 md:py-24" id="pricing">
            <div className="container px-4 md:px-6 w-full max-w-full lg:px-8 xl:px-12">
              <div className="flex flex-col items-center gap-4 text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Simple, Transparent Pricing</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your team
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">Starter</h3>
                    <p className="text-muted-foreground">For small teams getting started</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-3xl font-bold">$12</p>
                    <p className="text-muted-foreground">per user / month</p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Up to 10 team members</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Basic cognitive intelligence</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Sprint planning</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Basic analytics</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/signup?plan=starter">Get Started</Link>
                  </Button>
                </div>
                <div className="relative rounded-lg border border-primary bg-card p-6 shadow-sm">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">Professional</h3>
                    <p className="text-muted-foreground">For growing teams</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-3xl font-bold">$29</p>
                    <p className="text-muted-foreground">per user / month</p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Advanced cognitive intelligence</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Predictive planning</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Intelligent decomposition</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/signup?plan=professional">Get Started</Link>
                  </Button>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">Enterprise</h3>
                    <p className="text-muted-foreground">For large organizations</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-3xl font-bold">Custom</p>
                    <p className="text-muted-foreground">contact for pricing</p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Custom AI training</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>On-premise deployment</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-20 md:py-24 bg-primary/5">
            <div className="container px-4 md:px-6 w-full max-w-full lg:px-8 xl:px-12">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to transform your workflow?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of teams using CogniSim AI to streamline their project management.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                  <Button asChild size="lg" className="gap-1 h-12 px-6">
                    <Link href="/signup">
                      Start Free Trial
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-6">
                    <Link href="/demo">Schedule Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
