"use client"

import { ArrowRight, BarChart3, Calendar, Clock, Plus, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BrainCircuit } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function DashboardContent() {
  const [mounted, setMounted] = useState(false)
  const [progressValue, setProgressValue] = useState(0)

  // Animate progress bars on mount
  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setProgressValue(42)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col space-y-2 animate-in-fade">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to CogniSim AI - Overview of your current sprint and project status.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Sprint Widget */}
        <Card className="animate-in-fade hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Current Sprint</CardTitle>
            <CardDescription>Sprint #24 - May 13-27</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{progressValue}%</span>
                </div>
                <Progress value={progressValue} className="h-2 transition-all duration-1000 ease-in-out" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Days Left</p>
                  <p className="flex items-center gap-1 font-medium">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>8 days</span>
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Velocity</p>
                  <p className="flex items-center gap-1 font-medium">
                    <BarChart3 className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>32 points</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/sprints" className="w-full">
              <Button variant="outline" size="sm" className="w-full">
                View Sprint
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Backlog Health Widget */}
        <Card
          className="animate-in-fade hover:shadow-md transition-all duration-300"
          style={{ animationDelay: "100ms" }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Backlog Health</CardTitle>
            <CardDescription>Current status of your stories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-muted">
                    <span className="text-xl font-bold">12</span>
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">To Do</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-500/30">
                    <span className="text-xl font-bold">8</span>
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">In Progress</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-green-500/30">
                    <span className="text-xl font-bold">24</span>
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">Done</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/backlog" className="w-full">
              <Button variant="outline" size="sm" className="w-full">
                View Backlog
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* AI Suggestions Widget */}
        <Card
          className="animate-in-fade hover:shadow-md transition-all duration-300"
          style={{ animationDelay: "200ms" }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-base">AI Suggestions</CardTitle>
            <CardDescription>Cognitive insights for your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-3">
                <div className="flex items-start gap-2">
                  <BrainCircuit className="mt-0.5 h-4 w-4 text-primary" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Consider splitting Epic #42</p>
                    <p className="text-xs text-muted-foreground">
                      This epic is too large for a single sprint based on your team's velocity.
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex justify-end gap-2">
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                    Dismiss
                  </Button>
                  <Button size="sm" className="h-7 px-2 text-xs">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View All Suggestions
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="animate-in-fade" style={{ animationDelay: "300ms" }}>
        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button variant="outline" className="h-auto justify-start gap-2 p-4">
            <Plus className="h-4 w-4" />
            <div className="flex flex-col items-start">
              <span>Create Story</span>
              <span className="text-xs text-muted-foreground">Add a new user story</span>
            </div>
          </Button>
          <Button variant="outline" className="h-auto justify-start gap-2 p-4">
            <Calendar className="h-4 w-4" />
            <div className="flex flex-col items-start">
              <span>Plan Sprint</span>
              <span className="text-xs text-muted-foreground">Schedule next sprint</span>
            </div>
          </Button>
          <Button variant="outline" className="h-auto justify-start gap-2 p-4">
            <BarChart3 className="h-4 w-4" />
            <div className="flex flex-col items-start">
              <span>Generate Report</span>
              <span className="text-xs text-muted-foreground">Create performance report</span>
            </div>
          </Button>
          <Button variant="outline" className="h-auto justify-start gap-2 p-4">
            <Sparkles className="h-4 w-4" />
            <div className="flex flex-col items-start">
              <span>AI Assistance</span>
              <span className="text-xs text-muted-foreground">Get intelligent help</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Recent Stories */}
      <div className="animate-in-fade" style={{ animationDelay: "400ms" }}>
        <h2 className="mb-4 text-lg font-semibold">Recent Stories</h2>
        <div className="rounded-lg border">
          <div className="grid divide-y">
            {[
              {
                id: "STORY-42",
                title: "Implement user authentication flow",
                status: "In Progress",
                priority: "High",
                assignee: "John Doe",
              },
              {
                id: "STORY-41",
                title: "Design dashboard layout",
                status: "Done",
                priority: "Medium",
                assignee: "Jane Smith",
              },
              {
                id: "STORY-40",
                title: "Create API endpoints for user data",
                status: "To Do",
                priority: "Medium",
                assignee: "Unassigned",
              },
              {
                id: "STORY-39",
                title: "Implement dark mode toggle",
                status: "In Progress",
                priority: "Low",
                assignee: "Alex Johnson",
              },
            ].map((story) => (
              <div key={story.id} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-medium">{story.id.split("-")[1]}</span>
                  </div>
                  <div>
                    <p className="font-medium">{story.title}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{story.id}</span>
                      <span>•</span>
                      <span>{story.assignee}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className={`
                      ${story.status === "To Do" ? "bg-muted text-muted-foreground" : ""}
                      ${story.status === "In Progress" ? "bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400" : ""}
                      ${story.status === "Done" ? "bg-green-500/20 text-green-500 dark:bg-green-500/30 dark:text-green-400" : ""}
                    `}
                  >
                    {story.status}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`
                      ${story.priority === "Low" ? "bg-muted text-muted-foreground" : ""}
                      ${story.priority === "Medium" ? "bg-orange-500/20 text-orange-500 dark:bg-orange-500/30 dark:text-orange-400" : ""}
                      ${story.priority === "High" ? "bg-red-500/20 text-red-500 dark:bg-red-500/30 dark:text-red-400" : ""}
                    `}
                  >
                    {story.priority}
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">View story</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="/backlog">
            <Button variant="outline">View All Stories</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
