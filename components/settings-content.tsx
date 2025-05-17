"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"

export function SettingsContent() {
  const { theme, setTheme } = useTheme()
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)
  const [isEmailDigestEnabled, setIsEmailDigestEnabled] = useState(true)
  const [isAiSuggestionsEnabled, setIsAiSuggestionsEnabled] = useState(true)

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col space-y-2 animate-in-fade">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="animate-in-fade" style={{ animationDelay: "100ms" }}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile picture.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" defaultValue="Product Manager" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Write a short bio about yourself..."
                  defaultValue="Product Manager with 5+ years of experience in Agile development. Passionate about AI and automation."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Information</CardTitle>
              <CardDescription>Update your team and role information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="team">Team</Label>
                  <Select defaultValue="product">
                    <SelectTrigger id="team">
                      <SelectValue placeholder="Select team" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Product Team</SelectItem>
                      <SelectItem value="engineering">Engineering Team</SelectItem>
                      <SelectItem value="design">Design Team</SelectItem>
                      <SelectItem value="marketing">Marketing Team</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="product-manager">
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-manager">Product Manager</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="qa">QA Engineer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="pst">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="account" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="johndoe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-account">Email</Label>
                <Input id="email-account" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>Irreversible and destructive actions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-destructive/20 p-4">
                <h3 className="text-lg font-medium text-destructive">Delete Account</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Once you delete your account, there is no going back. This action is permanent and cannot be undone.
                </p>
                <Button variant="destructive" className="mt-4">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Customize the appearance of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Color Theme</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div
                    className={`flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors ${theme === "light" ? "border-primary bg-primary/5" : ""}`}
                    onClick={() => setTheme("light")}
                  >
                    <div className="h-16 w-full rounded-md bg-[#FFFFFF] border"></div>
                    <span className="text-sm font-medium">Light</span>
                  </div>
                  <div
                    className={`flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors ${theme === "dark" ? "border-primary bg-primary/5" : ""}`}
                    onClick={() => setTheme("dark")}
                  >
                    <div className="h-16 w-full rounded-md bg-[#1F2937] border border-muted"></div>
                    <span className="text-sm font-medium">Dark</span>
                  </div>
                  <div
                    className={`flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors ${theme === "system" ? "border-primary bg-primary/5" : ""}`}
                    onClick={() => setTheme("system")}
                  >
                    <div className="h-16 w-full rounded-md bg-gradient-to-r from-[#FFFFFF] to-[#1F2937] border"></div>
                    <span className="text-sm font-medium">System</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Sidebar Position</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors border-primary bg-primary/5">
                    <div className="h-16 w-full rounded-md border flex">
                      <div className="w-1/4 bg-muted rounded-l-md"></div>
                      <div className="flex-1"></div>
                    </div>
                    <span className="text-sm font-medium">Left</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors">
                    <div className="h-16 w-full rounded-md border flex">
                      <div className="flex-1"></div>
                      <div className="w-1/4 bg-muted rounded-r-md"></div>
                    </div>
                    <span className="text-sm font-medium">Right</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Density</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors">
                    <div className="h-16 w-full rounded-md border flex flex-col justify-between p-1">
                      <div className="h-2 w-full rounded-sm bg-muted"></div>
                      <div className="h-2 w-full rounded-sm bg-muted"></div>
                      <div className="h-2 w-full rounded-sm bg-muted"></div>
                    </div>
                    <span className="text-sm font-medium">Compact</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors border-primary bg-primary/5">
                    <div className="h-16 w-full rounded-md border flex flex-col justify-between p-2">
                      <div className="h-2 w-full rounded-sm bg-muted"></div>
                      <div className="h-2 w-full rounded-sm bg-muted"></div>
                      <div className="h-2 w-full rounded-sm bg-muted"></div>
                    </div>
                    <span className="text-sm font-medium">Default</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors">
                    <div className="h-16 w-full rounded-md border flex flex-col justify-between p-3">
                      <div className="h-2 w-full rounded-sm bg-muted"></div>
                      <div className="h-2 w-full rounded-sm bg-muted"></div>
                    </div>
                    <span className="text-sm font-medium">Comfortable</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">General Notifications</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Enable Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about your projects and activities.
                    </p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={isNotificationsEnabled}
                    onCheckedChange={setIsNotificationsEnabled}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-digest">Email Digest</Label>
                    <p className="text-sm text-muted-foreground">Receive a daily digest of all activities via email.</p>
                  </div>
                  <Switch id="email-digest" checked={isEmailDigestEnabled} onCheckedChange={setIsEmailDigestEnabled} />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">AI Notifications</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ai-suggestions">AI Suggestions</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when AI generates new suggestions.
                    </p>
                  </div>
                  <Switch
                    id="ai-suggestions"
                    checked={isAiSuggestionsEnabled}
                    onCheckedChange={setIsAiSuggestionsEnabled}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Project Notifications</h3>
                <div className="space-y-2">
                  <Label>Notify me about:</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="story-updates" defaultChecked />
                      <Label htmlFor="story-updates">Story updates</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="sprint-changes" defaultChecked />
                      <Label htmlFor="sprint-changes">Sprint changes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="mentions" defaultChecked />
                      <Label htmlFor="mentions">Mentions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="comments" defaultChecked />
                      <Label htmlFor="comments">Comments</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="epic-updates" />
                      <Label htmlFor="epic-updates">Epic updates</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="report-generation" />
                      <Label htmlFor="report-generation">Report generation</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
