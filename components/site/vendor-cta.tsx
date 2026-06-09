import Image from "next/image"
import { Apple, Check, Play } from "lucide-react"

import { img } from "@/lib/catalog"
import { Reveal } from "@/components/site/reveal"

const benefits = [
  "Zero listing fees to get started",
  "Reach customers in Ghana and the USA",
  "Real-time sales and inventory dashboard",
  "A dedicated vendor support team",
]

export function VendorCta() {
  return (
    <section id="vendor" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-hero text-hero-foreground lg:grid-cols-2">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-24 size-96 rounded-full bg-coral/20 blur-3xl"
          />
          <div className="relative flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-sm font-semibold text-coral">Sell on Plenuu</p>
              <h2 className="mt-2 text-balance font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.03] font-extrabold tracking-[-0.02em]">
                Run a cross-border shop from your phone
              </h2>
            </div>
            <p className="max-w-md text-pretty text-base text-hero-foreground/80">
              Join hundreds of vendors already selling fashion, electronics and
              more to two markets at once. Set up your store in the Business App
              and list your first product today.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-coral/20 text-coral">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-hero-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <StoreBadge
                icon={<Apple className="size-6" />}
                top="Download on the"
                bottom="App Store"
              />
              <StoreBadge
                icon={<Play className="size-5" />}
                top="Get it on"
                bottom="Google Play"
              />
            </div>
          </div>

          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src={img("1556742502-ec7c0e9f34b1", 1000)}
              alt="A small-business vendor taking a card payment at their workbench"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hero/70 to-transparent lg:bg-gradient-to-r" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function StoreBadge({
  icon,
  top,
  bottom,
}: {
  icon: React.ReactNode
  top: string
  bottom: string
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-2.5 text-left transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <span className="text-hero-foreground">{icon}</span>
      <span className="leading-tight">
        <span className="block text-[0.65rem] text-hero-foreground/70">
          {top}
        </span>
        <span className="block font-display text-base font-bold">{bottom}</span>
      </span>
    </button>
  )
}
