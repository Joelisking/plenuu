import { ArrowRight, BadgeCheck, Star, Truck } from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { ProductWall } from "@/components/site/product-wall"

const stats = [
  { value: "50K+", label: "Happy customers" },
  { value: "500+", label: "Verified vendors" },
  { value: "4.9★", label: "Average rating" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero text-hero-foreground">
      {/* soft luminous wash so the blue field isn't flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 size-[36rem] rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 right-0 size-[32rem] rounded-full bg-coral/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
        <div className="max-w-xl">
          <Reveal delay={60}>
            <h1 className="text-balance font-display text-[clamp(2.6rem,7vw,4.75rem)] leading-[0.98] font-extrabold tracking-[-0.03em]">
              Shop everything,{" "}
              <span className="text-coral">delivered.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-hero-foreground/80 sm:text-lg">
              One marketplace for fashion, electronics, home, beauty and more,
              from hundreds of verified vendors across Ghana and the USA. Paid
              your way, delivered in 3–5 days.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#departments"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-coral px-7 text-base font-semibold text-coral-foreground transition-all hover:brightness-105 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start shopping <ArrowRight className="size-5" />
              </a>
              <a
                href="#vendor"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/25 px-7 text-base font-semibold text-hero-foreground transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Sell on Plenuu
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <dl className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold tabular-nums">
                    {s.value}
                  </dd>
                  <dd className="text-sm text-hero-foreground/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative">
          <ProductWall />

          {/* floating proof chips over the wall */}
          <div className="plenuu-float absolute left-1 top-1/3 z-10 rounded-2xl bg-background p-3 shadow-xl sm:left-2">
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-coral text-coral" />
              <div className="leading-tight">
                <p className="text-sm font-bold text-foreground">4.9 / 5</p>
                <p className="text-xs text-muted-foreground">50k+ reviews</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 right-1 z-10 flex items-center gap-2 rounded-2xl bg-background px-4 py-3 shadow-xl sm:right-2">
            <Truck className="size-5 text-primary" />
            <div className="leading-tight">
              <p className="text-sm font-bold text-foreground">Free delivery</p>
              <p className="text-xs text-muted-foreground">on orders over GH₵500</p>
            </div>
          </div>

          <div className="absolute right-2 top-4 z-10 hidden items-center gap-1.5 rounded-full bg-coral px-3 py-1.5 text-xs font-semibold text-coral-foreground shadow-lg md:flex">
            <BadgeCheck className="size-4" /> Verified vendors
          </div>
        </Reveal>
      </div>
    </section>
  )
}
