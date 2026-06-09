import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  intro,
  action,
  className,
}: {
  title: React.ReactNode
  intro?: string
  action?: { label: string; href: string }
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className="max-w-xl">
        <h2 className="text-balance font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-bold tracking-[-0.02em]">
          {title}
        </h2>
        {intro && (
          <p className="mt-3 text-pretty text-base text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
      {action && (
        <a
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {action.label}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  )
}
