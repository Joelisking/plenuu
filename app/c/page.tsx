"use client"

/**
 * DIRECTION C — "Editorial"
 * The Plenuu marketplace as quiet luxury. Warm paper, ink-black type, an
 * elegant Fraunces serif, hairline rules and whitespace — no gradients, the
 * photography is the only colour. Same shop-everything homepage, styled like a
 * high-end print catalogue.
 */

import Image from "next/image"
import Link from "next/link"
import { Fraunces, Hanken_Grotesk } from "next/font/google"
import { Search, ShoppingBag, ArrowRight, ArrowUpRight } from "lucide-react"

import { brand, departments, products, quickLinks, trust, vendor } from "@/lib/catalog"
import { DeptTile, ProductCard } from "@/components/plenuu/store"
import { FadeIn, HoverLift, Stagger, StaggerItem } from "@/components/plenuu/motion"

const fraunces = Fraunces({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ["normal", "italic"], variable: "--font-fraunces" })
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-hanken-c" })

const num = (i: number) => String(i + 1).padStart(2, "0")

export default function EditorialMarketplace() {
  return (
    <main
      className={`${fraunces.variable} ${hanken.variable} min-h-screen bg-[var(--paper)] font-[family-name:var(--font-hanken-c)] text-[var(--ink)] [--accent:#3b4a3d] [--ink:#18170f] [--paper:#f4f2ec]`}
    >
      {/* ── Nav ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--ink)]/10 bg-[var(--paper)]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4 lg:px-8">
          <Wordmark />
          <div className="ml-2 hidden flex-1 items-center gap-6 lg:flex">
            {quickLinks.map((l) => (
              <a key={l} href="#departments" className="text-[0.86rem] font-medium tracking-wide text-[var(--ink)]/55 transition-colors hover:text-[var(--ink)]">
                {l}
              </a>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button aria-label="Search" className="flex size-9 items-center justify-center rounded-lg text-[var(--ink)]/60 transition-colors hover:bg-[var(--ink)]/[0.05]">
              <Search className="size-[1.15rem]" />
            </button>
            <HoverLift className="rounded-lg">
              <a href="#" className="flex items-center gap-2 rounded-lg bg-[var(--ink)] px-4 py-2 text-[0.86rem] font-semibold text-[var(--paper)]">
                <ShoppingBag className="size-4" /> Bag
              </a>
            </HoverLift>
          </div>
        </nav>
      </header>

      {/* ── Hero — editorial split ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-16 lg:px-8 lg:pt-24 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Stagger>
            <StaggerItem>
              <p className="flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]/45">
                <span className="text-[var(--accent)]">Ghana ⇄ USA</span>
                <span className="h-px w-8 bg-[var(--ink)]/25" />
                {brand.tagline}
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-[clamp(2.8rem,6.5vw,5.2rem)] font-light leading-[0.98] tracking-[-0.02em]">
                Everything you love,
                <br />
                <em className="italic">considered.</em>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-[var(--ink)]/60">
                A marketplace of 1,400 vetted vendors across two countries. Pay
                with cards or Mobile Money. Delivered, tracked, in 3–5 days.
              </p>
            </StaggerItem>
            <StaggerItem>
              <form className="mt-8 flex items-center gap-2 rounded-lg border border-[var(--ink)]/20 bg-[var(--paper)] p-1.5" onSubmit={(e) => e.preventDefault()}>
                <Search className="ml-2.5 size-5 shrink-0 text-[var(--ink)]/40" />
                <input type="text" placeholder="Search the marketplace…" className="w-full bg-transparent px-2 py-2 text-[1rem] outline-none placeholder:text-[var(--ink)]/40" />
                <button className="shrink-0 rounded-md bg-[var(--ink)] px-5 py-2.5 text-[0.9rem] font-semibold text-[var(--paper)]">Search</button>
              </form>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                {quickLinks.slice(0, 4).map((l) => (
                  <a key={l} href="#departments" className="border-b border-[var(--ink)]/25 pb-0.5 text-[0.9rem] font-medium text-[var(--ink)]/65 transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]">
                    {l}
                  </a>
                ))}
              </div>
            </StaggerItem>
          </Stagger>

          <FadeIn delay={0.25} y={30} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-[var(--ink)]/10">
              <Image src={departments[0].image} alt={departments[0].name} fill sizes="(max-width:1024px) 100vw, 440px" priority className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-[var(--ink)]/12 bg-[var(--paper)] px-5 py-4 shadow-[0_20px_50px_-24px_rgba(30,25,15,0.5)] sm:block">
              <p className="font-[family-name:var(--font-fraunces)] text-[1.8rem] font-light leading-none">20,000+</p>
              <p className="mt-1 text-[0.78rem] uppercase tracking-wide text-[var(--ink)]/45">products, one bag</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[var(--ink)]/10">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden bg-[var(--ink)]/10 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <FadeIn key={t.label} delay={i * 0.05} className="bg-[var(--paper)]">
              <div className="flex h-full flex-col px-6 py-7 lg:px-8">
                <span className="font-[family-name:var(--font-fraunces)] text-[1.2rem] italic text-[var(--accent)]">{num(i)}</span>
                <p className="mt-3 text-[0.98rem] font-semibold tracking-[-0.01em]">{t.label}</p>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--ink)]/50">{t.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Departments ──────────────────────────────────────────────── */}
      <section id="departments" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
        <FadeIn className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]/45">Departments</p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4.5vw,3.4rem)] font-light tracking-[-0.02em]">Shop by category</h2>
          </div>
          <a href="#" className="group hidden items-center gap-1.5 border-b border-[var(--ink)]/25 pb-0.5 text-[0.92rem] font-medium text-[var(--ink)]/65 transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)] sm:inline-flex">
            All departments <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <FadeIn key={d.slug} delay={(i % 3) * 0.06} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <DeptTile dept={d} variant="editorial" />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Best sellers ─────────────────────────────────────────────── */}
      <section className="border-t border-[var(--ink)]/10 py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]/45">Curated</p>
              <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4.5vw,3.4rem)] font-light tracking-[-0.02em]">This week's best-sellers</h2>
            </div>
            <a href="#" className="group hidden items-center gap-1.5 border-b border-[var(--ink)]/25 pb-0.5 text-[0.92rem] font-medium text-[var(--ink)]/65 transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)] sm:inline-flex">
              See all <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {products.map((p, i) => (
              <FadeIn key={p.id} delay={(i % 6) * 0.05}>
                <ProductCard product={p} variant="editorial" priority={i < 3} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vendor CTA — solid ink block ─────────────────────────────── */}
      <section className="px-5 pb-24 lg:px-8">
        <FadeIn className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 rounded-2xl bg-[var(--ink)] p-8 text-[var(--paper)] lg:grid-cols-2 lg:p-16">
            <div>
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[var(--paper)]/55">{vendor.eyebrow}</p>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
                One storefront. <em className="italic">Two markets.</em>
              </h2>
              <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--paper)]/65">{vendor.body}</p>
              <HoverLift className="mt-8 inline-block rounded-lg">
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-[var(--paper)] px-7 py-3.5 text-[1rem] font-semibold text-[var(--ink)]">
                  {vendor.cta} <ArrowRight className="size-[1.05rem]" />
                </a>
              </HoverLift>
            </div>
            <ul className="divide-y divide-[var(--paper)]/15 border-y border-[var(--paper)]/15">
              {vendor.points.map((pt, i) => (
                <li key={pt} className="flex items-baseline gap-4 py-4">
                  <span className="font-[family-name:var(--font-fraunces)] text-[1.1rem] italic text-[var(--paper)]/45">{num(i)}</span>
                  <span className="text-[1rem] text-[var(--paper)]/85">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <SiteFooter />
    </main>
  )
}

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2 text-[1.15rem] font-bold tracking-[-0.01em]">
      <span className="flex size-7 items-center justify-center rounded-md bg-[var(--ink)] text-[var(--paper)]">
        <ShoppingBag className="size-4" strokeWidth={2.4} />
      </span>
      {brand.name}
    </Link>
  )
}

function SiteFooter() {
  const cols = [
    { h: "Shop", links: quickLinks },
    { h: "Sell", links: ["Start selling", "Vendor hub", "Fees", "Logistics"] },
    { h: "Company", links: ["About Plenuu", "Two markets", "Careers", "Press"] },
    { h: "Help", links: ["Track order", "Returns", "Payments", "Contact"] },
  ]
  return (
    <footer className="border-t border-[var(--ink)]/12 px-5 pt-14 pb-8 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Wordmark />
            <p className="mt-3 max-w-xs text-[0.88rem] leading-relaxed text-[var(--ink)]/50">
              The marketplace connecting Ghana and the USA. Verified vendors, paid your way, delivered in 3–5 days.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink)]/40">{c.h}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[0.9rem] text-[var(--ink)]/55 transition-colors hover:text-[var(--ink)]">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--ink)]/12 pt-6 text-[0.82rem] text-[var(--ink)]/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. Accra · New York.</p>
          <p>Visa · Mastercard · Apple Pay · MTN Mobile Money</p>
        </div>
      </div>
    </footer>
  )
}
