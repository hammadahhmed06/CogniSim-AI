import { BrainCircuit, Sparkles, Zap, BarChart3, Users, Calendar } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Planning",
      description: "Leverage cognitive intelligence to optimize sprint planning and story estimation.",
    },
    {
      icon: Sparkles,
      title: "Smart Suggestions",
      description: "Receive intelligent suggestions for story decomposition and sprint optimization.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline your agile processes with intelligent automation and templates.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Gain insights into team performance and project progress with detailed reports.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhance team coordination with real-time updates and collaborative planning.",
    },
    {
      icon: Calendar,
      title: "Sprint Management",
      description: "Efficiently manage sprints with capacity tracking and burndown charts.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-in-fade">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Intelligent Project Management</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              CogniSim AI combines traditional agile tools with cognitive intelligence to transform how teams plan and
              execute projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm animate-in-fade"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
