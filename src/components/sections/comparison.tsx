"use client"

import { motion } from "framer-motion"
import { CircleCheckBig, CircleX, ShieldCheck, CircleHelp } from "lucide-react"
import { Section } from "@/components/layout-wrapper"
import { cn } from "@/lib/utils"

const comparisonData = [
  {
    feature: "Full Internal Ecosystem",
    aetheris: true,
    typical: "Partial (3-4)",
    details: "Complete pages across Services, Portfolio, Blog, and Contact flows.",
  },
  {
    feature: "No Broken Links",
    aetheris: true,
    typical: false,
    details: "Every route and internal link is fully functional and resolved.",
  },
  {
    feature: "Portfolio Case Studies",
    aetheris: true,
    typical: false,
    details: "Deep narratives with metrics, challenges, and outcomes.",
  },
  {
    feature: "Full Blog System",
    aetheris: true,
    typical: "Static layout only",
    details: "Dynamic routing, category filtering, and rich content management ready.",
  },
  {
    feature: "Dark/Light Mode Fully Styled",
    aetheris: true,
    typical: "Partial/None",
    details: "Seamless, persisted theme switching with refined contrast ratios.",
  },
  {
    feature: "SEO-Ready",
    aetheris: true,
    typical: "Basic tags only",
    details: "JSON-LD, Dynamic Metadata API, Sitemap, and Robots.txt included.",
  },
  {
    feature: "Cinematic Motion System",
    aetheris: true,
    typical: "Basic CSS",
    details: "Framer Motion choreography for scroll, hover, and page transitions.",
  },
  {
    feature: "Scalable Architecture",
    aetheris: true,
    typical: false,
    details: "Strict TypeScript, modular components, enterprise-grade structure.",
  },
  {
    feature: "Launch-Ready",
    aetheris: true,
    typical: "Beta/Unfinished",
    details: "Polished, responsive, and tuned for real client launches.",
  },
]

export function Comparison() {
  return (
    <Section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--aetheris-iris)]/15 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full aetheris-badge px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground/80"
          >
            <ShieldCheck className="size-4" />
            The Quality Benchmark
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fluid-h2 font-black tracking-tight text-foreground text-balance"
          >
            NOT ALL AGENCIES ARE BUILT <span className="text-gradient">EQUAL</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-2xl text-muted-foreground fluid-body"
          >
            Most templates give you a shell. Aetheris delivers an engineered ecosystem built for credibility, performance, and premium positioning.
          </motion.p>
        </div>

        <div className="relative overflow-hidden rounded-[3rem] border border-border dark:border-white/10 bg-card/60 backdrop-blur-xl glow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border dark:border-white/10 bg-muted/50 dark:bg-white/5">
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Core Feature</th>
                  <th className="p-8 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xl font-black tracking-tighter text-foreground dark:text-white">AETHERIS</span>
                      <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mt-1">Our Standard</span>
                    </div>
                  </th>
                  <th className="p-8 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xl font-black tracking-tighter text-muted-foreground">TYPICAL</span>
                      <span className="text-[10px] font-bold text-muted-foreground/60 tracking-[0.3em] uppercase mt-1">Template</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={item.feature} 
                    className={cn(
                      "group border-b border-border dark:border-white/5 transition-colors hover:bg-muted/50 dark:hover:bg-white/[0.02]",
                      index === comparisonData.length - 1 && "border-0"
                    )}
                  >
                    <td className="p-8">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-foreground dark:text-white mb-1">{item.feature}</span>
                        <span className="text-sm text-muted-foreground leading-relaxed max-w-xs">{item.details}</span>
                      </div>
                    </td>
                    <td className="p-8 text-center bg-primary/5">
                      <div className="flex justify-center">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                          <CircleCheckBig className="size-6" />
                        </div>
                      </div>
                    </td>
                    <td className="p-8 text-center">
                      <div className="flex justify-center">
                        {typeof item.typical === "boolean" ? (
                          item.typical ? (
                            <CircleCheckBig className="size-6 text-muted-foreground/30" />
                          ) : (
                            <div className="flex size-10 items-center justify-center rounded-xl bg-muted dark:bg-white/5 text-muted-foreground/20">
                              <CircleX className="size-6" />
                            </div>
                          )
                        ) : (
                          <span className="text-sm font-bold text-muted-foreground/70 italic">{item.typical}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-10 bg-muted/30 dark:bg-white/5 border-t border-border dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <CircleHelp className="size-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground dark:text-white">Want a detailed capability breakdown?</p>
                <p className="text-sm text-muted-foreground">Our team will walk you through every system.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-black tracking-widest text-primary uppercase">
              <div className="size-2 rounded-full bg-primary animate-pulse" />
              Verified Premium Standard
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
