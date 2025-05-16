import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BrainCircuit, Calendar, CheckCircle2, Play } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  See CogniSim AI in Action
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Watch a demo of our cognitive intelligence platform or schedule a personalized walkthrough
                </p>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
              <div>
                <div className="rounded-lg border bg-card p-2 shadow-lg">
                  <div className="relative overflow-hidden rounded-md bg-muted pt-[56.25%]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="rounded-full p-6">
                        <Play className="h-6 w-6" />
                        <span className="sr-only">Play Demo</span>
                      </Button>
                    </div>
                    <img
                      src="/placeholder.svg?height=720&width=1280"
                      alt="CogniSim AI Demo Video"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <h2 className="text-2xl font-bold">Key Features Showcase</h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <BrainCircuit className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Cognitive Intelligence</h3>
                        <p className="text-sm text-muted-foreground">
                          See how our AI learns from your team's patterns to provide intelligent insights
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Predictive Planning</h3>
                        <p className="text-sm text-muted-foreground">
                          Watch our AI optimize sprint planning based on team capacity and velocity
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Adaptive Workflows</h3>
                        <p className="text-sm text-muted-foreground">
                          Experience how our platform adapts to your team's unique working style
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule a Personalized Demo</CardTitle>
                    <CardDescription>Get a guided tour of CogniSim AI tailored to your team's needs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" placeholder="name@company.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="team-size">Team size</Label>
                      <Select>
                        <SelectTrigger id="team-size">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501+">501+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="focus">Primary focus</Label>
                      <Select>
                        <SelectTrigger id="focus">
                          <SelectValue placeholder="Select area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sprint-planning">Sprint Planning</SelectItem>
                          <SelectItem value="backlog-management">Backlog Management</SelectItem>
                          <SelectItem value="epic-decomposition">Epic Decomposition</SelectItem>
                          <SelectItem value="analytics">Team Analytics</SelectItem>
                          <SelectItem value="all">All Features</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Schedule Demo</Button>
                  </CardFooter>
                </Card>

                <div className="mt-8 rounded-lg border bg-muted/50 p-6">
                  <h3 className="text-lg font-medium">Not ready for a demo yet?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Explore our documentation to learn more about CogniSim AI's features and capabilities.
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline">
                      <Link href="/docs">View Documentation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
