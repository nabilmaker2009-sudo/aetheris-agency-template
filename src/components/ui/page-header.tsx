"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle: string
  badge?: string
  className?: string
}

export function PageHeader({ title, subtitle, badge, className }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center mb-24", className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 px-4 py-1.5 rounded-full aetheris-badge text-xs font-bold uppercase tracking-widest text-foreground/80"
        >
          {badge}
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-8xl font-black tracking-tight leading-tight text-foreground text-display"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
