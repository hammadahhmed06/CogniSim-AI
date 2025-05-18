import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with agile.",
      price: "$19",
      features: [
        "Up to 5 team members",
        "Basic AI suggestions",
        "Sprint planning",
        "Backlog management",
        "Basic reporting",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing teams that need advanced features.",
      price: "$49",
      features: [
        "Up to 15 team members",
        "Advanced AI suggestions",
        "Sprint planning & optimization",
        "Epic management",
        "Advanced reporting & analytics",
        "Team capacity planning",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For organizations that need ultimate scalability.",
      price: "Custom",
      features: [
        "Unlimited team members",
        "Full AI capabilities",
        "Custom integrations",
        "Advanced security features",
        "Dedicated account manager",
        "24/7 priority support",
        "On-premise deployment option",
      ],
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-in-fade">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple, transparent pricing that scales with your team.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col animate-in-fade ${
                plan.highlighted ? "border-primary shadow-lg dark:card-rainbow" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-col space-y-1.5">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <ul className="grid gap-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
