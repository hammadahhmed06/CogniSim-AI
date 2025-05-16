"use client"

import type React from "react"

import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex flex-1 items-center justify-center bg-muted/20 px-4 py-12">{children}</main>
      <SiteFooter />
    </div>
  )
}
