import Image from "next/image"
import { CalendarDays, MapPin, PackageCheck } from "lucide-react"

import { img } from "@/lib/catalog"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"

const steps = [
  {
    icon: MapPin,
    title: "Set your location",
    body: "Enter a delivery address anywhere in Ghana or the USA.",
  },
  {
    icon: CalendarDays,
    title: "Pick a date",
    body: "Choose a delivery window that works for your week.",
  },
  {
    icon: PackageCheck,
    title: "We deliver",
    body: "Your order arrives tracked, right on time, every time.",
  },
]

export function Delivery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            title="Tell us when and where. We handle the rest."
            intro="Plenuu coordinates fulfilment with the vendor so your order shows up on the day you choose."
          />

          <ol className="mt-10 space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal as="li" key={step.title} delay={i * 80} className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={img("1586528116311-ad8dd3c8310d", 1000)}
              alt="A courier handing over a tracked Plenuu parcel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-background px-5 py-4 shadow-xl sm:left-8 sm:right-auto sm:gap-10">
            <div>
              <p className="font-display text-2xl font-extrabold text-foreground tabular-nums">
                3–5 days
              </p>
              <p className="text-xs text-muted-foreground">Average delivery</p>
            </div>
            <div className="border-l border-border pl-6">
              <p className="font-display text-2xl font-extrabold text-foreground">
                2
              </p>
              <p className="text-xs text-muted-foreground">
                Countries, nationwide
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
