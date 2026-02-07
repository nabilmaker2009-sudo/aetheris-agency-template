"use client"

import Link from "next/link"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout-wrapper"
import { siteConfig } from "@/data/site"

interface HeroProps {
  showPricing?: boolean
}

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
    <Section className="relative min-h-screen flex items-center overflow-hidden pt-28" container={false}>
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
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center"
        >
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full aetheris-badge text-overline text-foreground/80">
                {siteConfig.name} // Cinematic Agency Systems
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-hero text-display uppercase text-foreground"
            >
              We Forge Digital Worlds That Feel
              <span className="block text-gradient">Unreasonably Expensive</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Aetheris is the studio elite founders call when they need authority, conversion, and brand gravity to hit all at once.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
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

            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-foreground">12+</span>
                <span>International launches</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-foreground">$480M</span>
                <span>Client valuation impact</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-foreground">98%</span>
                <span>Retention rate</span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[var(--aetheris-iris)]/30 via-transparent to-[var(--aetheris-spark)]/30 blur-2xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-border dark:border-white/10 bg-card/70 backdrop-blur-xl glow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[var(--aetheris-iris)]/10" />
              <div className="p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-overline text-muted-foreground">Showreel</p>
                    <h3 className="text-3xl font-black tracking-tight">Aetheris 2026</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    className="size-16 rounded-2xl bg-primary/20 border border-border dark:border-white/10 flex items-center justify-center glow-ring"
                    aria-label="Play showreel"
                  >
                    <Play className="size-7 text-primary fill-current ml-1" />
                  </motion.button>
                </div>
                <div className="mt-10 grid gap-6">
                  {[
                    "Brand strategy + product narrative systems",
                    "Cinematic motion design with conversion intent",
                    "Launch-ready infrastructure for scale",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-2 size-2 rounded-full bg-primary" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
                  <div>
                    <p className="text-overline text-foreground/70">Timeline</p>
                    <p className="text-lg text-foreground">6-10 weeks</p>
                  </div>
                  <div>
                    <p className="text-overline text-foreground/70">Engagements</p>
                    <p className="text-lg text-foreground">Limited to 4 / quarter</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-10 size-28 bg-[var(--aetheris-iris)]/30 blur-3xl rounded-full"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 size-36 bg-[var(--aetheris-spark)]/20 blur-3xl rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
