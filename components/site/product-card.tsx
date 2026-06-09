"use client"

import * as React from "react"
import Image from "next/image"
import { Check, Heart, Plus, Star } from "lucide-react"

import { cedis, img, type Product } from "@/lib/catalog"
import { useCart } from "@/lib/cart"
import { cn } from "@/lib/utils"

const badgeLabel: Record<NonNullable<Product["badge"]>, string> = {
  new: "New",
  hot: "Bestseller",
  "low-stock": "Low stock",
}

export function ProductCard({
  product,
  className,
  sizes = "(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 22vw",
}: {
  product: Product
  className?: string
  sizes?: string
}) {
  const { addItem, toggleWishlist, isWishlisted } = useCart()
  const [added, setAdded] = React.useState(false)
  const timer = React.useRef<number | undefined>(undefined)
  const wished = isWishlisted(product.id)

  React.useEffect(() => () => window.clearTimeout(timer.current), [])

  function handleAdd() {
    addItem(product)
    setAdded(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setAdded(false), 1400)
  }

  const discount =
    product.compareAt && product.compareAt > product.price
      ? Math.round((1 - product.price / product.compareAt) * 100)
      : null

  return (
    <article
      className={cn(
        "group/card flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_oklch(0.4_0.05_256/0.5)]",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={img(product.image, 700)}
          alt={`${product.name} by ${product.vendor}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <div className="flex flex-col items-start gap-1.5">
            {discount !== null && (
              <span className="inline-flex w-fit items-center rounded-full bg-coral px-2.5 py-1 text-xs font-semibold text-coral-foreground tabular-nums">
                −{discount}%
              </span>
            )}
            {product.badge && (
              <span className="inline-flex w-fit items-center rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
                {badgeLabel[product.badge]}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            aria-pressed={wished}
            aria-label={
              wished
                ? `Remove ${product.name} from wishlist`
                : `Save ${product.name} to wishlist`
            }
            className="grid size-9 place-items-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Heart
              className={cn(
                "size-4 transition-all",
                wished
                  ? "fill-coral text-coral"
                  : "text-muted-foreground group-hover/card:text-foreground"
              )}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">
          {product.vendor}
        </p>
        <h3 className="text-pretty text-[0.95rem] leading-snug font-semibold text-foreground">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="size-3.5 fill-coral text-coral" />
          <span className="font-medium text-foreground tabular-nums">
            {product.rating.toFixed(1)}
          </span>
          <span aria-hidden>·</span>
          <span className="tabular-nums">{product.reviews} reviews</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-foreground tabular-nums">
              {cedis(product.price)}
            </span>
            {product.compareAt && (
              <span className="text-xs text-muted-foreground line-through tabular-nums">
                {cedis(product.compareAt)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={cn(
              "inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              added
                ? "bg-foreground text-background"
                : "bg-primary text-primary-foreground hover:bg-primary/90 active:translate-y-px"
            )}
          >
            {added ? (
              <>
                <Check className="size-4" /> Added
              </>
            ) : (
              <>
                <Plus className="size-4" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
