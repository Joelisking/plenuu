"use client"

import Image from "next/image"
import { Dialog } from "radix-ui"
import {
  ArrowRight,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react"

import { cedis, getProduct, img } from "@/lib/catalog"
import { useCart } from "@/lib/cart"

const FREE_DELIVERY_THRESHOLD = 500

export function CartDrawer() {
  const {
    drawer,
    items,
    wishlist,
    subtotal,
    closeDrawer,
    removeItem,
    updateQty,
    addItem,
    toggleWishlist,
  } = useCart()

  const open = drawer !== null
  const isCart = drawer === "cart"
  const title = isCart ? "Your cart" : "Your wishlist"
  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal)

  const wishlistProducts = wishlist
    .map((id) => getProduct(id))
    .filter((p) => p !== undefined)

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && closeDrawer()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-background shadow-2xl outline-none data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=open]:duration-300 data-[state=open]:ease-out">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <Dialog.Title className="flex items-center gap-2 font-display text-lg font-bold">
              {isCart ? (
                <ShoppingBag className="size-5 text-primary" />
              ) : (
                <Heart className="size-5 text-coral" />
              )}
              {title}
            </Dialog.Title>
            <Dialog.Close
              aria-label="Close"
              className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <X className="size-5" />
            </Dialog.Close>
          </header>
          <Dialog.Description className="sr-only">
            {isCart
              ? "Review the items in your shopping cart and proceed to checkout."
              : "Items you have saved to revisit later."}
          </Dialog.Description>

          {isCart ? (
            items.length === 0 ? (
              <EmptyState
                icon={<ShoppingBag className="size-7 text-primary" />}
                title="Your cart is empty"
                body="Add items from the store and they'll show up here, ready to check out."
                cta="Continue shopping"
                onClick={closeDrawer}
              />
            ) : (
              <>
                <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
                  {items.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-3 py-4">
                      <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                        <Image
                          src={img(product.image, 200)}
                          alt={product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="truncate text-sm font-semibold">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {product.vendor}
                        </p>
                        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                          <div className="inline-flex items-center rounded-full border border-border">
                            <button
                              type="button"
                              onClick={() => updateQty(product.id, qty - 1)}
                              aria-label={`Decrease quantity of ${product.name}`}
                              className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm font-medium tabular-nums">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(product.id, qty + 1)}
                              aria-label={`Increase quantity of ${product.name}`}
                              className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold tabular-nums">
                            {cedis(product.price * qty)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remove ${product.name} from cart`}
                        className="grid size-8 shrink-0 place-items-center self-start rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </li>
                  ))}
                </ul>

                <footer className="border-t border-border px-5 py-4">
                  <div
                    className="mb-3 rounded-xl bg-secondary px-3 py-2 text-xs text-secondary-foreground"
                    aria-live="polite"
                  >
                    {remaining > 0 ? (
                      <>
                        You&apos;re {cedis(remaining)} away from{" "}
                        <span className="font-semibold">free delivery</span>.
                      </>
                    ) : (
                      <span className="font-semibold text-primary">
                        You&apos;ve unlocked free delivery.
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="text-sm text-muted-foreground">
                      Subtotal
                    </span>
                    <span className="text-lg font-bold tabular-nums">
                      {cedis(subtotal)}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    Checkout <ArrowRight className="size-4" />
                  </button>
                  <p className="pt-2 text-center text-xs text-muted-foreground">
                    Taxes and delivery calculated at checkout.
                  </p>
                </footer>
              </>
            )
          ) : wishlistProducts.length === 0 ? (
            <EmptyState
              icon={<Heart className="size-7 text-coral" />}
              title="Your wishlist is empty"
              body="Tap the heart on any product to save it here and come back to it anytime."
              cta="Start exploring"
              onClick={closeDrawer}
            />
          ) : (
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {wishlistProducts.map((product) => (
                <li key={product.id} className="flex gap-3 py-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={img(product.image, 200)}
                      alt={product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="truncate text-sm font-semibold">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {product.vendor}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                      <span className="text-sm font-semibold tabular-nums">
                        {cedis(product.price)}
                      </span>
                      <button
                        type="button"
                        onClick={() => addItem(product)}
                        className="inline-flex h-8 items-center gap-1.5 rounded-full bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        <Plus className="size-3.5" /> Add to cart
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="grid size-8 shrink-0 place-items-center self-start rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function EmptyState({
  icon,
  title,
  body,
  cta,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  body: string
  cta: string
  onClick: () => void
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
      <div className="grid size-16 place-items-center rounded-2xl bg-secondary">
        {icon}
      </div>
      <div className="space-y-1.5">
        <p className="font-display text-lg font-bold">{title}</p>
        <p className="text-balance text-sm text-muted-foreground">{body}</p>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {cta}
      </button>
    </div>
  )
}
