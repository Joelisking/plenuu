"use client"

import * as React from "react"
import Lenis from "lenis"

/**
 * Site-wide smooth scrolling. Skipped entirely for users who prefer reduced
 * motion, so the native instant scroll is preserved. Anchor links are handled
 * by Lenis so in-page navigation stays smooth too.
 */
export function SmoothScroll() {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      anchors: true,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}
