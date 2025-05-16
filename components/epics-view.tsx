"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Plus, Search, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { PageLayout, PageHeader, PageTitle, PageDescription, PageContent } from "@/components/layouts/page-layout"

// Sample data
const epics = [
  {
    id: "EPIC-001",
    title: "User Authentication System",
    description: "Implement a secure authentication system with login, registration, and password recovery.",
    status: "In Progress",
    progress: 65,
    stories: 8,
    completedStories: 5,
    priority: "High",
    owner: "John Doe",
    tags: ["Security", "Frontend", "Backend"],
  },
  {
    id: "EPIC-002",
    title: "Analytics Dashboard",
    description: "Create a comprehensive analytics dashboard with real-time data visualization.",
    status: "To Do",
    progress: 0,
    stories: 12,
    completedStories: 0,
    priority: "Medium",
    owner: "Jane Smith",
    tags: ["Data", "Frontend", "UI"],
  },
  {
    id: "EPIC-003",
    title: "Payment Processing",
    description: "Integrate payment gateways and implement subscription management.",
    status: "Done",
    progress: 100,
    stories: 10,
    completedStories: 10,
    priority: "High",
    owner: "Alex Johnson",
    tags: ["Backend", "Security", "Integration"],
  },
  {
    id: "EPIC-004",
    title: "Mobile Responsiveness",
    description: "Ensure all application features work seamlessly on mobile devices.",
    status: "In Progress",
    progress: 30,
    stories: 6,
    completedStories: 2,
    priority: "Medium",
    owner: "Sarah Williams",
    tags: ["Frontend", "UI", "UX"],
  },
  {
    id: "EPIC-005",
    title: "Notification System",
    description: "Implement in-app and email notification system for user activities.",
    status: "To Do",
    progress: 0,
    stories: 7,
    completedStories: 0,
    priority: "Low",
    owner: "Mike Brown",
    tags: ["Backend", "Frontend"],
  },
]

export function EpicsView() {
  const [selectedEpic, setSelectedEpic] = useState<string | null>(null)
  const [selectedTab, setSelectedTab] = useState("all")

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-500"
      case "Medium":
        return "bg-orange-500/20 text-orange-500"
      case "Low":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const filteredEpics =
    selectedTab === "all"
      ? epics
      : epics.filter((epic) => {
          if (selectedTab === "todo") return epic.status === "To Do"
          if (selectedTab === "inprogress") return epic.status === "In Progress"
          if (selectedTab === "done") return epic.status === "Done"
          return true
        })

  return (
    <PageLayout>
      <PageHeader>
        <PageTitle>Epics</PageTitle>
        <PageDescription>Manage large initiatives and track progress.</PageDescription>
      </PageHeader>

      <PageContent>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search epics..." className="w-full pl-8" />
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>Create Epic</span>
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-6 w-full" onValueChange={setSelectedTab}>
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="todo">To Do</TabsTrigger>
            <TabsTrigger value="inprogress">In Progress</TabsTrigger>
            <TabsTrigger value="done">Done</TabsTrigger>
          </TabsList>
          <TabsContent value={selectedTab} className="mt-4">
            <div className="grid gap-4">
              {filteredEpics.map((epic) => (
                <Collapsible
                  key={epic.id}
                  open={selectedEpic === epic.id}
                  onOpenChange={() => setSelectedEpic(selectedEpic === epic.id ? null : epic.id)}
                >
                  <Card>
                    <CollapsibleTrigger className="w-full text-left [&[data-state=open]>div]:rounded-b-none">
                      <div className="flex items-center justify-between rounded-md border p-4 hover:bg-muted/50">
                        <div className="flex items-center gap-3">
                          {selectedEpic === epic.id ? (
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          )}
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{epic.id}</span>
                              <span className="font-medium">{epic.title}</span>
                            </div>
                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline" className={`${getStatusColor(epic.status)}`}>
                                {epic.status}
                              </Badge>
                              <span>•</span>
                              <Badge variant="outline" className={`${getPriorityColor(epic.priority)}`}>
                                {epic.priority}
                              </Badge>
                              <span>•</span>
                              <span>
                                {epic.completedStories}/{epic.stories}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex w-40 flex-col gap-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">Progress</span>
                              <span>{epic.progress}%</span>
                            </div>
                            <Progress value={epic.progress} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="border-t pt-4">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h3 className="mb-2 font-medium">Description</h3>
                            <p className="text-sm text-muted-foreground">{epic.description}</p>
                            <div className="mt-4 flex flex-wrap gap-1">
                              {epic.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="mb-2 font-medium">Details</h3>
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                              <dt className="text-muted-foreground">Owner</dt>
                              <dd>{epic.owner}</dd>
                              <dt className="text-muted-foreground">Status</dt>
                              <dd>
                                <Badge variant="outline" className={`${getStatusColor(epic.status)}`}>
                                  {epic.status}
                                </Badge>
                              </dd>
                              <dt className="text-muted-foreground">Priority</dt>
                              <dd>
                                <Badge variant="outline" className={`${getPriorityColor(epic.priority)}`}>
                                  {epic.priority}
                                </Badge>
                              </dd>
                              <dt className="text-muted-foreground">Stories</dt>
                              <dd>
                                {epic.completedStories}/{epic.stories}
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t px-6 py-4">
                        <Button variant="outline" className="gap-2">
                          <BrainCircuit className="h-4 w-4" />
                          <span>Cognitive Decomposition</span>
                        </Button>
                      </CardFooter>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PageContent>
    </PageLayout>
  )
}
