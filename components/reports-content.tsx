"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BarChart3, Calendar, Download, LineChart, PieChart, Plus, Share2, Sparkles } from "lucide-react"

export function ReportsContent() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null)

  const reports = [
    {
      id: "sprint-summary",
      title: "Sprint Summary",
      description: "Overview of sprint performance and metrics",
      icon: BarChart,
    },
    {
      id: "velocity-trend",
      title: "Velocity Trend",
      description: "Team velocity across multiple sprints",
      icon: LineChart,
    },
    {
      id: "story-distribution",
      title: "Story Distribution",
      description: "Breakdown of stories by status and type",
      icon: PieChart,
    },
    {
      id: "team-capacity",
      title: "Team Capacity",
      description: "Analysis of team capacity and allocation",
      icon: BarChart3,
    },
  ]

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col space-y-2 animate-in-fade">
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Generate and view project analytics and insights.</p>
      </div>

      <div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-in-fade"
        style={{ animationDelay: "100ms" }}
      >
        <div className="flex-1"></div>
        <Button className="shrink-0 gap-1">
          <Plus className="h-4 w-4" />
          <span>Create Custom Report</span>
        </Button>
      </div>

      {selectedReport ? (
        <div className="animate-in-fade" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" onClick={() => setSelectedReport(null)}>
              Back to Reports
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
              <Button variant="outline" className="gap-1">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
              <Button className="gap-1">
                <Sparkles className="h-4 w-4" />
                <span>AI Insights</span>
              </Button>
            </div>
          </div>

          {selectedReport === "sprint-summary" && (
            <Card>
              <CardHeader>
                <CardTitle>Sprint Summary</CardTitle>
                <CardDescription>Sprint #24 (May 13 - May 27, 2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="stories">Stories</TabsTrigger>
                    <TabsTrigger value="burndown">Burndown</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Planned Points</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">48</div>
                          <p className="text-xs text-muted-foreground">out of 50 capacity</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Completed Points</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">20</div>
                          <p className="text-xs text-muted-foreground">42% completion rate</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Velocity</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">32</div>
                          <p className="text-xs text-muted-foreground">points per sprint</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-sm font-medium mb-4">Story Status Distribution</h3>
                      <div className="h-64 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">[Bar Chart Visualization]</div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-sm font-medium mb-4">Team Member Contribution</h3>
                      <div className="h-64 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">[Horizontal Bar Chart Visualization]</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="stories" className="space-y-4 pt-4">
                    <div className="rounded-lg border">
                      <div className="p-4 border-b">
                        <h3 className="text-sm font-medium">Stories Overview</h3>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Total Stories</p>
                            <p className="text-2xl font-bold">12</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Completed</p>
                            <p className="text-2xl font-bold">5</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">In Progress</p>
                            <p className="text-2xl font-bold">4</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Not Started</p>
                            <p className="text-2xl font-bold">3</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-sm font-medium mb-4">Story Completion Rate</h3>
                      <div className="h-64 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">[Pie Chart Visualization]</div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-sm font-medium mb-4">Story Points by Priority</h3>
                      <div className="h-64 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">[Stacked Bar Chart Visualization]</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="burndown" className="space-y-4 pt-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="text-sm font-medium mb-4">Sprint Burndown Chart</h3>
                      <div className="h-80 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">[Line Chart Visualization]</div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-sm font-medium mb-2">AI Analysis</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        CogniSim AI has analyzed your sprint burndown and identified the following insights:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                        <li>The team is currently behind schedule based on the ideal burndown rate.</li>
                        <li>There was a significant increase in story completion on May 20th.</li>
                        <li>Based on current trends, the team is projected to complete 85% of planned work.</li>
                        <li>Consider reducing scope or extending the sprint to ensure quality delivery.</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}

          {selectedReport === "velocity-trend" && (
            <Card>
              <CardHeader>
                <CardTitle>Velocity Trend</CardTitle>
                <CardDescription>Team velocity across the last 6 sprints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border p-4 mb-6">
                  <h3 className="text-sm font-medium mb-4">Velocity Over Time</h3>
                  <div className="h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">[Line Chart Visualization]</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium mb-4">Planned vs Actual Velocity</h3>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">[Bar Chart Visualization]</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium mb-2">AI Analysis</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      CogniSim AI has analyzed your velocity trends and identified the following insights:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>Your team's velocity has been steadily increasing over the last 4 sprints.</li>
                      <li>There was a significant drop in Sprint 22, likely due to the holiday period.</li>
                      <li>The team is becoming more consistent in meeting planned velocity.</li>
                      <li>Recommended capacity for next sprint: 35-40 points based on the trend analysis.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedReport === "story-distribution" && (
            <Card>
              <CardHeader>
                <CardTitle>Story Distribution</CardTitle>
                <CardDescription>Breakdown of stories by various attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium mb-4">Stories by Status</h3>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">[Pie Chart Visualization]</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium mb-4">Stories by Epic</h3>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">[Donut Chart Visualization]</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium mb-4">Stories by Priority</h3>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">[Bar Chart Visualization]</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium mb-4">Stories by Assignee</h3>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">[Horizontal Bar Chart Visualization]</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedReport === "team-capacity" && (
            <Card>
              <CardHeader>
                <CardTitle>Team Capacity</CardTitle>
                <CardDescription>Analysis of team capacity and allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border p-4 mb-6">
                  <h3 className="text-sm font-medium mb-4">Team Member Allocation</h3>
                  <div className="h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">[Stacked Bar Chart Visualization]</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium mb-4">Capacity Utilization</h3>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">[Gauge Chart Visualization]</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium mb-2">AI Analysis</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      CogniSim AI has analyzed your team capacity and identified the following insights:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>John Doe is currently overallocated with 20 points assigned.</li>
                      <li>Jane Smith has capacity for additional work (currently at 60% capacity).</li>
                      <li>The team's overall capacity utilization is at 85%, which is optimal.</li>
                      <li>Consider redistributing 2-3 stories from John to Jane to balance workload.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-in-fade"
          style={{ animationDelay: "200ms" }}
        >
          {reports.map((report) => (
            <Card
              key={report.id}
              className="cursor-pointer transition-all hover:shadow-md"
              onClick={() => setSelectedReport(report.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-primary/10 p-2">
                    <report.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Calendar className="h-4 w-4" />
                    <span className="sr-only">Select date range</span>
                  </Button>
                </div>
                <CardTitle className="text-xl">{report.title}</CardTitle>
                <CardDescription>{report.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="h-40 flex items-center justify-center rounded-md border">
                  <div className="text-center text-muted-foreground">[Report Preview]</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Report</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
