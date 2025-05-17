"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  Plus,
  Sparkles,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Sample data
const sprints = [
  {
    id: "SPRINT-24",
    name: "Sprint 24",
    status: "Active",
    startDate: "May 13, 2025",
    endDate: "May 27, 2025",
    daysLeft: 8,
    progress: 42,
    capacity: 50,
    allocated: 48,
    completed: 20,
  },
  {
    id: "SPRINT-23",
    name: "Sprint 23",
    status: "Completed",
    startDate: "Apr 29, 2025",
    endDate: "May 13, 2025",
    daysLeft: 0,
    progress: 100,
    capacity: 50,
    allocated: 45,
    completed: 42,
  },
  {
    id: "SPRINT-22",
    name: "Sprint 22",
    status: "Completed",
    startDate: "Apr 15, 2025",
    endDate: "Apr 29, 2025",
    daysLeft: 0,
    progress: 100,
    capacity: 50,
    allocated: 50,
    completed: 48,
  },
]

// Sample stories for the selected sprint
const sprintStories = [
  {
    id: "STORY-42",
    title: "Implement user authentication flow",
    status: "In Progress",
    priority: "High",
    effort: "8",
    assignee: "John Doe",
  },
  {
    id: "STORY-41",
    title: "Design dashboard layout",
    status: "Done",
    priority: "Medium",
    effort: "5",
    assignee: "Jane Smith",
  },
  {
    id: "STORY-39",
    title: "Implement dark mode toggle",
    status: "In Progress",
    priority: "Low",
    effort: "3",
    assignee: "Alex Johnson",
  },
  {
    id: "STORY-36",
    title: "Create user profile page",
    status: "Done",
    priority: "Medium",
    effort: "8",
    assignee: "Jane Smith",
  },
  {
    id: "STORY-35",
    title: "Add form validation",
    status: "Done",
    priority: "Medium",
    effort: "5",
    assignee: "Alex Johnson",
  },
]

// Sample backlog stories for planning
const backlogStories = [
  {
    id: "STORY-45",
    title: "Implement email notifications",
    status: "To Do",
    priority: "High",
    effort: "8",
    epic: "Notifications",
  },
  {
    id: "STORY-44",
    title: "Add user search functionality",
    status: "To Do",
    priority: "Medium",
    effort: "5",
    epic: "User Management",
  },
  {
    id: "STORY-43",
    title: "Create settings page",
    status: "To Do",
    priority: "Medium",
    effort: "5",
    epic: "UI Redesign",
  },
  {
    id: "STORY-40",
    title: "Create API endpoints for user data",
    status: "To Do",
    priority: "Medium",
    effort: "13",
    epic: "User Management",
  },
  {
    id: "STORY-38",
    title: "Add pagination to user list",
    status: "To Do",
    priority: "Medium",
    effort: "5",
    epic: "User Management",
  },
]

