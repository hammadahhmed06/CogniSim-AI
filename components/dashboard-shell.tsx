"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { MainNav } from "@/components/main-nav"
import { SidebarInset } from "@/components/ui/sidebar"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainNav />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <SidebarInset className="bg-background w-full overflow-y-auto">{children}</SidebarInset>
      </div>
    </div>
  )
}
