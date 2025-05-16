"use client"

import { ArrowRight, BarChart3, Calendar, CheckCircle2, Circle, Clock, Plus, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BrainCircuit } from "lucide-react"
import { PageLayout, PageHeader, PageTitle, PageDescription, PageContent } from "@/components/layouts/page-layout"

export function DashboardContent() {
  return (
    <PageLayout>
      <PageHeader>
        <PageTitle>Dashboard</PageTitle>
        <PageDescription>Welcome to CogniSim AI - Overview of your current sprint and project status.</PageDescription>
      </PageHeader>

      <PageContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sprint Widget */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Current Sprint</CardTitle>
              <CardDescription>Sprint #24 - May 13-27</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
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
                      <span>24 points</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full gap-1">
                <span>View Sprint</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </CardFooter>
          </Card>

          {/* Backlog Health Widget */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Backlog Health</CardTitle>
              <CardDescription>Story status distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Circle className="h-3 w-3 fill-muted-foreground text-muted-foreground" />
                      <span className="text-sm">To Do</span>
                    </div>
                    <p className="font-medium">24 stories</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-blue-500" />
                      <span className="text-sm">In Progress</span>
                    </div>
                    <p className="font-medium">12 stories</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span className="text-sm">Done</span>
                    </div>
                    <p className="font-medium">36 stories</p>
                  </div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="flex h-full">
                    <div className="h-full w-[33%] bg-muted-foreground"></div>
                    <div className="h-full w-[17%] bg-blue-500"></div>
                    <div className="h-full w-[50%] bg-green-500"></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full gap-1">
                <span>View Backlog</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </CardFooter>
          </Card>

          {/* AI Suggestions Widget */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Cognitive Insights</CardTitle>
              <CardDescription>AI-powered recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-md border p-3">
                    <BrainCircuit className="mt-0.5 h-4 w-4 text-primary" />
                    <div className="space-y-1">
                      <p className="text-sm">Consider breaking down "User Authentication" epic into smaller stories</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          Epic
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Complexity
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-md border p-3">
                    <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                    <div className="space-y-1">
                      <p className="text-sm">Sprint capacity is 15% higher than team's average velocity</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          Sprint
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Planning
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full gap-1">
                <span>View All Insights</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 space-y-4">
          <h2 className="text-lg font-medium">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Create Story</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              <span>Plan Sprint</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Generate Report</span>
            </Button>
          </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}
