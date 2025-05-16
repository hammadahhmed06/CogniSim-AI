"use client"

import { Calendar, ChevronLeft, ChevronRight, Plus, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample data
const sprints = [
  {
    id: "SPRINT-24",
    name: "Sprint 24",
    status: "Active",
    startDate: "May 13, 2025",
    endDate: "May 27, 2025",
    progress: 42,
    capacity: 45,
    committed: 42,
    completed: 18,
    stories: [
      {
        id: "STORY-123",
        title: "Implement user authentication flow",
        status: "In Progress",
        assignee: "JD",
        effort: 5,
      },
      {
        id: "STORY-127",
        title: "Design system component library",
        status: "In Progress",
        assignee: "MB",
        effort: 13,
      },
      {
        id: "STORY-124",
        title: "Create dashboard analytics widgets",
        status: "To Do",
        assignee: "JS",
        effort: 3,
      },
      {
        id: "STORY-125",
        title: "API integration for user profiles",
        status: "To Do",
        assignee: "AJ",
        effort: 8,
      },
      {
        id: "STORY-128",
        title: "Implement dark mode support",
        status: "To Do",
        assignee: "JD",
        effort: 5,
      },
      {
        id: "STORY-130",
        title: "Create onboarding tutorial",
        status: "To Do",
        assignee: "JS",
        effort: 5,
      },
    ],
  },
  {
    id: "SPRINT-23",
    name: "Sprint 23",
    status: "Completed",
    startDate: "April 29, 2025",
    endDate: "May 13, 2025",
    progress: 100,
    capacity: 50,
    committed: 47,
    completed: 45,
    stories: [
      {
        id: "STORY-120",
        title: "Implement password reset functionality",
        status: "Done",
        assignee: "JD",
        effort: 5,
      },
      {
        id: "STORY-121",
        title: "Create user profile page",
        status: "Done",
        assignee: "JS",
        effort: 8,
      },
      {
        id: "STORY-122",
        title: "Optimize image loading performance",
        status: "Done",
        assignee: "MB",
        effort: 3,
      },
      {
        id: "STORY-126",
        title: "Optimize database queries for reports",
        status: "Done",
        assignee: "SW",
        effort: 3,
      },
      {
        id: "STORY-129",
        title: "Setup CI/CD pipeline",
        status: "Done",
        assignee: "AJ",
        effort: 8,
      },
    ],
  },
]

export function SprintsView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "To Do":
        return "bg-muted text-muted-foreground"
      case "In Progress":
        return "bg-blue-500/20 text-blue-500"
      case "Done":
        return "bg-green-500/20 text-green-500"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getSprintStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-500"
      case "Completed":
        return "bg-blue-500/20 text-blue-500"
      case "Planned":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Sprints</h1>
        <p className="text-muted-foreground">Plan and track your team's work in time-boxed sprints.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <BrainCircuit className="h-4 w-4" />
            <span>AI Planning</span>
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>Plan Sprint</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="future">Future</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="mt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{sprints[0].name}</CardTitle>
                  <CardDescription>
                    {sprints[0].startDate} - {sprints[0].endDate}
                  </CardDescription>
                </div>
                <Badge className={getSprintStatusColor(sprints[0].status)}>{sprints[0].status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{sprints[0].progress}%</span>
                    </div>
                    <Progress value={sprints[0].progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Capacity</p>
                      <p className="font-medium">{sprints[0].capacity} points</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Committed</p>
                      <p className="font-medium">{sprints[0].committed} points</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="font-medium">{sprints[0].completed} points</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Sprint Goal</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete the user authentication system and make progress on the design system components.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start border-t p-6">
              <h3 className="mb-4 text-sm font-medium">Stories ({sprints[0].stories.length})</h3>
              <div className="w-full space-y-2">
                {sprints[0].stories.map((story) => (
                  <div
                    key={story.id}
                    className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={getStatusColor(story.status)}>
                        {story.status}
                      </Badge>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{story.id}</span>
                          <span className="text-sm">{story.title}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{story.effort} points</Badge>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback>{story.assignee}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="past" className="mt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{sprints[1].name}</CardTitle>
                  <CardDescription>
                    {sprints[1].startDate} - {sprints[1].endDate}
                  </CardDescription>
                </div>
                <Badge className={getSprintStatusColor(sprints[1].status)}>{sprints[1].status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{sprints[1].progress}%</span>
                    </div>
                    <Progress value={sprints[1].progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Capacity</p>
                      <p className="font-medium">{sprints[1].capacity} points</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Committed</p>
                      <p className="font-medium">{sprints[1].committed} points</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="font-medium">{sprints[1].completed} points</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Sprint Goal</h3>
                  <p className="text-sm text-muted-foreground">
                    Implement core user management features and set up the deployment pipeline.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start border-t p-6">
              <h3 className="mb-4 text-sm font-medium">Stories ({sprints[1].stories.length})</h3>
              <div className="w-full space-y-2">
                {sprints[1].stories.map((story) => (
                  <div
                    key={story.id}
                    className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={getStatusColor(story.status)}>
                        {story.status}
                      </Badge>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{story.id}</span>
                          <span className="text-sm">{story.title}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{story.effort} points</Badge>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback>{story.assignee}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="future" className="mt-4">
          <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
            <div className="flex flex-col items-center gap-2 text-center">
              <Calendar className="h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-medium">No Future Sprints</h3>
              <p className="max-w-xs text-sm text-muted-foreground">
                There are no future sprints planned yet. Click the "Plan Sprint" button to create one.
              </p>
              <Button className="mt-2 gap-2">
                <Plus className="h-4 w-4" />
                <span>Plan Sprint</span>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
