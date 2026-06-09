"use client"

import * as React from "react"

import type { Product } from "@/lib/catalog"

type CartItem = { product: Product; qty: number }
type Drawer = "cart" | "wishlist" | null

type CartContextValue = {
  items: CartItem[]
  wishlist: string[]
  count: number
  subtotal: number
  drawer: Drawer
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  toggleWishlist: (id: string) => void
  isWishlisted: (id: string) => boolean
  openCart: () => void
  openWishlist: () => void
  closeDrawer: () => void
}

const CartContext = React.createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([])
  const [wishlist, setWishlist] = React.useState<string[]>([])
  const [drawer, setDrawer] = React.useState<Drawer>(null)

  const addItem = React.useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { product, qty: 1 }]
    })
    setDrawer("cart")
  }, [])

  const removeItem = React.useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== id))
  }, [])

  const updateQty = React.useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.product.id !== id)
        : prev.map((i) => (i.product.id === id ? { ...i, qty } : i))
    )
  }, [])

  const toggleWishlist = React.useCallback((id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }, [])

  const value = React.useMemo<CartContextValue>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0)
    const subtotal = items.reduce((n, i) => n + i.qty * i.product.price, 0)
    return {
      items,
      wishlist,
      count,
      subtotal,
      drawer,
      addItem,
      removeItem,
      updateQty,
      toggleWishlist,
      isWishlisted: (id: string) => wishlist.includes(id),
      openCart: () => setDrawer("cart"),
      openWishlist: () => setDrawer("wishlist"),
      closeDrawer: () => setDrawer(null),
    }
  }, [items, wishlist, drawer, addItem, removeItem, updateQty, toggleWishlist])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = React.useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return ctx
}
