"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  /** Stagger delay in milliseconds. */
  delay?: number
  as?: "div" | "section" | "li" | "article"
}

/**
 * Reveals content on scroll. Content is visible by default (SSR / no-JS /
 * reduced-motion all render it shown). The pre-paint `reveal-js` class on
 * <html> (set in the root layout) is what arms the hidden start state, so a
 * failed or disabled script never leaves a section blank. A timeout fallback
 * guarantees every mounted element ends visible even without intersection.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLElement>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reduced-motion users never receive the `reveal-js` class, so content is
    // already visible via CSS; no state change needed (and none in the effect
    // body, which keeps cascading renders out).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    )
    io.observe(el)

    const fallback = window.setTimeout(() => {
      setShown(true)
      io.disconnect()
    }, 1600)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-shown={shown ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
