"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BrainCircuit, ChevronDown, ChevronRight, MoreHorizontal, Plus, Search, Sparkles } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"

// Sample data
const epics = [
  {
    id: "EPIC-1",
    title: "User Management",
    description: "Implement comprehensive user management features",
    status: "In Progress",
    progress: 65,
    stories: 12,
    completedStories: 8,
    priority: "High",
  },
  {
    id: "EPIC-2",
    title: "UI Redesign",
    description: "Redesign the user interface for better user experience",
    status: "In Progress",
    progress: 42,
    stories: 8,
    completedStories: 3,
    priority: "Medium",
  },
  {
    id: "EPIC-3",
    title: "Notifications",
    description: "Implement notification system for user alerts",
    status: "To Do",
    progress: 0,
    stories: 5,
    completedStories: 0,
    priority: "Medium",
  },
  {
    id: "EPIC-4",
    title: "Reporting",
    description: "Create comprehensive reporting system",
    status: "Done",
    progress: 100,
    stories: 10,
    completedStories: 10,
    priority: "Low",
  },
]

// Sample stories for the selected epic
const epicStories = [
  {
    id: "STORY-42",
    title: "Implement user authentication flow",
    status: "In Progress",
    priority: "High",
    effort: "8",
  },
  {
    id: "STORY-40",
    title: "Create API endpoints for user data",
    status: "To Do",
    priority: "Medium",
    effort: "13",
  },
  {
    id: "STORY-38",
    title: "Add pagination to user list",
    status: "To Do",
    priority: "Medium",
    effort: "5",
  },
  {
    id: "STORY-36",
    title: "Create user profile page",
    status: "Done",
    priority: "Medium",
    effort: "8",
  },
]

// Sample AI-generated stories
const aiGeneratedStories = [
  {
    id: "AI-STORY-1",
    title: "Implement password reset functionality",
    description: "Allow users to reset their password via email",
    effort: "5",
    priority: "Medium",
  },
  {
    id: "AI-STORY-2",
    title: "Add user role management",
    description: "Create interface for assigning and managing user roles",
    effort: "8",
    priority: "High",
  },
  {
    id: "AI-STORY-3",
    title: "Implement user search and filtering",
    description: "Allow admins to search and filter users by various criteria",
    effort: "5",
    priority: "Medium",
  },
]

