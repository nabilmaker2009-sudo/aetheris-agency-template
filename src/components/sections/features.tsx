"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Smartphone, Globe, Code, Zap as Fast } from "lucide-react"
import { Section } from "@/components/layout-wrapper"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const features = [
  {
    title: "Authority-Led Strategy",
    description: "We craft narratives that earn trust fast and make premium pricing feel inevitable.",
    icon: Shield,
  },
  {
    title: "Cinematic Motion",
    description: "Every reveal and transition is deliberate, engineered to hold attention.",
    icon: Fast,
  },
  {
    title: "Precision Craft",
    description: "Art-directed design systems built to scale across product, marketing, and brand.",
    icon: Code,
  },
  {
    title: "Global Launch Ready",
    description: "Multi-region performance with localization workflows built into the system.",
    icon: Globe,
  },
  {
    title: "Luxury Mobile",
    description: "Mobile is not a compressed version of desktop. It is the hero experience.",
    icon: Smartphone,
  },
  {
    title: "Conversion Architecture",
    description: "We blend persuasion psychology with engineered clarity to raise close rates.",
    icon: Zap,
  },
]

export function Features() {
  return (
    <Section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground"
          >
            SYSTEMS BUILT FOR <br />
            <span className="text-gradient">UNFAIR ADVANTAGE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-xs sm:max-w-sm md:max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Aetheris blends strategy, design, and engineering into a single cinematic system that moves markets.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[2.5rem] border border-border dark:border-white/10 bg-card/60 p-8 backdrop-blur-sm transition-all hover:bg-accent hover:border-primary/50 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute -right-6 -top-6 size-28 bg-primary/15 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white/90">
                <feature.icon className="size-7" />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-foreground">{feature.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
