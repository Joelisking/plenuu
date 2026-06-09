"use client"

import * as React from "react"
import { PackageCheck, ShoppingBag, Smartphone, Plane } from "lucide-react"

import { cn } from "@/lib/utils"

const steps = [
  {
    icon: Smartphone,
    place: "Accra, Ghana",
    title: "Listed from the Business App",
    body: "A vendor photographs and prices a product on their phone. It goes live across both markets in minutes, no storefront required.",
  },
  {
    icon: ShoppingBag,
    place: "On Plenuu.com",
    title: "Ordered in a few taps",
    body: "You browse verified vendors, pay with a card or mobile money, and check out securely. The vendor is notified instantly.",
  },
  {
    icon: Plane,
    place: "In transit",
    title: "Across the distance",
    body: "Plenuu coordinates fulfilment and shipping along the route, with real-time tracking the whole way there.",
  },
  {
    icon: PackageCheck,
    place: "Philadelphia, USA",
    title: "Delivered to your door",
    body: "Your order arrives in 3–5 days, in Ghana or the USA. Local feel, two-continent reach.",
  },
]

// Arc from Accra (lower-left) to Philadelphia (upper-right), in a 400×260 box.
const ARC = "M 44 206 Q 200 64 360 84"
const ENDPOINT_START = { x: 44, y: 206 }
const ENDPOINT_END = { x: 360, y: 84 }

export function Journey() {
  const [active, setActive] = React.useState(0)
  const [armed, setArmed] = React.useState(false)
  const [points, setPoints] = React.useState<{ x: number; y: number }[]>([])
  const pathRef = React.useRef<SVGPathElement>(null)
  const stepRefs = React.useRef<(HTMLLIElement | null)[]>([])

  // Sample the arc at each step's progress once the path is in the DOM.
  React.useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    const ts = steps.map((_, i) => i / (steps.length - 1))
    setPoints(
      ts.map((t) => {
        const p = path.getPointAtLength(len * t)
        return { x: p.x, y: p.y }
      })
    )
    setArmed(true)
  }, [])

  // Activate the step crossing the viewport's middle band.
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index ?? "0"
            )
            setActive(idx)
          }
        }
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    )
    for (const el of stepRefs.current) {
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [])

  const t = active / (steps.length - 1)
  const marker = points[active] ?? ENDPOINT_START
  const ActiveIcon = steps[active].icon

  return (
    <section className="bg-hero text-hero-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-coral">From shop to doorstep</p>
          <h2 className="mt-2 text-balance font-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-bold tracking-[-0.02em]">
            Every order makes the same trip
          </h2>
          <p className="mt-3 text-pretty text-hero-foreground/75">
            One marketplace, two sides, one route. Here&apos;s how a product gets
            from a vendor&apos;s phone to your hands.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Route visual — sticky alongside the steps on desktop, static on mobile */}
          <div className="self-start lg:sticky lg:top-44">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm sm:px-10 sm:py-7">
              <svg
                viewBox="0 0 400 260"
                className="h-auto w-full"
                role="img"
                aria-label={`Delivery route from Accra, Ghana to Philadelphia, USA. Current stage: ${steps[active].title}.`}
              >
                {/* faint full route */}
                <path
                  d={ARC}
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity={0.18}
                  strokeWidth={2}
                  strokeDasharray="2 7"
                  strokeLinecap="round"
                />
                {/* traveled portion */}
                <path
                  ref={pathRef}
                  d={ARC}
                  fill="none"
                  stroke="var(--coral)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  pathLength={1}
                  className="plenuu-journey-line"
                  style={{ strokeDasharray: 1, strokeDashoffset: 1 - t }}
                />

                {/* endpoints */}
                <g>
                  <circle
                    cx={ENDPOINT_START.x}
                    cy={ENDPOINT_START.y}
                    r={6}
                    fill="var(--coral)"
                  />
                  <circle
                    cx={ENDPOINT_END.x}
                    cy={ENDPOINT_END.y}
                    r={6}
                    fill="currentColor"
                    fillOpacity={0.5}
                  />
                  <text
                    x={ENDPOINT_START.x - 4}
                    y={ENDPOINT_START.y + 28}
                    fill="currentColor"
                    fillOpacity={0.85}
                    fontSize={14}
                    fontWeight={600}
                  >
                    🇬🇭 Accra
                  </text>
                  <text
                    x={ENDPOINT_END.x + 6}
                    y={ENDPOINT_END.y - 14}
                    textAnchor="end"
                    fill="currentColor"
                    fillOpacity={0.85}
                    fontSize={14}
                    fontWeight={600}
                  >
                    Philadelphia 🇺🇸
                  </text>
                </g>

                {/* travelling package */}
                <g
                  className="plenuu-journey-marker"
                  style={{ transform: `translate(${marker.x}px, ${marker.y}px)` }}
                >
                  <circle r={15} fill="var(--coral)" />
                  <rect
                    x={-7}
                    y={-7}
                    width={14}
                    height={14}
                    rx={2.5}
                    fill="none"
                    stroke="var(--coral-foreground)"
                    strokeWidth={1.6}
                  />
                  <path
                    d="M -7 -2.5 H 7 M 0 -7 V 7"
                    stroke="var(--coral-foreground)"
                    strokeWidth={1.6}
                  />
                </g>
              </svg>

              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-coral/15 text-coral">
                  <ActiveIcon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-hero-foreground/60">
                    {steps[active].place}
                  </p>
                  <p className="truncate font-display font-bold">
                    {steps[active].title}
                  </p>
                </div>
                <span className="ml-auto font-display text-sm font-bold text-hero-foreground/50 tabular-nums">
                  {active + 1}/{steps.length}
                </span>
              </div>
            </div>
          </div>

          {/* Scrolling steps */}
          <ol className="relative">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = active === i
              return (
                <li
                  key={step.title}
                  ref={(el) => {
                    stepRefs.current[i] = el
                  }}
                  data-index={i}
                  className="flex min-h-[58vh] flex-col justify-center gap-4 lg:min-h-[72vh]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-2xl transition-colors duration-500",
                        armed && !isActive
                          ? "bg-white/5 text-hero-foreground/40"
                          : "bg-coral/15 text-coral"
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span
                      className={cn(
                        "font-display text-5xl font-extrabold tabular-nums transition-colors duration-500",
                        armed && !isActive
                          ? "text-white/10"
                          : "text-coral/30"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "transition-opacity duration-500",
                      armed && !isActive ? "opacity-45" : "opacity-100"
                    )}
                  >
                    <p className="text-sm font-semibold text-coral">
                      {step.place}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-pretty text-hero-foreground/80">
                      {step.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
