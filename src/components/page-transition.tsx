"use client"

import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { usePathname } from "next/navigation"
import * as React from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [reduceMotion, setReduceMotion] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia("(max-width: 1024px)")
    const update = () => setReduceMotion(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "user"}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  )
}
