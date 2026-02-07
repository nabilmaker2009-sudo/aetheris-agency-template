"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout-wrapper"

export function Newsletter() {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const target = email.trim()
    if (!target) return
    window.location.href = `/contact?email=${encodeURIComponent(target)}`
  }

  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--aetheris-iris)]/30 via-[var(--aetheris-void)] to-[var(--aetheris-spark)]/30" />
      <div className="absolute -top-10 right-10 size-48 bg-[var(--aetheris-flare)]/30 blur-3xl rounded-full" />
      <div className="relative flex flex-col items-center text-center text-foreground">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-gradient">
          The Aetheris Insider Brief
        </h2>
        <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
          High-signal insights on design, growth, and digital authority. No fluff. No spam.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your work email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 flex-1 rounded-md border border-border bg-background/60 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 px-8 font-bold"
          >
            Subscribe <Send className="ml-2 size-4" />
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          We respect your inbox. Read our privacy policy.
        </p>
      </div>
    </Section>
  )
}
