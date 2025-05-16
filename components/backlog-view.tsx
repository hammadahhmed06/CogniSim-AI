"use client"

import { useState } from "react"
import { Filter, Plus, Search, SlidersHorizontal, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageLayout, PageHeader, PageTitle, PageDescription, PageContent } from "@/components/layouts/page-layout"

// Sample data
const stories = [
  {
    id: "STORY-123",
    title: "Implement user authentication flow",
    status: "In Progress",
    priority: "High",
    effort: "5",
    assignee: "John Doe",
    tags: ["Frontend", "Security"],
  },
  {
    id: "STORY-124",
    title: "Create dashboard analytics widgets",
    status: "To Do",
    priority: "Medium",
    effort: "3",
    assignee: "Jane Smith",
    tags: ["Frontend", "UI"],
  },
  {
    id: "STORY-125",
    title: "API integration for user profiles",
    status: "To Do",
    priority: "Medium",
    effort: "8",
    assignee: "Alex Johnson",
    tags: ["Backend", "API"],
  },
  {
    id: "STORY-126",
    title: "Optimize database queries for reports",
    status: "Done",
    priority: "Low",
    effort: "3",
    assignee: "Sarah Williams",
    tags: ["Backend", "Performance"],
  },
  {
    id: "STORY-127",
    title: "Design system component library",
    status: "In Progress",
    priority: "High",
    effort: "13",
    assignee: "Mike Brown",
    tags: ["Design", "UI"],
  },
  {
    id: "STORY-128",
    title: "Implement dark mode support",
    status: "To Do",
    priority: "Low",
    effort: "5",
    assignee: "John Doe",
    tags: ["Frontend", "UI"],
  },
  {
    id: "STORY-129",
    title: "Setup CI/CD pipeline",
    status: "Done",
    priority: "High",
    effort: "8",
    assignee: "Alex Johnson",
    tags: ["DevOps"],
  },
  {
    id: "STORY-130",
    title: "Create onboarding tutorial",
    status: "To Do",
    priority: "Medium",
    effort: "5",
    assignee: "Jane Smith",
    tags: ["UX", "Content"],
  },
]

export function BacklogView() {
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

  const filteredStories =
    selectedTab === "all"
      ? stories
      : stories.filter((story) => {
          if (selectedTab === "todo") return story.status === "To Do"
          if (selectedTab === "inprogress") return story.status === "In Progress"
          if (selectedTab === "done") return story.status === "Done"
          return true
        })

  return (
    <PageLayout>
      <PageHeader>
        <PageTitle>Backlog</PageTitle>
        <PageDescription>Manage and prioritize your user stories.</PageDescription>
      </PageHeader>

      <PageContent>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full max-w-sm items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search stories..." className="w-full pl-8" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Status</DropdownMenuLabel>
                <DropdownMenuCheckboxItem checked>To Do</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>In Progress</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Done</DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Priority</DropdownMenuLabel>
                <DropdownMenuCheckboxItem checked>High</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Medium</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Low</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Sort</span>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <BrainCircuit className="h-4 w-4" />
              <span>AI Assist</span>
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Story</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-6 w-full" onValueChange={setSelectedTab}>
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="todo">To Do</TabsTrigger>
            <TabsTrigger value="inprogress">In Progress</TabsTrigger>
            <TabsTrigger value="done">Done</TabsTrigger>
          </TabsList>
          <TabsContent value={selectedTab} className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="w-[120px]">Status</TableHead>
                    <TableHead className="w-[120px]">Priority</TableHead>
                    <TableHead className="w-[80px]">Effort</TableHead>
                    <TableHead className="w-[150px]">Assignee</TableHead>
                    <TableHead className="w-[200px]">Tags</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStories.map((story) => (
                    <TableRow key={story.id} className="group cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{story.id}</TableCell>
                      <TableCell>{story.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`${getStatusColor(story.status)}`}>
                          {story.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`${getPriorityColor(story.priority)}`}>
                          {story.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{story.effort}</TableCell>
                      <TableCell>{story.assignee}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {story.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </PageContent>
    </PageLayout>
  )
}
