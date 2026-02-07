"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PricingTier } from "@/data/pricing"

interface PricingCardProps {
  tier: PricingTier
  index: number
}

export function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cn(
        "relative flex flex-col rounded-[2.5rem] border bg-card/60 p-10 backdrop-blur-xl transition-all duration-300 glow-card",
        tier.featured ? "border-primary ring-4 ring-primary/10 shadow-2xl lg:scale-105 lg:z-10" : "border-border dark:border-white/10"
      )}
    >
      {tier.badge && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--aetheris-iris)] to-[var(--aetheris-spark)] px-6 py-1.5 text-sm font-bold text-background shadow-xl whitespace-nowrap">
          {tier.badge}
        </div>
      )}
      
      <div className="mb-10">
        <h3 className="text-lg sm:text-xl font-bold tracking-widest uppercase text-muted-foreground">{tier.name}</h3>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter break-words">{tier.price}</span>
        </div>
        <p className="mt-6 text-muted-foreground leading-relaxed">{tier.description}</p>
      </div>

      <ul className="mb-10 space-y-5 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center text-sm font-medium">
            <div className="mr-4 flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="size-3.5 stroke-[3]" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        className={cn("w-full h-14 rounded-2xl text-lg font-bold transition-all", tier.featured ? "bg-primary hover:scale-[1.02]" : "hover:bg-white/5")}
        variant={tier.featured ? "shiny" : "outline"}
        asChild
      >
        <Link href="/contact">{tier.cta}</Link>
      </Button>
    </motion.div>
  )
}
