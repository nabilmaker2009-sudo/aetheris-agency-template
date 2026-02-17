"use client"

import { motion, MotionConfig } from "framer-motion"
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

  if (reduceMotion) {
    // Disable route transition animation on tablet/mobile to avoid blank-first-paint issues.
    return <div key={pathname}>{children}</div>
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}
