"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-[1.5rem] border backdrop-blur-md",
        scrolled
          ? "bg-background/85 border-border py-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          : "bg-background/50 border-border dark:border-white/10 py-3 md:py-4 shadow-none"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 md:gap-6 min-h-[3.5rem] md:min-h-[4rem]">
          <Link href="/" prefetch className="flex items-center space-x-3 group shrink-0">
            <div className="size-11 rounded-2xl bg-gradient-to-br from-[var(--aetheris-iris)] to-[var(--aetheris-spark)] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform">
              <span className="text-xl font-black text-background">{siteConfig.logo[0]}</span>
            </div>
            <span className="text-lg md:text-xl lg:text-2xl font-black tracking-[0.08em] uppercase text-foreground">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-6 min-w-0 flex-wrap">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch
                className={cn(
                  "text-[0.6rem] sm:text-[0.65rem] xl:text-xs font-semibold tracking-[0.16em] xl:tracking-[0.25em] uppercase transition-colors hover:text-primary relative py-1 whitespace-nowrap",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <ThemeToggle />
            <Button size="sm" variant="shiny" className="px-4 lg:px-5 hidden xl:inline-flex" asChild>
              <Link href="/contact" prefetch>Request Proposal</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="ml-auto flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex rounded-full"
            >
              <Link href="/contact" prefetch aria-label="Request proposal">
                <Sparkles className="size-4 text-primary" />
              </Link>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden border-t bg-background/95 backdrop-blur-xl px-4 pb-6 pt-2 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary px-2 py-1 rounded-lg hover:bg-white/5",
                    pathname === link.href ? "text-primary bg-white/5" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full h-12 text-lg font-bold" asChild>
                <Link href="/contact" prefetch onClick={() => setIsOpen(false)}>
                  Request Proposal
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
