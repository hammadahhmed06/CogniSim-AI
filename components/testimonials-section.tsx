import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "CogniSim AI has transformed how our team plans sprints. The AI suggestions are incredibly accurate and have helped us optimize our workflow.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Scrum Master at InnovateTech",
      content:
        "The cognitive intelligence behind CogniSim AI is impressive. It's like having an extra team member who specializes in agile optimization.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Engineering Lead at DevSolutions",
      content:
        "Our team's velocity has increased by 30% since implementing CogniSim AI. The story decomposition suggestions are particularly valuable.",
      avatar: "ER",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-in-fade">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Agile Teams</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what teams are saying about their experience with CogniSim AI.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-in-fade" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 text-center">
                    <p className="text-muted-foreground">"{testimonial.content}"</p>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
