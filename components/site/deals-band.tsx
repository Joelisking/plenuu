import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { img } from "@/lib/catalog"
import { Reveal } from "@/components/site/reveal"

export function DealsBand() {
  return (
    <section id="deals" className="scroll-mt-28 px-4 py-12 sm:px-6 lg:py-16">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-coral text-coral-foreground md:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-coral-foreground/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide">
              Limited time
            </span>
            <h2 className="text-balance font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] font-extrabold tracking-[-0.02em]">
              Up to 40% off the season&apos;s fashion
            </h2>
            <p className="max-w-sm text-pretty text-base text-coral-foreground/85">
              Dresses, sneakers and accessories from our top-rated fashion
              vendors, marked down through the end of the month.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#best-sellers"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                Shop the sale <ArrowRight className="size-4" />
              </a>
              <span className="text-sm font-medium text-coral-foreground/80">
                Ends in 6 days
              </span>
            </div>
          </div>

          <div className="relative min-h-64 md:min-h-full">
            <Image
              src={img("1539008835657-9e8e9680c956", 900)}
              alt="Model wearing a silk wrap dress from a Plenuu fashion vendor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute right-5 top-5 grid size-20 place-items-center rounded-full bg-foreground text-center font-display text-background shadow-lg">
              <span className="text-lg font-extrabold leading-none">
                40%
                <span className="block text-[0.6rem] font-semibold tracking-wide">
                  OFF
                </span>
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
