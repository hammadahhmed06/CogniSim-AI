"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  BarChart3,
  BrainCircuit,
  Calendar,
  ChevronDown,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Settings,
  User2,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      current: pathname === "/dashboard",
    },
    {
      name: "Backlog",
      href: "/backlog",
      icon: ClipboardList,
      current: pathname === "/backlog",
    },
    {
      name: "Epics",
      href: "/epics",
      icon: BrainCircuit,
      current: pathname === "/epics",
    },
    {
      name: "Sprints",
      href: "/sprints",
      icon: Calendar,
      current: pathname === "/sprints",
    },
    {
      name: "Reports",
      href: "/reports",
      icon: BarChart3,
      current: pathname === "/reports",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
      current: pathname === "/settings",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden transition-colors duration-300">
        <Sidebar className="dark:bg-gradient-dark">
          <SidebarHeader>
            <Link href="/" className="flex items-center gap-2 px-2 dark:text-gradient">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary dark:animate-pulse-subtle">
                <span className="text-sm font-bold text-primary-foreground">C</span>
              </div>
              <span className="font-bold">CogniSim AI</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigation.map((item, index) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={item.current}
                    className="dark:transition-all dark:duration-300 dark:hover:bg-accent/20"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <Link href={item.href} className={item.current ? "dark:text-sidebar-primary" : ""}>
                      <item.icon className={`h-5 w-5 ${item.current ? "dark:text-sidebar-primary" : ""}`} />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="dark:hover:bg-accent/20">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span>John Doe</span>
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 dark:dark-card-shine">
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="flex items-center">
                        <User2 className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      {mounted && theme === "dark" ? (
                        <>
                          <Sun className="mr-2 h-4 w-4 dark:text-yellow-400 dark:animate-pulse-subtle" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="mr-2 h-4 w-4" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/" className="flex items-center text-destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log Out</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-1 flex-col w-full">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6 w-full backdrop-blur-sm dark:bg-background/80 transition-all duration-300">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden md:flex" asChild>
                <Link href="/feedback">
                  <span>Give Feedback</span>
                </Link>
              </Button>
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex dark:hover:bg-accent/20"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-yellow-400 animate-pulse-subtle" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}
            </div>
          </header>
          <main className="flex-1 w-full transition-opacity duration-300">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
