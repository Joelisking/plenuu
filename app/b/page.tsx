"use client"

/**
 * DIRECTION B — "Storefront" (after the STYLEHIVE inspo).
 * A clean retail landing: light-grey canvas, white rounded cards everywhere,
 * black accent, big bold sans headlines, centered section titles, circular
 * arrow buttons. Adapted to the Plenuu marketplace — departments, vendors,
 * GH₵, Ghana ⇄ USA — with real photography.
 */

import Image from "next/image"
import Link from "next/link"
import { Manrope } from "next/font/google"
import { Menu, Search, ChevronDown, User, ShoppingBag, ArrowUpRight } from "lucide-react"

import { brand, cedis, departments, products } from "@/lib/catalog"

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

const pills = ["New arrivals", "Deals", "Fashion", "Electronics", "Home", "Beauty", "Footwear"]
const partners = ["KENTE & CO.", "SOUNDLAB", "OSU LEATHER", "NEST HOME", "MERIDIAN"]

export default function StorefrontPage() {
  return (
    <main className={`${manrope.className} min-h-screen bg-[#ececec] px-3 pb-4 text-[#151515] sm:px-5`}>
      <div className="mx-auto max-w-[84rem]">
        {/* ── Nav ──────────────────────────────────────────────────────── */}
        <header className="flex items-center justify-between gap-4 py-5">
          <button aria-label="Menu" className="flex size-10 items-center justify-center rounded-full text-black/70 transition-colors hover:bg-black/[0.05]"><Menu className="size-5" /></button>
          <Link href="/" className="text-[1.4rem] font-extrabold tracking-[0.06em]">PLENUU</Link>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {["About us", "Vendors", "Help"].map((l) => (
                <a key={l} href="#" className="text-[0.9rem] font-medium text-black/60 transition-colors hover:text-black">{l}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm"><User className="size-[1.1rem]" /></span>
              <span className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm"><ShoppingBag className="size-[1.1rem]" /></span>
            </div>
          </div>
        </header>

        {/* ── Search + pills ───────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-3 pb-6">
          <div className="flex min-w-[15rem] flex-1 items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm sm:max-w-sm">
            <Search className="size-[1.1rem] text-black/35" />
            <input className="w-full bg-transparent text-[0.9rem] outline-none placeholder:text-black/40" placeholder="Search the marketplace" />
          </div>
          <button className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.9rem] font-semibold shadow-sm">All departments <ChevronDown className="size-4" /></button>
          <div className="flex items-center gap-2 overflow-x-auto">
            {pills.map((p) => (
              <a key={p} href="#departments" className="whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[0.86rem] font-medium text-black/70 shadow-sm transition-colors hover:text-black">{p}</a>
            ))}
          </div>
        </div>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-[2rem] bg-white p-8 lg:p-12">
            <div>
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-black/40">🇬🇭 Ghana ⇄ USA 🇺🇸</p>
              <h1 className="mt-5 text-[clamp(2.6rem,5vw,4.4rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
                Everything you love, in one place
              </h1>
              <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-black/55">
                Shop 20,000+ products from 1,400 verified vendors across two markets. Pay with cards or Mobile Money — tracked to your door in 3–5 days.
              </p>
              <div className="mt-8 flex items-center gap-2">
                <a href="#departments" className="rounded-full bg-[#151515] px-7 py-3.5 text-[0.98rem] font-semibold text-white transition-transform hover:scale-[1.02]">Start shopping</a>
                <a href="#departments" className="flex size-12 items-center justify-center rounded-full bg-[#151515] text-white transition-transform hover:scale-[1.05]"><ArrowUpRight className="size-5" /></a>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <div>
                <p className="text-[2rem] font-extrabold tracking-[-0.03em]">20 Million+</p>
                <p className="mt-1 max-w-xs text-[0.85rem] leading-snug text-black/45">Real reviews from happy shoppers across Ghana and the USA.</p>
              </div>
              <div className="flex -space-x-3">
                {["#e8492f", "#1a6bcc", "#f5b301", "#3aa76d"].map((c) => (
                  <span key={c} className="size-11 rounded-full ring-4 ring-white" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] lg:min-h-0" style={{ background: "linear-gradient(150deg,#d7dce3 0%,#c6d8ea 100%)" }}>
            <Image src={departments[0].image} alt={departments[0].name} fill priority sizes="(max-width:1024px) 100vw, 42rem" className="object-cover" />
          </div>
        </section>

        {/* ── Sub-hero cards ───────────────────────────────────────────── */}
        <section className="mt-4 grid gap-4 sm:grid-cols-3">
          {[departments[4], departments[1]].map((d) => (
            <a key={d.slug} href="#" className="group relative min-h-[16rem] overflow-hidden rounded-[2rem]">
              <Image src={d.image} alt={d.name} fill sizes="(max-width:640px) 100vw, 28rem" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3.5 py-1.5 text-[0.82rem] font-semibold backdrop-blur">{d.name}</span>
            </a>
          ))}
          <a href="#" className="flex min-h-[16rem] flex-col items-center justify-center rounded-[2rem] bg-white p-8 text-center">
            <h3 className="text-[1.7rem] font-extrabold leading-tight tracking-[-0.02em]">Vendors across<br />two markets</h3>
            <span className="mt-6 rounded-full bg-[#151515] px-6 py-3 text-[0.9rem] font-semibold text-white transition-transform hover:scale-[1.03]">Explore more</span>
          </a>
        </section>

        {/* ── Partner logo strip ───────────────────────────────────────── */}
        <section className="my-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 rounded-[2rem] bg-white px-8 py-8">
          {partners.map((p) => (
            <span key={p} className="text-[1.05rem] font-bold uppercase tracking-[0.14em] text-black/35">{p}</span>
          ))}
        </section>

        {/* ── Category list ────────────────────────────────────────────── */}
        <section id="departments" className="pt-10">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.035em]">Shop by department</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <a key={d.slug} href="#" className="group relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-[2rem] bg-white">
                <Image src={d.image} alt={d.name} fill sizes="(max-width:1024px) 50vw, 26rem" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
                <div className="relative text-center text-white">
                  <h3 className="text-[1.7rem] font-extrabold tracking-[-0.02em]">{d.name}</h3>
                  <p className="mt-1 text-[0.9rem] font-medium text-white/80">{d.count}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Products ─────────────────────────────────────────────────── */}
        <section className="pt-16 text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.035em]">Our products</h2>
          <p className="mt-2 text-[1rem] text-black/45">Best-sellers from vendors on both sides of the Atlantic.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-left md:grid-cols-3 lg:grid-cols-6">
            {products.map((p, i) => (
              <div key={p.id} className="group flex flex-col overflow-hidden rounded-[1.4rem] bg-white transition-transform hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f2f2f2]">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width:768px) 50vw, 240px" priority={i < 3} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  {p.badge ? <span className="absolute left-3 top-3 rounded-full bg-[#151515] px-2.5 py-1 text-[0.68rem] font-semibold text-white">{p.badge}</span> : null}
                </div>
                <div className="p-4">
                  <p className="text-[0.74rem] text-black/40">{p.vendor} · {p.location}</p>
                  <h3 className="mt-0.5 truncate text-[0.98rem] font-semibold">{p.name}</h3>
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-[1.02rem] font-bold">{cedis(p.price)}</span>
                    {p.compareAt ? <span className="text-[0.82rem] text-black/35 line-through">{cedis(p.compareAt)}</span> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 40% off promo ────────────────────────────────────────────── */}
        <section className="pt-16">
          <div className="relative flex min-h-[22rem] items-center overflow-hidden rounded-[2rem] bg-white">
            <div className="absolute inset-y-0 left-0 hidden w-1/4 lg:block"><Image src={departments[0].image} alt="" fill sizes="20rem" className="object-cover" /></div>
            <div className="relative z-10 mx-auto max-w-lg px-6 py-14 text-center">
              <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold tracking-[-0.03em]">Get up to 40% off</h2>
              <p className="mt-3 text-[0.98rem] text-black/50">On new-vendor launches this month. Minimum spend GH₵ 450.</p>
              <div className="mt-7 inline-flex items-center gap-2">
                <a href="#" className="rounded-full bg-[#151515] px-7 py-3.5 text-[0.98rem] font-semibold text-white transition-transform hover:scale-[1.02]">Shop now</a>
                <a href="#" className="flex size-12 items-center justify-center rounded-full bg-[#151515] text-white transition-transform hover:scale-[1.05]"><ArrowUpRight className="size-5" /></a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 hidden w-1/4 lg:block"><Image src={departments[4].image} alt="" fill sizes="20rem" className="object-cover" /></div>
          </div>
        </section>

        {/* ── Featured collections bento ───────────────────────────────── */}
        <section className="pt-16 text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.035em]">Featured collections</h2>
          <p className="mt-2 text-[1rem] text-black/45">Curated edits, refreshed every week.</p>
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <CollectionCard d={departments[2]} title="Home refresh" />
            <CollectionCard d={departments[0]} title="The winter edit" className="lg:row-span-2 lg:min-h-[38rem]" tall />
            <CollectionCard d={departments[3]} title="Beauty picks" />
            <CollectionCard d={departments[4]} title="Footwear drop" />
            <CollectionCard d={departments[5]} title="Everyday carry" />
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <SiteFooter />
      </div>
    </main>
  )
}

function CollectionCard({ d, title, className = "", tall }: { d: (typeof departments)[number]; title: string; className?: string; tall?: boolean }) {
  return (
    <a href="#" className={`group relative overflow-hidden rounded-[2rem] ${tall ? "" : "min-h-[18rem]"} ${className}`}>
      <Image src={d.image} alt={title} fill sizes="(max-width:1024px) 50vw, 28rem" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
      <span className="absolute bottom-5 left-5 max-w-[70%] text-[1.4rem] font-extrabold leading-tight tracking-[-0.02em] text-white">{title}</span>
      <span className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:-translate-y-0.5"><ArrowUpRight className="size-5" /></span>
    </a>
  )
}

function SiteFooter() {
  const cols = [
    { h: "About", links: ["Company", "Two markets", "Press", "Careers"] },
    { h: "Help", links: ["Help center", "Track order", "Returns", "FAQs"] },
    { h: "Shop", links: ["Fashion", "Electronics", "Home", "Beauty"] },
    { h: "Sell", links: ["Start selling", "Vendor hub", "Fees", "Contact"] },
  ]
  return (
    <footer className="mt-4 rounded-[2rem] bg-white px-8 py-12 lg:px-12">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <p className="text-[1.4rem] font-extrabold tracking-[0.06em]">PLENUU</p>
          <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-black/50">The marketplace connecting Ghana and the USA. Verified vendors, paid your way, delivered in 3–5 days.</p>
          <div className="mt-5 flex gap-2">
            {["Fb", "Yt", "Ig", "X"].map((s) => (
              <span key={s} className="flex size-9 items-center justify-center rounded-full bg-black/[0.05] text-[0.72rem] font-bold text-black/60">{s}</span>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="text-[1rem] font-bold">{c.h}</p>
            <ul className="mt-4 space-y-3">{c.links.map((l) => <li key={l}><a href="#" className="text-[0.9rem] text-black/55 transition-colors hover:text-black">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-black/[0.08] pt-6 text-[0.82rem] text-black/40 sm:flex-row">
        <p>© {new Date().getFullYear()} {brand.name}. Accra · New York.</p>
        <p>Visa · Mastercard · Apple Pay · MTN Mobile Money</p>
      </div>
    </footer>
  )
}
