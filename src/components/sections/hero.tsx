"use client"

import Link from "next/link"
import { Sora, DM_Sans } from "next/font/google"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout-wrapper"

interface HeroProps {
  showPricing?: boolean
}

const heroDisplay = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
})

const heroBody = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
})

export function Hero({ showPricing = true }: HeroProps) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 180])
  const y2 = useTransform(scrollY, [0, 500], [0, -140])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  }

  return (
    <Section className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-36" container={false}>
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-24 left-0 w-[520px] h-[520px] bg-[var(--aetheris-iris)]/20 blur-[140px] rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 right-10 w-[620px] h-[620px] bg-[var(--aetheris-spark)]/20 blur-[160px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`mb-6 inline-flex items-center gap-3 rounded-full aetheris-badge px-5 py-2 text-overline text-foreground/80 mx-auto ${heroBody.className}`}
          >
            Aetheris // Premium Digital Agency
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`fluid-h1 text-foreground tracking-tight text-balance leading-[1.02] ${heroDisplay.className}`}
          >
            We Forge Digital Worlds
            <span className="block mt-2 text-gradient">That Feel Unmistakably Premium</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed ${heroBody.className}`}
          >
            Aetheris is the studio elite founders call when they need authority, conversion, and brand gravity to hit all at once.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            {showPricing ? (
              <Button size="lg" variant="shiny" className="h-14 px-10 text-lg rounded-2xl" asChild>
                <Link href="/contact">
                  Start a Project <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            ) : (
              <Button size="lg" variant="shiny" className="h-14 px-10 text-lg rounded-2xl" asChild>
                <Link href="/contact">
                  Request a Proposal <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            )}
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-2xl border-border dark:border-white/10 hover:bg-accent dark:hover:bg-white/5 transition-all" asChild>
              <Link href="/portfolio">
                View Case Studies
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-card/70 backdrop-blur-xl glow-card">
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--aetheris-iris)]/15 via-transparent to-[var(--aetheris-spark)]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 rounded-full bg-background/80 px-6 py-3 text-sm font-bold uppercase tracking-widest text-foreground shadow-lg shadow-black/10"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Play className="size-5 fill-current" />
                  </span>
                  Watch the Showreel
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-center lg:text-left">
            <div>
              <p className="text-overline text-muted-foreground">Aetheris Showreel</p>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">2:18 / Brand + Motion</h3>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Strategy led. Cinematic delivery. Conversion focused.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground items-center lg:items-start">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-primary" />
                Premium narrative systems
              </div>
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-primary" />
                Motion direction + polish
              </div>
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-primary" />
                Launch-ready infrastructure
              </div>
            </div>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-2xl" asChild>
              <Link href="/contact">Request Proposal</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