export function EpicsContent() {
  const [selectedEpic, setSelectedEpic] = useState<(typeof epics)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [showAiSuggestions, setShowAiSuggestions] = useState(false)

  // Filter epics based on search query
  const filteredEpics = epics.filter((epic) => {
    return (
      epic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      epic.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8 w-full max-w-full">
      <div className="flex flex-col space-y-2 animate-in-fade">
        <h1 className="text-2xl font-bold tracking-tight">Epics</h1>
        <p className="text-muted-foreground">Manage large features and initiatives.</p>
      </div>

      <div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-in-fade w-full"
        style={{ animationDelay: "100ms" }}
      >
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search epics..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Button className="shrink-0 gap-1">
          <Plus className="h-4 w-4" />
          <span>Create Epic</span>
        </Button>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 animate-in-fade w-full"
        style={{ animationDelay: "200ms" }}
      >
        <div className="space-y-4 w-full">
          {filteredEpics.length === 0 ? (
            <Card className="w-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-[200px]">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">No Epics Found</h3>
                  <p className="text-sm text-muted-foreground">Try adjusting your search or create a new epic.</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            filteredEpics.map((epic) => (
              <Card
                key={epic.id}
                className={`cursor-pointer transition-all hover:shadow-md ${selectedEpic?.id === epic.id ? "border-primary" : ""} w-full`}
                onClick={() => setSelectedEpic(epic)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{epic.id}</Badge>
                    <Badge
                      variant="outline"
                      className={`
                        ${epic.status === "To Do" ? "bg-muted text-muted-foreground" : ""}
                        ${epic.status === "In Progress" ? "bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400" : ""}
                        ${epic.status === "Done" ? "bg-green-500/20 text-green-500 dark:bg-green-500/30 dark:text-green-400" : ""}
                      `}
                    >
                      {epic.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{epic.title}</CardTitle>
                  <CardDescription>{epic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{epic.progress}%</span>
                      </div>
                      <Progress value={epic.progress} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Stories: {epic.completedStories}/{epic.stories}
                      </span>
                      <Badge
                        variant="outline"
                        className={`
                          ${epic.priority === "Low" ? "bg-muted text-muted-foreground" : ""}
                          ${epic.priority === "Medium" ? "bg-orange-500/20 text-orange-500 dark:bg-orange-500/30 dark:text-orange-400" : ""}
                          ${epic.priority === "High" ? "bg-red-500/20 text-red-500 dark:bg-red-500/30 dark:text-red-400" : ""}
                        `}
                      >
                        {epic.priority}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {selectedEpic ? (
          <Card className="h-fit animate-in-slide-right w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{selectedEpic.id}</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Epic</DropdownMenuItem>
                    <DropdownMenuItem>Change Status</DropdownMenuItem>
                    <DropdownMenuItem>Change Priority</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete Epic</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardTitle>{selectedEpic.title}</CardTitle>
              <CardDescription>{selectedEpic.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <Tabs defaultValue="stories">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="stories">Stories</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="stories" className="space-y-4 pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Stories ({epicStories.length})</h3>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <Plus className="h-3 w-3" />
                      <span>Add Story</span>
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {epicStories.map((story) => (
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
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{story.effort} pts</Badge>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Collapsible
                      open={showAiSuggestions}
                      onOpenChange={setShowAiSuggestions}
                      className="border rounded-md"
                    >
                      <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-2">
                          <BrainCircuit className="h-4 w-4 text-primary" />
                          <span className="font-medium">AI-Suggested Stories</span>
                          <Badge variant="outline" className="bg-primary/10 text-primary">
                            {aiGeneratedStories.length}
                          </Badge>
                        </div>
                        {showAiSuggestions ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4 animate-in-fade">
                        <div className="space-y-3">
                          {aiGeneratedStories.map((story) => (
                            <div key={story.id} className="rounded-md border p-3 hover:bg-muted/50 transition-colors">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm font-medium">{story.title}</h4>
                                  <Badge variant="outline">{story.effort} pts</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">{story.description}</p>
                                <div className="flex items-center justify-between">
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
                                  <Button size="sm" variant="outline" className="h-7 text-xs">
                                    Add to Epic
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </TabsContent>
                <TabsContent value="details" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Status</p>
                      <Badge
                        variant="outline"
                        className={`
                          ${selectedEpic.status === "To Do" ? "bg-muted text-muted-foreground" : ""}
                          ${selectedEpic.status === "In Progress" ? "bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400" : ""}
                          ${selectedEpic.status === "Done" ? "bg-green-500/20 text-green-500 dark:bg-green-500/30 dark:text-green-400" : ""}
                        `}
                      >
                        {selectedEpic.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Priority</p>
                      <Badge
                        variant="outline"
                        className={`
                          ${selectedEpic.priority === "Low" ? "bg-muted text-muted-foreground" : ""}
                          ${selectedEpic.priority === "Medium" ? "bg-orange-500/20 text-orange-500 dark:bg-orange-500/30 dark:text-orange-400" : ""}
                          ${selectedEpic.priority === "High" ? "bg-red-500/20 text-red-500 dark:bg-red-500/30 dark:text-red-400" : ""}
                        `}
                      >
                        {selectedEpic.priority}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Stories</p>
                      <p className="text-sm">{selectedEpic.stories} total</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="text-sm">{selectedEpic.completedStories} stories</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Progress</p>
                      <div className="flex items-center gap-2">
                        <Progress value={selectedEpic.progress} className="h-2 w-24" />
                        <span className="text-sm">{selectedEpic.progress}%</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Created</p>
                      <p className="text-sm">May 10, 2025</p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <h3 className="text-sm font-medium">Description</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedEpic.description}. This epic covers all aspects of the feature including frontend,
                      backend, and testing.
                    </p>
                  </div>

                  <div className="pt-4 space-y-2">
                    <h3 className="text-sm font-medium">Goals</h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Implement all core functionality for {selectedEpic.title}</li>
                      <li>Ensure proper testing and documentation</li>
                      <li>Deliver a seamless user experience</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Edit Epic</Button>
              <Button className="gap-1">
                <Sparkles className="h-4 w-4" />
                <span>Decompose with AI</span>
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="h-fit animate-in-fade w-full">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-[400px]">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">No Epic Selected</h3>
                <p className="text-sm text-muted-foreground">Select an epic from the list to view its details.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
