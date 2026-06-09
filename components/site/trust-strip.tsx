import { Globe, RotateCcw, ShieldCheck, Truck } from "lucide-react"

import { Reveal } from "@/components/site/reveal"

const items = [
  {
    icon: Truck,
    title: "Free delivery",
    body: "On orders over GH₵500, shipped across Ghana and the USA.",
  },
  {
    icon: RotateCcw,
    title: "Easy returns",
    body: "30-day returns on every item, no awkward questions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure payment",
    body: "Visa, Mastercard, Amex and mobile money, all protected.",
  },
  {
    icon: Globe,
    title: "Two markets",
    body: "International reach with a local feel, on both sides.",
  },
]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={i * 70} className="flex gap-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-background text-primary shadow-sm">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
