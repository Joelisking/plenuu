"use client"

import * as React from "react"
import { Dialog } from "radix-ui"
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Truck,
  User,
  X,
} from "lucide-react"

import { navDepartments } from "@/lib/catalog"
import { useCart } from "@/lib/cart"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { count, wishlist, openCart, openWishlist } = useCart()
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-30">
      <div className="flex items-center justify-center gap-2 bg-hero px-4 py-2 text-center text-xs font-medium text-hero-foreground sm:text-sm">
        <Truck className="size-4 shrink-0" aria-hidden />
        <span>Tracked delivery across Ghana, the USA &amp; beyond, in 3–5 days</span>
      </div>

      <div
        className={cn(
          "border-b bg-background/85 backdrop-blur-md transition-shadow",
          scrolled ? "border-border shadow-sm" : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:h-[4.5rem]">
          <a
            href="#top"
            className="font-display text-2xl font-extrabold tracking-tight text-primary"
          >
            Plenuu
          </a>

          <SearchBar className="hidden flex-1 md:flex" />

          <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
            <button
              type="button"
              className="hidden h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:inline-flex"
            >
              <User className="size-5" />
              Account
            </button>

            <IconButton
              label={`Wishlist, ${wishlist.length} saved`}
              onClick={openWishlist}
              count={wishlist.length}
            >
              <Heart className="size-5" />
            </IconButton>

            <IconButton
              label={`Cart, ${count} items`}
              onClick={openCart}
              count={count}
            >
              <ShoppingBag className="size-5" />
            </IconButton>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>

        <SearchBar className="px-4 pb-3 md:hidden" />

        <nav
          aria-label="Departments"
          className="mx-auto hidden max-w-7xl items-center gap-1 px-6 pb-2.5 md:flex"
        >
          {navDepartments.map((dept) => {
            const isDeal = dept === "Today's Deals"
            return (
              <a
                key={dept}
                href={isDeal ? "#deals" : "#departments"}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted",
                  isDeal
                    ? "text-coral hover:bg-coral/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {dept}
              </a>
            )
          })}
          <span className="ml-auto text-sm text-muted-foreground">
            Ship to{" "}
            <span className="font-medium text-foreground">🇬🇭 Ghana / 🇺🇸 USA</span>
          </span>
        </nav>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}

function SearchBar({ className }: { className?: string }) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={cn("items-center", className)}
    >
      <div className="flex h-12 w-full items-center gap-2 rounded-full border border-border bg-secondary/60 pl-4 pr-1.5 transition-colors focus-within:border-primary focus-within:bg-background">
        <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden />
        <input
          type="search"
          aria-label="Search products, brands and vendors"
          placeholder="Search products, brands, vendors…"
          className="h-full w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          className="hidden h-9 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
        >
          Search
        </button>
      </div>
    </form>
  )
}

function IconButton({
  label,
  count,
  onClick,
  children,
}: {
  label: string
  count: number
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative grid size-11 place-items-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {children}
      {count > 0 && (
        <span className="absolute right-1 top-1 grid min-w-5 place-items-center rounded-full bg-coral px-1 text-[0.7rem] font-bold text-coral-foreground tabular-nums">
          {count}
        </span>
      )}
    </button>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 flex w-full max-w-xs flex-col bg-background shadow-2xl outline-none data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Dialog.Title className="font-display text-xl font-extrabold tracking-tight text-primary">
              Plenuu
            </Dialog.Title>
            <Dialog.Close
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Browse Plenuu departments and account links.
          </Dialog.Description>
          <nav className="flex flex-col gap-1 p-4" aria-label="Departments">
            {navDepartments.map((dept) => {
              const isDeal = dept === "Today's Deals"
              return (
                <a
                  key={dept}
                  href={isDeal ? "#deals" : "#departments"}
                  onClick={onClose}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-muted",
                    isDeal ? "text-coral" : "text-foreground"
                  )}
                >
                  {dept}
                </a>
              )
            })}
          </nav>
          <div className="mt-auto border-t border-border p-4">
            <button
              type="button"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border text-sm font-semibold transition-colors hover:bg-muted"
            >
              <User className="size-4" /> Sign in
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
