"use client"

import { Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

// Sample data
const velocityData = [
  { name: "Sprint 19", velocity: 32 },
  { name: "Sprint 20", velocity: 40 },
  { name: "Sprint 21", velocity: 35 },
  { name: "Sprint 22", velocity: 42 },
  { name: "Sprint 23", velocity: 45 },
  { name: "Sprint 24", velocity: 42 },
]

const burndownData = [
  { name: "Day 1", remaining: 42, ideal: 42 },
  { name: "Day 2", remaining: 40, ideal: 39 },
  { name: "Day 3", remaining: 38, ideal: 36 },
  { name: "Day 4", remaining: 35, ideal: 33 },
  { name: "Day 5", remaining: 33, ideal: 30 },
  { name: "Day 6", remaining: 30, ideal: 27 },
  { name: "Day 7", remaining: 28, ideal: 24 },
  { name: "Day 8", remaining: 25, ideal: 21 },
  { name: "Day 9", remaining: 24, ideal: 18 },
  { name: "Day 10", remaining: 24, ideal: 15 },
]

const storyStatusData = [
  { name: "To Do", value: 24 },
  { name: "In Progress", value: 12 },
  { name: "Done", value: 36 },
]

export function ReportsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Analyze team performance and track project metrics.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Select defaultValue="sprint24">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Sprint" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sprint24">Sprint 24</SelectItem>
              <SelectItem value="sprint23">Sprint 23</SelectItem>
              <SelectItem value="sprint22">Sprint 22</SelectItem>
              <SelectItem value="sprint21">Sprint 21</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </div>

      <Tabs defaultValue="velocity" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="velocity">Velocity</TabsTrigger>
          <TabsTrigger value="burndown">Burndown</TabsTrigger>
          <TabsTrigger value="status">Status</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="velocity" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Velocity</CardTitle>
              <CardDescription>Story points completed per sprint over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={velocityData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="velocity" fill="#6366F1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Average velocity over the last 6 sprints: <strong>39.3 points</strong>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="burndown" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Sprint Burndown</CardTitle>
              <CardDescription>Remaining story points over the sprint duration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={burndownData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="remaining" stroke="#6366F1" strokeWidth={2} />
                    <Line type="monotone" dataKey="ideal" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Current sprint is <strong>slightly behind</strong> the ideal burndown rate
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="status" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Story Status Distribution</CardTitle>
              <CardDescription>Current distribution of stories by status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={storyStatusData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#6366F1" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                <strong>50%</strong> of stories are completed, <strong>17%</strong> in progress, and{" "}
                <strong>33%</strong> to do
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="insights" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Cognitive Insights</CardTitle>
              <CardDescription>AI-powered analysis of team performance patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Velocity Pattern Analysis</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your team's velocity has been consistent over the last 3 sprints, but shows a pattern of declining
                    in the middle of each sprint. Consider implementing daily stand-ups focused on blockers to maintain
                    momentum.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Story Complexity Insights</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Stories with the "API" tag consistently take 20% longer than estimated. Consider adjusting
                    estimation for these stories or breaking them down further.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Team Capacity Optimization</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Based on historical data, your team performs optimally with 35-40 story points per sprint. Current
                    sprint is planned for 42 points, which may lead to incomplete stories.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Insights are generated using CogniSim's cognitive intelligence engine analyzing your team's historical
                data.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
