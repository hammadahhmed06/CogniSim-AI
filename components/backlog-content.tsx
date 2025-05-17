"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const stories = [
  {
    id: "STORY-42",
    title: "Implement user authentication flow",
    status: "In Progress",
    priority: "High",
    effort: "8",
    assignee: "John Doe",
    epic: "User Management",
    aiSuggestion: "Consider breaking this down further",
  },
  {
    id: "STORY-41",
    title: "Design dashboard layout",
    status: "Done",
    priority: "Medium",
    effort: "5",
    assignee: "Jane Smith",
    epic: "UI Redesign",
    aiSuggestion: null,
  },
  {
    id: "STORY-40",
    title: "Create API endpoints for user data",
    status: "To Do",
    priority: "Medium",
    effort: "13",
    assignee: "Unassigned",
    epic: "User Management",
    aiSuggestion: null,
  },
  {
    id: "STORY-39",
    title: "Implement dark mode toggle",
    status: "In Progress",
    priority: "Low",
    effort: "3",
    assignee: "Alex Johnson",
    epic: "UI Redesign",
    aiSuggestion: null,
  },
  {
    id: "STORY-38",
    title: "Add pagination to user list",
    status: "To Do",
    priority: "Medium",
    effort: "5",
    assignee: "Unassigned",
    epic: "User Management",
    aiSuggestion: "This could be combined with filtering",
  },
  {
    id: "STORY-37",
    title: "Implement email notifications",
    status: "To Do",
    priority: "High",
    effort: "8",
    assignee: "John Doe",
    epic: "Notifications",
    aiSuggestion: null,
  },
  {
    id: "STORY-36",
    title: "Create user profile page",
    status: "Done",
    priority: "Medium",
    effort: "8",
    assignee: "Jane Smith",
    epic: "User Management",
    aiSuggestion: null,
  },
  {
    id: "STORY-35",
    title: "Add form validation",
    status: "Done",
    priority: "Medium",
    effort: "5",
    assignee: "Alex Johnson",
    epic: "UI Redesign",
    aiSuggestion: null,
  },
]

export function BacklogContent() {
  const [selectedStory, setSelectedStory] = useState<(typeof stories)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  // Filter stories based on search query and filters
  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || story.status === statusFilter
    const matchesPriority = priorityFilter === "all" || story.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col space-y-2 animate-in-fade">
        <h1 className="text-2xl font-bold tracking-tight">Backlog</h1>
        <p className="text-muted-foreground">Manage and organize your user stories.</p>
      </div>

      <div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-in-fade"
        style={{ animationDelay: "100ms" }}
      >
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search stories..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <div className="p-2">
                <div className="space-y-1">
                  <p className="text-xs font-medium">Status</p>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="To Do">To Do</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-xs font-medium">Priority</p>
                  <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon" className="shrink-0">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Customize</span>
          </Button>
        </div>
        <Button className="shrink-0 gap-1">
          <Plus className="h-4 w-4" />
          <span>Add Story</span>
        </Button>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-6 animate-in-fade"
        style={{ animationDelay: "200ms" }}
      >
        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[100px]">Priority</TableHead>
                <TableHead className="w-[80px]">Effort</TableHead>
                <TableHead className="w-[120px]">Assignee</TableHead>
                <TableHead className="w-[100px]">Epic</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">
                    No stories found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredStories.map((story) => (
                  <TableRow
                    key={story.id}
                    className={`cursor-pointer transition-colors hover:bg-muted/50 ${selectedStory?.id === story.id ? "bg-muted/50" : ""}`}
                    onClick={() => setSelectedStory(story)}
                  >
                    <TableCell className="font-medium">{story.id.split("-")[1]}</TableCell>
                    <TableCell>
                      <div className="flex items-start gap-2">
                        <span>{story.title}</span>
                        {story.aiSuggestion && (
                          <Badge variant="outline" className="bg-primary/10 text-primary">
                            AI
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>{story.effort}</TableCell>
                    <TableCell>{story.assignee}</TableCell>
                    <TableCell>{story.epic}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Assign</DropdownMenuItem>
                          <DropdownMenuItem>Move to Sprint</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {selectedStory ? (
          <Card className="h-fit animate-in-slide-right">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{selectedStory.id}</Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="text-xl font-semibold">{selectedStory.title}</h2>
                </div>

                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Status</p>
                        <Badge
                          variant="outline"
                          className={`
                            ${selectedStory.status === "To Do" ? "bg-muted text-muted-foreground" : ""}
                            ${selectedStory.status === "In Progress" ? "bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400" : ""}
                            ${selectedStory.status === "Done" ? "bg-green-500/20 text-green-500 dark:bg-green-500/30 dark:text-green-400" : ""}
                          `}
                        >
                          {selectedStory.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Priority</p>
                        <Badge
                          variant="outline"
                          className={`
                            ${selectedStory.priority === "Low" ? "bg-muted text-muted-foreground" : ""}
                            ${selectedStory.priority === "Medium" ? "bg-orange-500/20 text-orange-500 dark:bg-orange-500/30 dark:text-orange-400" : ""}
                            ${selectedStory.priority === "High" ? "bg-red-500/20 text-red-500 dark:bg-red-500/30 dark:text-red-400" : ""}
                          `}
                        >
                          {selectedStory.priority}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Effort</p>
                        <p className="text-sm">{selectedStory.effort} points</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Epic</p>
                        <p className="text-sm">{selectedStory.epic}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Assignee</p>
                        <p className="text-sm">{selectedStory.assignee}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Sprint</p>
                        <p className="text-sm">Unassigned</p>
                      </div>
                    </div>

                    {selectedStory.aiSuggestion && (
                      <div className="rounded-lg border bg-primary/5 p-3 mt-4">
                        <div className="flex items-start gap-2">
                          <div className="space-y-1">
                            <p className="text-sm font-medium flex items-center gap-1">
                              <Badge variant="outline" className="bg-primary/10 text-primary">
                                AI Suggestion
                              </Badge>
                            </p>
                            <p className="text-sm">{selectedStory.aiSuggestion}</p>
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
                    )}
                  </TabsContent>
                  <TabsContent value="description" className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      As a user, I want to be able to {selectedStory.title.toLowerCase()} so that I can have a better
                      experience using the application.
                    </p>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium">Acceptance Criteria:</p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Criterion 1 for {selectedStory.title}</li>
                        <li>Criterion 2 for {selectedStory.title}</li>
                        <li>Criterion 3 for {selectedStory.title}</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="activity" className="pt-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                          <span className="text-xs font-medium">JD</span>
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">John Doe</span> changed status to{" "}
                            <Badge
                              variant="outline"
                              className="bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400"
                            >
                              In Progress
                            </Badge>
                          </p>
                          <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                          <span className="text-xs font-medium">JS</span>
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Jane Smith</span> added this to Epic{" "}
                            <span className="font-medium">{selectedStory.epic}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                          <span className="text-xs font-medium">AI</span>
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">CogniSim AI</span> estimated this story at{" "}
                            <span className="font-medium">{selectedStory.effort} points</span>
                          </p>
                          <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button>Move to Sprint</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="h-fit animate-in-fade">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-[400px]">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">No Story Selected</h3>
                <p className="text-sm text-muted-foreground">Select a story from the list to view its details.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
