"use client"

/**
 * Shared marketplace UI — star ratings, product cards and department tiles.
 * A single `variant` ("light" | "dark" | "editorial") re-skins them so all
 * three homepage directions share one component but keep their own look.
 */

import Image from "next/image"
import { Star, Plus, ArrowUpRight } from "lucide-react"

import { cedis, type Department, type Product } from "@/lib/catalog"
import { cn } from "@/lib/utils"
import { HoverLift } from "@/components/plenuu/motion"

export type Variant = "light" | "dark" | "editorial"

type Theme = {
  card: string
  media: string
  radius: string
  name: string
  vendor: string
  muted: string
  price: string
  strike: string
  badge: string
  star: string
  starEmpty: string
  add: string
}

const THEMES: Record<Variant, Theme> = {
  light: {
    card: "bg-white ring-1 ring-black/[0.06] shadow-[0_1px_2px_rgba(20,10,5,0.04)]",
    media: "bg-[#f1ece4]",
    radius: "rounded-2xl",
    name: "text-[#20140f]",
    vendor: "text-black/45",
    muted: "text-black/40",
    price: "text-[#20140f]",
    strike: "text-black/35",
    badge: "bg-[var(--accent)] text-white",
    star: "text-amber-500 fill-amber-500",
    starEmpty: "text-black/15",
    add: "bg-[var(--accent)] text-white",
  },
  dark: {
    card: "bg-white/[0.04] ring-1 ring-white/10",
    media: "bg-white/[0.03]",
    radius: "rounded-2xl",
    name: "text-white",
    vendor: "text-white/45",
    muted: "text-white/40",
    price: "text-white",
    strike: "text-white/35",
    badge: "bg-[var(--accent)] text-[#04121a]",
    star: "text-amber-400 fill-amber-400",
    starEmpty: "text-white/15",
    add: "bg-[var(--accent)] text-[#04121a]",
  },
  editorial: {
    card: "bg-[var(--paper)] ring-1 ring-[var(--ink)]/12",
    media: "bg-[#e9e5db]",
    radius: "rounded-lg",
    name: "text-[var(--ink)] font-[family-name:var(--font-fraunces)] font-normal",
    vendor: "text-[var(--ink)]/45",
    muted: "text-[var(--ink)]/40",
    price: "text-[var(--ink)] font-[family-name:var(--font-fraunces)]",
    strike: "text-[var(--ink)]/35",
    badge: "bg-[var(--ink)] text-[var(--paper)]",
    star: "text-[var(--ink)] fill-[var(--ink)]",
    starEmpty: "text-[var(--ink)]/15",
    add: "bg-[var(--ink)] text-[var(--paper)]",
  },
}

export function Stars({ rating, reviews, variant }: { rating: number; reviews?: number; variant: Variant }) {
  const t = THEMES[variant]
  const rounded = Math.round(rating)
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn("size-3.5", i < rounded ? t.star : t.starEmpty)} strokeWidth={1.5} />
        ))}
      </div>
      <span className={cn("text-[0.8rem] font-medium", t.muted)}>
        {rating.toFixed(1)}
        {reviews != null ? ` (${reviews})` : ""}
      </span>
    </div>
  )
}

export function ProductCard({
  product,
  variant,
  priority,
  className,
}: {
  product: Product
  variant: Variant
  priority?: boolean
  className?: string
}) {
  const t = THEMES[variant]
  return (
    <HoverLift className={cn("h-full", t.radius)} scale={1.015} lift={-4}>
      <article className={cn("group flex h-full flex-col overflow-hidden", t.radius, t.card, className)}>
        <div className={cn("relative aspect-[4/5] overflow-hidden", t.media)}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 300px"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {product.badge ? (
            <span className={cn("absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide", t.badge)}>
              {product.badge}
            </span>
          ) : null}
          <button
            aria-label={`Add ${product.name} to bag`}
            className={cn(
              "absolute bottom-3 right-3 flex size-9 translate-y-2 items-center justify-center rounded-full opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
              t.add
            )}
          >
            <Plus className="size-4" strokeWidth={2.4} />
          </button>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className={cn("text-[0.76rem] font-medium", t.vendor)}>
            {product.vendor} · {product.location}
          </p>
          <h3 className={cn("mt-1 text-[1.02rem] leading-snug tracking-[-0.01em]", t.name)}>{product.name}</h3>
          <div className="mt-2">
            <Stars rating={product.rating} reviews={product.reviews} variant={variant} />
          </div>
          <div className="mt-auto flex items-baseline gap-2 pt-4">
            <span className={cn("text-[1.05rem] font-semibold tracking-[-0.01em]", t.price)}>{cedis(product.price)}</span>
            {product.compareAt ? (
              <span className={cn("text-[0.85rem] line-through", t.strike)}>{cedis(product.compareAt)}</span>
            ) : null}
          </div>
        </div>
      </article>
    </HoverLift>
  )
}

/** Editorial list row — used by Direction C instead of a card grid. */
export function ProductRow({ product, index }: { product: Product; index: number }) {
  return (
    <a href="#" className="group flex items-center gap-4 py-5 sm:gap-6">
      <span className="hidden w-8 shrink-0 font-[family-name:var(--font-fraunces)] text-[1.1rem] italic text-[var(--ink)]/35 sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-[#e9e5db] sm:size-20">
        <Image src={product.image} alt={product.name} fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[0.76rem] font-medium text-[var(--ink)]/45">{product.vendor} · {product.location}</p>
        <h3 className="mt-0.5 truncate font-[family-name:var(--font-fraunces)] text-[1.15rem] font-normal tracking-[-0.01em]">{product.name}</h3>
        <div className="mt-1.5 sm:hidden">
          <Stars rating={product.rating} reviews={product.reviews} variant="editorial" />
        </div>
      </div>
      <div className="hidden shrink-0 md:block">
        <Stars rating={product.rating} reviews={product.reviews} variant="editorial" />
      </div>
      <div className="flex shrink-0 items-baseline gap-2 text-right">
        <span className="font-[family-name:var(--font-fraunces)] text-[1.15rem] font-normal">{cedis(product.price)}</span>
        {product.compareAt ? <span className="hidden text-[0.82rem] text-[var(--ink)]/35 line-through sm:inline">{cedis(product.compareAt)}</span> : null}
      </div>
      <ArrowUpRight className="hidden size-4 shrink-0 text-[var(--ink)]/35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ink)] lg:block" />
    </a>
  )
}

export function DeptTile({
  dept,
  variant,
  className,
  priority,
}: {
  dept: Department
  variant: Variant
  className?: string
  priority?: boolean
}) {
  const radius = variant === "editorial" ? "rounded-lg" : "rounded-2xl"
  return (
    <HoverLift className={cn("h-full", radius)} scale={1.015} lift={-4}>
      <a href="#" className={cn("group relative flex h-full min-h-[13rem] overflow-hidden", radius, className)}>
        <Image
          src={dept.image}
          alt={dept.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="relative mt-auto flex w-full items-end justify-between gap-3 p-5 text-white">
          <div>
            <h3 className="text-[1.35rem] font-semibold tracking-[-0.01em]">{dept.name}</h3>
            <p className="mt-0.5 text-[0.85rem] text-white/70">{dept.blurb}</p>
            <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-wide text-white/55">{dept.count}</p>
          </div>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-white/30">
            <ArrowUpRight className="size-4" strokeWidth={2.2} />
          </span>
        </div>
      </a>
    </HoverLift>
  )
}
