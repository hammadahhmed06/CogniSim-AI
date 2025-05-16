"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return <div className={cn("space-y-8 p-4 md:p-6 lg:p-8", className)}>{children}</div>
}

export function PageHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col space-y-2">{children}</div>
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-bold tracking-tight">{children}</h1>
}

export function PageDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground">{children}</p>
}

export function PageContent({ children, className }: PageLayoutProps) {
  return <div className={cn("mt-6", className)}>{children}</div>
}
