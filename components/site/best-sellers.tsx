"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { bestSellers } from "@/lib/catalog"
import { ProductCard } from "@/components/site/product-card"
import { SectionHeading } from "@/components/site/section-heading"

export function BestSellers() {
  const trackRef = React.useRef<HTMLDivElement>(null)

  function scrollBy(dir: 1 | -1) {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" })
  }

  return (
    <section
      id="best-sellers"
      className="scroll-mt-28 bg-secondary/50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="This month's best sellers"
          intro="The products shoppers across both markets keep coming back for."
          action={{ label: "View all", href: "#best-sellers" }}
        />

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="w-[78%] shrink-0 snap-start sm:w-[300px]"
              >
                <ProductCard
                  product={product}
                  sizes="(max-width: 640px) 78vw, 300px"
                  className="h-full"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <RailButton label="Scroll left" onClick={() => scrollBy(-1)}>
              <ChevronLeft className="size-5" />
            </RailButton>
            <RailButton label="Scroll right" onClick={() => scrollBy(1)}>
              <ChevronRight className="size-5" />
            </RailButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function RailButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {children}
    </button>
  )
}
