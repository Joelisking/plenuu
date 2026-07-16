"use client"

/**
 * Small Framer Motion (the `motion` package) primitives shared by the three
 * Aura landing pages. Kept intentionally tiny so each page stays readable:
 *   <FadeIn>      — fade + slide up as it enters the viewport
 *   <Stagger> / <StaggerItem> — orchestrated on-load reveal for the hero
 *   <HoverLift>   — buttery scale-up on hover for cards and buttons
 *
 * Everything respects prefers-reduced-motion via `useReducedMotion`.
 */

import * as React from "react"
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react"

// Apple-ish deceleration curve. Slow to settle, no overshoot.
const EASE = [0.16, 1, 0.3, 1] as const

type Tag = "div" | "section" | "article" | "li" | "span"

type FadeInProps = {
  children: React.ReactNode
  className?: string
  /** Seconds of delay before the reveal starts. */
  delay?: number
  /** Distance to travel on the y-axis, in px. */
  y?: number
  as?: Tag
} & Omit<HTMLMotionProps<"div">, "children" | "className">

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 26,
  as = "div",
  ...rest
}: FadeInProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as typeof motion.div

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

/** Orchestrates an on-load, staggered reveal of its <StaggerItem> children. */
export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: Tag
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      className={className}
      variants={reduce ? undefined : staggerParent}
      initial={reduce ? undefined : "hidden"}
      animate={reduce ? undefined : "show"}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: Tag
}) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp className={className} variants={staggerChild}>
      {children}
    </Comp>
  )
}

/** Scale + lift on hover. Used for bento cards and CTAs. */
export function HoverLift({
  children,
  className,
  scale = 1.025,
  lift = -6,
  as = "div",
  ...rest
}: {
  children: React.ReactNode
  className?: string
  scale?: number
  lift?: number
  as?: Tag
} & Omit<HTMLMotionProps<"div">, "children" | "className">) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      className={className}
      whileHover={reduce ? undefined : { scale, y: lift }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
