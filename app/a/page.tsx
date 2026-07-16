"use client"

/**
 * DIRECTION A — "Console" (after the BuyMore inspo).
 * An app-shell dashboard: a fixed left sidebar, a top stat + cart/avatar bar,
 * an "Explore" area with market filters, and a bento of pastel promo cards +
 * product cards. Blue accent (Plenuu wordmark blue), floating on a tinted
 * backdrop. Content is the Plenuu marketplace — Ghana ⇄ USA, GH₵, real photos.
 */

import Image from "next/image"
import Link from "next/link"
import { Plus_Jakarta_Sans } from "next/font/google"
import {
  Zap, Compass, LayoutGrid, Tag, Store, Plus, LogOut, Search, ShoppingBag,
  SlidersHorizontal, Heart, ArrowUpRight, ChevronLeft, ChevronRight, Truck,
} from "lucide-react"

import { brand, cedis, departments, products } from "@/lib/catalog"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

const ACCENT = "#1a6bcc"

const sidebarMain = [
  { icon: Zap, label: "Popular" },
  { icon: Compass, label: "Explore", active: true },
  { icon: LayoutGrid, label: "Departments" },
  { icon: Tag, label: "Today's deals" },
  { icon: Store, label: "Vendors" },
]

export default function ConsolePage() {
  return (
    <main className={`${jakarta.className} min-h-screen bg-[#e9eef8] p-0 text-[#151b26] lg:p-5`}>
      <div className="mx-auto flex min-h-screen max-w-[86rem] overflow-hidden bg-white lg:min-h-[calc(100vh-2.5rem)] lg:rounded-[2rem] lg:shadow-[0_30px_80px_-40px_rgba(26,60,120,0.4)]">
        {/* ── Sidebar ────────────────────────────────────────────────── */}
        <aside className="hidden w-64 shrink-0 flex-col border-r border-black/[0.06] p-6 lg:flex">
          <Link href="/" className="text-[1.35rem] font-extrabold tracking-[-0.03em]">
            Plen<span style={{ color: ACCENT }}>uu</span>
          </Link>

          <nav className="mt-10 space-y-1">
            {sidebarMain.map((it) => (
              <a
                key={it.label}
                href="#explore"
                className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[0.92rem] font-medium transition-colors"
                style={it.active ? { background: ACCENT, color: "white" } : { color: "#5b6472" }}
              >
                <it.icon className="size-[1.15rem]" strokeWidth={2} />
                {it.label}
              </a>
            ))}
          </nav>

          <p className="mt-9 mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/35">Quick actions</p>
          <div className="space-y-1">
            {["Sell on Plenuu", "Track an order"].map((q) => (
              <a key={q} href="#" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[0.9rem] font-medium text-black/55 transition-colors hover:bg-black/[0.03]">
                <span className="flex size-6 items-center justify-center rounded-lg bg-black/[0.05]"><Plus className="size-3.5" /></span>
                {q}
              </a>
            ))}
          </div>

          <p className="mt-9 mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/35">Recent orders</p>
          <div className="space-y-3">
            {products.slice(0, 2).map((p) => (
              <a key={p.id} href="#" className="flex items-center gap-3">
                <span className="relative size-9 shrink-0 overflow-hidden rounded-lg bg-black/[0.04]">
                  <Image src={p.image} alt="" fill sizes="36px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.85rem] font-medium">{p.name}</span>
                  <span className="text-[0.75rem] text-black/40">view order</span>
                </span>
              </a>
            ))}
          </div>

          <a href="#" className="mt-auto flex items-center gap-3 pt-8 text-[0.9rem] font-medium text-black/50 transition-colors hover:text-black">
            <LogOut className="size-[1.1rem]" /> Log out
          </a>
        </aside>

        {/* ── Main ───────────────────────────────────────────────────── */}
        <div className="flex-1 overflow-hidden px-5 py-6 lg:px-9 lg:py-8">
          {/* Top bar */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/" className="text-[1.2rem] font-extrabold tracking-[-0.03em] lg:hidden">
              Plen<span style={{ color: ACCENT }}>uu</span>
            </Link>
            <div className="hidden items-center gap-3 lg:flex">
              <span className="text-[2rem] font-extrabold leading-none tracking-[-0.03em]">1,400</span>
              <span className="text-[0.85rem] leading-tight text-black/45">Verified<br />vendors</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="hidden items-center rounded-full bg-black/[0.04] p-1 sm:flex">
                <span className="rounded-full bg-white px-4 py-1.5 text-[0.85rem] font-semibold shadow-sm">Shop</span>
                <span className="px-4 py-1.5 text-[0.85rem] font-medium text-black/50">Sell</span>
              </div>
              <a href="#" className="flex items-center gap-2 rounded-full bg-black/[0.04] px-4 py-2 text-[0.85rem] font-semibold"><ShoppingBag className="size-4" /> Cart</a>
              <div className="hidden items-center -space-x-2 sm:flex">
                {["#f5b301", "#e8492f", "#3aa76d"].map((c) => (
                  <span key={c} className="size-8 rounded-full ring-2 ring-white" style={{ background: c }} />
                ))}
                <span className="flex size-8 items-center justify-center rounded-full bg-black/[0.06] text-[0.72rem] font-semibold ring-2 ring-white">+8</span>
              </div>
              <span className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-full text-[0.85rem] font-bold text-white" style={{ background: ACCENT }}>A</span>
                <span className="hidden text-[0.9rem] font-semibold sm:block">Ama</span>
              </span>
            </div>
          </div>

          {/* Explore + filters */}
          <div id="explore" className="mt-8 flex flex-wrap items-center gap-4">
            <h1 className="text-[2rem] font-extrabold tracking-[-0.03em]">Explore</h1>
            <div className="flex items-center gap-2 rounded-full bg-black/[0.04] p-1">
              {[
                { l: "All", on: true },
                { l: "🇬🇭 Ghana", on: false },
                { l: "🇺🇸 USA", on: false },
              ].map((f) => (
                <span key={f.l} className={`rounded-full px-4 py-1.5 text-[0.85rem] font-semibold ${f.on ? "bg-white shadow-sm" : "text-black/50"}`}>{f.l}</span>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-black/[0.04] px-4 py-2 text-[0.85rem] font-semibold"><SlidersHorizontal className="size-4" /> Filters</span>
              <span className="flex size-9 items-center justify-center rounded-full bg-black/[0.04]"><Search className="size-4" /></span>
            </div>
          </div>

          {/* Bento */}
          <div className="mt-6 flex flex-col gap-4 lg:flex-row">
            {/* Left column */}
            <div className="flex flex-1 flex-col gap-4">
              <PromoCard
                bg="#d7efdd" ink="#123a22" image={departments[3].image}
                eyebrow="" title="Get up to 40% off" cta="Get discount"
              />
              <PromoCard
                bg="#fdedb4" ink="#3a2f05" image={departments[0].image}
                eyebrow="Fresh from Accra" title="New this week" cta="" arrow
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group relative min-h-[13rem] overflow-hidden rounded-[1.6rem] bg-black/[0.04]">
                  <Image src={departments[2].image} alt="" fill sizes="300px" className="object-cover" />
                  <button className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/85 backdrop-blur"><Heart className="size-4" /></button>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="inline-flex rounded-full bg-white/85 px-4 py-2 text-[0.82rem] font-semibold backdrop-blur">Shop home</span>
                  </div>
                </div>
                <FavouritesCard />
              </div>
            </div>

            {/* Right column */}
            <div className="flex w-full flex-col gap-4 lg:w-[22rem]">
              <div className="grid grid-cols-2 gap-4">
                <DashProductCard product={products[0]} label="Our pick" />
                <DashProductCard product={products[1]} label="Your choice" />
              </div>
              <a href="#" className="group relative flex min-h-[11rem] items-center overflow-hidden rounded-[1.6rem] bg-[#e7edf6]">
                <div className="relative z-10 max-w-[55%] p-6">
                  <p className="text-[1.35rem] font-extrabold leading-tight tracking-[-0.02em]">Sell on Plenuu</p>
                  <p className="mt-1 text-[0.88rem] text-black/55">One storefront, two markets.</p>
                </div>
                <div className="absolute inset-y-0 right-0 w-1/2">
                  <Image src={departments[5].image} alt="" fill sizes="200px" className="object-cover" />
                </div>
                <span className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-white shadow"><ArrowUpRight className="size-4" /></span>
              </a>
            </div>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-[0.82rem] text-black/40">
            <Truck className="size-4" /> Tracked delivery in 3–5 days across Ghana & the USA · Pay with cards or Mobile Money
          </p>
        </div>
      </div>
    </main>
  )
}

function PromoCard({ bg, ink, image, eyebrow, title, cta, arrow }: { bg: string; ink: string; image: string; eyebrow?: string; title: string; cta?: string; arrow?: boolean }) {
  return (
    <div className="relative flex min-h-[9.5rem] overflow-hidden rounded-[1.6rem]" style={{ background: bg }}>
      <div className="relative z-10 flex flex-1 flex-col justify-center p-6" style={{ color: ink }}>
        {eyebrow ? <p className="text-[0.78rem] font-semibold opacity-70">{eyebrow}</p> : null}
        <h3 className="max-w-[60%] text-[1.5rem] font-extrabold leading-[1.05] tracking-[-0.02em]">{title}</h3>
        {cta ? <button className="mt-4 w-fit rounded-full bg-white/80 px-5 py-2 text-[0.85rem] font-semibold backdrop-blur transition-transform hover:scale-[1.03]">{cta}</button> : null}
      </div>
      <div className="relative w-2/5 shrink-0">
        <Image src={image} alt="" fill sizes="240px" className="object-cover" />
      </div>
      {arrow ? <span className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-white/85 backdrop-blur"><ArrowUpRight className="size-4" /></span> : null}
    </div>
  )
}

function FavouritesCard() {
  return (
    <div className="flex min-h-[13rem] flex-col rounded-[1.6rem] bg-[#ffe7d8] p-4">
      <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-2.5">
        <span className="text-[0.9rem] font-bold">Favourites</span>
        <span className="flex gap-1.5">
          <span className="flex size-6 items-center justify-center rounded-full bg-white shadow-sm"><ChevronLeft className="size-3.5" /></span>
          <span className="flex size-6 items-center justify-center rounded-full bg-white shadow-sm"><ChevronRight className="size-3.5" /></span>
        </span>
      </div>
      <div className="mt-3 grid flex-1 grid-cols-2 gap-3">
        {products.slice(2, 4).map((p) => (
          <div key={p.id} className="relative overflow-hidden rounded-2xl bg-white/60">
            <Image src={p.image} alt={p.name} fill sizes="140px" className="object-cover" />
          </div>
        ))}
      </div>
      <button className="mt-3 rounded-full bg-white/70 py-2 text-[0.82rem] font-semibold">See all</button>
    </div>
  )
}

function DashProductCard({ product, label }: { product: (typeof products)[number]; label: string }) {
  const swatches = ["#e8492f", "#1a6bcc", "#f5b301"]
  return (
    <div className="group flex flex-col rounded-[1.6rem] bg-black/[0.035] p-3 transition-transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
        <Image src={product.image} alt={product.name} fill sizes="200px" className="object-cover" />
        <div className="absolute left-3 top-3 flex gap-1">
          {swatches.map((s) => <span key={s} className="size-3.5 rounded-full ring-2 ring-white" style={{ background: s }} />)}
        </div>
        <button className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-white/85 backdrop-blur"><Heart className="size-3.5" /></button>
      </div>
      <div className="mt-3 flex items-end justify-between gap-2 px-1 pb-1">
        <div className="min-w-0">
          <p className="text-[0.72rem] text-black/40">{label}</p>
          <p className="truncate text-[0.92rem] font-semibold leading-tight">{product.name}</p>
        </div>
        <span className="shrink-0 rounded-full px-3 py-1.5 text-[0.82rem] font-bold text-white" style={{ background: ACCENT }}>{cedis(product.price)}</span>
      </div>
    </div>
  )
}
