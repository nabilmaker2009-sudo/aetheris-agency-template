"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { portfolioItems } from "@/data/portfolio"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const categories = ["All", ...Array.from(new Set(portfolioItems.map(p => p.category)))]

  const filteredProjects = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeCategory)

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Section className="relative pt-48 md:pt-56 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <PageHeader 
            badge="OUR WORK"
            title="DIGITAL MASTERPIECES"
            subtitle="Explore our portfolio of elite digital products crafted with precision and passion for global leaders."
          />

          <div className="grid grid-cols-2 gap-3 justify-items-center w-full max-w-none text-center sm:flex sm:flex-wrap sm:justify-center sm:text-center lg:justify-start lg:text-left sm:gap-4 mb-12 md:mb-20">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "shiny" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-2xl px-4 sm:px-8 h-11 sm:h-12 text-xs sm:text-base font-bold transition-all w-full sm:w-auto text-center sm:text-left justify-center sm:justify-start"
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <Link href={`/portfolio/${project.slug}`} className="block" key={project.slug}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-border dark:border-white/10 bg-card/70 backdrop-blur-sm lg:hover:shadow-xl lg:hover:shadow-primary/10 aspect-auto lg:aspect-[16/10]"
                >
                  <div className="absolute inset-0 bg-grid opacity-20 transition-transform lg:group-hover:scale-110" />
                  
                  <div className="hidden lg:flex absolute inset-0 bg-gradient-to-t from-background dark:from-slate-950 via-background/40 dark:via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-bold text-primary mb-2 tracking-[0.2em] uppercase">{project.category}</span>
                    <h3 className="text-3xl font-black text-foreground dark:text-white tracking-tight mb-6 uppercase">{project.title}</h3>
                    <div className="flex gap-4">
                      <Button variant="shiny" size="sm" className="rounded-xl px-6">
                        View Case Study
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-xl border-border dark:border-white/20 hover:bg-accent dark:hover:bg-white/10">
                        <ArrowRight className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="relative lg:absolute lg:inset-0 flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 lg:group-hover:opacity-0 transition-opacity">
                     <span className="text-[0.65rem] sm:text-xs font-bold text-primary mb-3 tracking-[0.2em] uppercase text-center">{project.client}</span>
                     <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground dark:text-white tracking-tight text-center uppercase leading-[1.1]">{project.title}</h3>
                     <div className="mt-3 text-center text-xs sm:text-sm text-muted-foreground">{project.category}</div>
                  </div>

                  <div className="lg:hidden relative p-5 sm:p-6 border-t border-border dark:border-white/10 bg-card/70">
                    <div className="grid grid-cols-2 gap-3">
                      {project.results.slice(0, 2).map((res) => (
                        <div key={res.label} className="rounded-2xl border border-border bg-card/70 px-4 py-3 backdrop-blur-xl glow-card">
                          <div className="text-lg sm:text-xl font-black text-foreground">{res.value}</div>
                          <div className="text-[0.55rem] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>
      <Footer />
    </main>
  )
}
