"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Section } from "@/components/layout-wrapper"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  return (
    <Section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--aetheris-iris)]/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fluid-h2 font-black tracking-tight uppercase text-foreground text-balance"
          >
            TRUSTED BY <br />
            <span className="text-gradient">VISIONARIES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 rounded-[2.5rem] border border-border dark:border-white/10 bg-card/60 backdrop-blur-xl glow-card"
            >
              <Quote className="size-10 text-primary/30 mb-8" />
              <p className="text-lg text-foreground font-medium leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-auto pt-8 border-t border-border dark:border-white/5">
                <p className="font-bold text-foreground dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
