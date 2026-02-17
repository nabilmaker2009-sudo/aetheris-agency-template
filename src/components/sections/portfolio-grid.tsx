"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import { portfolioItems } from "@/data/portfolio"

export function PortfolioGrid() {
  return (
    <Section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="fluid-h2 font-black tracking-tight uppercase text-foreground text-balance"
            >
              SELECTED <span className="text-gradient">ENGAGEMENTS</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
          className="mt-4 sm:mt-6 text-muted-foreground fluid-body"
          >
            We design digital legacies that compound trust, pricing power, and reputation.
          </motion.p>
          </div>
          <Button variant="outline" size="lg" className="rounded-2xl border-border dark:border-white/10 mx-auto md:mx-0" asChild>
            <Link href="/portfolio">View Full Portfolio <ArrowRight className="ml-2 size-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <Link href={`/portfolio/${item.slug}`} className="block" key={item.slug}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-card/70 border border-border dark:border-white/10 glow-card aspect-auto md:aspect-[16/10]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent z-10 sm:block hidden" />
              <div className="absolute inset-0 items-center justify-center z-0 opacity-10 sm:flex hidden">
                <div className="text-8xl text-primary">
                  {item.title.split(' ').map((word) => word[0]).join('').substring(0, 3)}
                </div>
              </div>

              <div className="relative sm:absolute sm:inset-0 flex flex-col justify-between p-5 sm:p-8 md:p-10 lg:p-12 z-20 pb-11 sm:pb-13 lg:pb-0">
                <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.25rem] border border-border bg-background/80 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.14)] px-6 sm:px-8 md:px-8 py-6 sm:py-8 md:py-7 lg:rounded-none lg:border-0 lg:bg-transparent lg:backdrop-blur-0 lg:shadow-none lg:px-0 lg:py-0">
                  <span className="text-[0.6rem] sm:text-xs font-bold tracking-widest text-primary uppercase mb-2 block">{item.category}</span>
                  <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-foreground uppercase leading-[1.05]">
                    {item.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-foreground/75 dark:text-muted-foreground line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-4">
                    {item.results.slice(0, 2).map((res) => (
                      <div
                        key={res.label}
                        className="rounded-2xl md:rounded-[1.25rem] border border-border bg-background/80 px-4 py-4 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:shadow-[0_10px_24px_rgba(0,0,0,0.1)]"
                      >
                        <div className="text-lg sm:text-2xl font-black text-foreground">{res.value}</div>
                        <div className="text-[0.55rem] sm:text-xs font-bold text-foreground/70 dark:text-muted-foreground uppercase tracking-widest">{res.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-end lg:hidden md:justify-end">
                    <Button variant="ghost" size="icon" className="rounded-full bg-muted/50 dark:bg-white/5 sm:hover:bg-primary sm:hover:text-white/90" aria-label="View case study">
                      <ArrowRight className="size-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
