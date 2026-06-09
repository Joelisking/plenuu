import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { departments, img } from "@/lib/catalog"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { cn } from "@/lib/utils"

const spanClass: Record<string, string> = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
}

export function Departments() {
  return (
    <section
      id="departments"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionHeading
        title="Everything, in one place"
        intro="Six departments and counting, each stocked by vendors we verify before they sell."
        action={{ label: "Browse all departments", href: "#departments" }}
      />

      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:auto-rows-[210px]">
        {departments.map((dept, i) => (
          <Reveal
            key={dept.slug}
            as="article"
            delay={i * 60}
            className={cn(
              "group relative overflow-hidden rounded-3xl",
              dept.span ? spanClass[dept.span] : "",
              dept.span === "wide" ? "col-span-2" : ""
            )}
          >
            <a href="#departments" className="absolute inset-0 z-10">
              <span className="sr-only">Shop {dept.name}</span>
            </a>
            <Image
              src={img(dept.image, dept.span ? 900 : 500)}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 text-background">
              <div>
                <h3 className="font-display text-lg font-bold sm:text-xl">
                  {dept.name}
                </h3>
                <p className="text-xs text-background/80 sm:text-sm">
                  {dept.blurb}
                </p>
                <p className="mt-1 text-xs text-background/60 tabular-nums">
                  {dept.items}
                </p>
              </div>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-background/15 text-background backdrop-blur transition-colors group-hover:bg-coral group-hover:text-coral-foreground">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