export function SprintsContent() {
  const [selectedSprint, setSelectedSprint] = useState(sprints[0])
  const [planningMode, setPlanningMode] = useState(false)
  const [plannedStories, setPlannedStories] = useState<typeof backlogStories>([])

  // Calculate total effort for planning
  const totalPlannedEffort = plannedStories.reduce((sum, story) => sum + Number.parseInt(story.effort), 0)
  const isOverCapacity = totalPlannedEffort > selectedSprint.capacity

  // Function to add a story to the sprint plan
  const addStoryToPlan = (story: (typeof backlogStories)[0]) => {
    setPlannedStories([...plannedStories, story])
  }

  // Function to remove a story from the sprint plan
  const removeStoryFromPlan = (storyId: string) => {
    setPlannedStories(plannedStories.filter((story) => story.id !== storyId))
  }

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col space-y-2 animate-in-fade">
        <h1 className="text-2xl font-bold tracking-tight">Sprints</h1>
        <p className="text-muted-foreground">Manage and plan your development cycles.</p>
      </div>

      {planningMode ? (
        <div className="animate-in-fade">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setPlanningMode(false)}>
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h2 className="text-lg font-semibold">Planning Sprint {selectedSprint.name}</h2>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setPlanningMode(false)}>
                Cancel
              </Button>
              <Button>Save Sprint Plan</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Backlog</CardTitle>
                <CardDescription>Available stories to add to sprint</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[500px] overflow-y-auto">
                  {backlogStories
                    .filter((story) => !plannedStories.some((s) => s.id === story.id))
                    .map((story) => (
                      <div
                        key={story.id}
                        className="flex items-center justify-between p-4 border-b hover:bg-muted/50 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-muted-foreground">{story.id}</span>
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
                          </div>
                          <p className="text-sm font-medium">{story.title}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{story.epic}</span>
                            <span>•</span>
                            <span>{story.effort} points</span>
                          </div>
                        </div>
                        <Button size="sm" className="gap-1" onClick={() => addStoryToPlan(story)}>
                          <ArrowRight className="h-3 w-3" />
                          <span>Add</span>
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base">Sprint Plan</CardTitle>
                    <CardDescription>Stories for {selectedSprint.name}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm">
                      <span className="font-medium">{totalPlannedEffort}</span>
                      <span className="text-muted-foreground">/{selectedSprint.capacity} points</span>
                    </div>
                    <Button variant="outline" size="icon" className="h-8 w-8" title="AI Optimize">
                      <Sparkles className="h-4 w-4" />
                      <span className="sr-only">AI Optimize</span>
                    </Button>
                  </div>
                </div>
                <Progress
                  value={(totalPlannedEffort / selectedSprint.capacity) * 100}
                  className={`h-2 ${isOverCapacity ? "bg-red-500" : ""}`}
                />
                {isOverCapacity && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Over Capacity</AlertTitle>
                    <AlertDescription>
                      You've exceeded the sprint capacity by {totalPlannedEffort - selectedSprint.capacity} points.
                    </AlertDescription>
                  </Alert>
                )}
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[500px] overflow-y-auto">
                  {plannedStories.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <div className="rounded-full bg-muted p-3">
                        <ArrowLeft className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="mt-4 text-sm font-medium">No Stories Added</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Add stories from the backlog to plan your sprint.
                      </p>
                    </div>
                  ) : (
                    plannedStories.map((story) => (
                      <div
                        key={story.id}
                        className="flex items-center justify-between p-4 border-b hover:bg-muted/50 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-muted-foreground">{story.id}</span>
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
                          </div>
                          <p className="text-sm font-medium">{story.title}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{story.epic}</span>
                            <span>•</span>
                            <span>{story.effort} points</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => removeStoryFromPlan(story.id)}
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <>
          <div
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-in-fade"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex-1"></div>
            <Button className="shrink-0 gap-1" onClick={() => setPlanningMode(true)}>
              <Calendar className="h-4 w-4" />
              <span>Plan Sprint</span>
            </Button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-6 animate-in-fade"
            style={{ animationDelay: "200ms" }}
          >
            <div className="space-y-4">
              {sprints.map((sprint) => (
                <Card
                  key={sprint.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${selectedSprint.id === sprint.id ? "border-primary" : ""}`}
                  onClick={() => setSelectedSprint(sprint)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{sprint.id}</Badge>
                      <Badge
                        variant="outline"
                        className={`
                          ${sprint.status === "Planned" ? "bg-muted text-muted-foreground" : ""}
                          ${sprint.status === "Active" ? "bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400" : ""}
                          ${sprint.status === "Completed" ? "bg-green-500/20 text-green-500 dark:bg-green-500/30 dark:text-green-400" : ""}
                        `}
                      >
                        {sprint.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{sprint.name}</CardTitle>
                    <CardDescription>
                      {sprint.startDate} - {sprint.endDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{sprint.progress}%</span>
                        </div>
                        <Progress value={sprint.progress} className="h-2" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Days Left</p>
                          <p className="flex items-center gap-1 font-medium">
                            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{sprint.daysLeft} days</span>
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Capacity</p>
                          <p className="flex items-center gap-1 font-medium">
                            <span>
                              {sprint.allocated}/{sprint.capacity} pts
                            </span>
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Completed</p>
                          <p className="flex items-center gap-1 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{sprint.completed} pts</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="h-fit animate-in-slide-right">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{selectedSprint.id}</Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Sprint</DropdownMenuItem>
                      <DropdownMenuItem>Change Status</DropdownMenuItem>
                      <DropdownMenuItem>Generate Report</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete Sprint</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardTitle>{selectedSprint.name}</CardTitle>
                <CardDescription>
                  {selectedSprint.startDate} - {selectedSprint.endDate}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <Tabs defaultValue="stories">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="stories">Stories</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="stories" className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Stories ({sprintStories.length})</h3>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Plus className="h-3 w-3" />
                        <span>Add Story</span>
                      </Button>
                    </div>

                    <div className="space-y-2">
                      {sprintStories.map((story) => (
                        <div
                          key={story.id}
                          className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-muted-foreground">{story.id}</span>
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
                            </div>
                            <p className="text-sm font-medium">{story.title}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{story.assignee}</span>
                              <span>•</span>
                              <span>{story.effort} points</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Status</p>
                        <Badge
                          variant="outline"
                          className={`
                            ${selectedSprint.status === "Planned" ? "bg-muted text-muted-foreground" : ""}
                            ${selectedSprint.status === "Active" ? "bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400" : ""}
                            ${selectedSprint.status === "Completed" ? "bg-green-500/20 text-green-500 dark:bg-green-500/30 dark:text-green-400" : ""}
                          `}
                        >
                          {selectedSprint.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm">2 weeks</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Start Date</p>
                        <p className="text-sm">{selectedSprint.startDate}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">End Date</p>
                        <p className="text-sm">{selectedSprint.endDate}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Capacity</p>
                        <p className="text-sm">{selectedSprint.capacity} points</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Allocated</p>
                        <p className="text-sm">{selectedSprint.allocated} points</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Completed</p>
                        <p className="text-sm">{selectedSprint.completed} points</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Progress</p>
                        <div className="flex items-center gap-2">
                          <Progress value={selectedSprint.progress} className="h-2 w-24" />
                          <span className="text-sm">{selectedSprint.progress}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <h3 className="text-sm font-medium">Goals</h3>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Complete user authentication implementation</li>
                        <li>Finalize dashboard UI design</li>
                        <li>Implement dark mode functionality</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Edit Sprint</Button>
                <Button>Generate Report</Button>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
