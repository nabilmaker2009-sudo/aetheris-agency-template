"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout-wrapper"

export function Newsletter() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const target = email.trim()
    if (!target) {
      setStatus("error")
      setMessage("Please enter your email to subscribe.")
      return
    }
    const allowedDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "icloud.com",
      "proton.me",
      "protonmail.com",
    ]
    const domain = target.split("@")[1]?.toLowerCase()
    if (!domain || !allowedDomains.includes(domain)) {
      setStatus("error")
      setMessage("Please use a Gmail, Yahoo, Outlook, Hotmail, iCloud, or Proton email.")
      return
    }
    setStatus("success")
    setMessage("Thanks for subscribing. We'll send the next brief soon.")
    setEmail("")
  }

  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--aetheris-iris)]/30 via-[var(--aetheris-void)] to-[var(--aetheris-spark)]/30" />
      <div className="absolute -top-10 right-10 size-48 bg-[var(--aetheris-flare)]/30 blur-3xl rounded-full" />
      <div className="relative flex flex-col items-center text-center text-foreground">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gradient text-balance">
          The Aetheris Insider Brief
        </h2>
        <p className="mt-4 max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl">
          High-signal insights on design, growth, and digital authority. No fluff. No spam.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full max-w-xl flex-col gap-2 sm:flex-row"
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your work email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputMode="email"
            autoComplete="email"
            className="h-11 sm:h-12 w-full flex-1 rounded-md border border-border bg-background/60 px-4 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <Button
            type="submit"
            size="lg"
            className="h-11 sm:h-12 px-8 font-bold"
          >
            Subscribe <Send className="ml-2 size-4" />
          </Button>
        </form>
        {status !== "idle" && (
          <p
            className={`mt-4 text-sm ${
              status === "success" ? "text-foreground" : "text-destructive"
            }`}
          >
            {message}
          </p>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          We respect your inbox. Read our privacy policy.
        </p>
      </div>
    </Section>
  )
}
