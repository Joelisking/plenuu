import Image from "next/image"
import Link from "next/link"
import { Manrope } from "next/font/google"
import { ArrowUpRight, ShoppingBag } from "lucide-react"

import { brand, departments } from "@/lib/catalog"

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

const directions = [
  {
    href: "/a",
    tag: "Direction A",
    name: "Console",
    desc: "An app-shell dashboard: left sidebar, market filters and a bento of pastel promo cards and product tiles. Blue accent, playful and utilitarian.",
    thumb: departments[3].image,
    accent: "#1a6bcc",
  },
  {
    href: "/b",
    tag: "Direction B",
    name: "Storefront",
    desc: "A clean retail landing on soft grey: white rounded cards, big bold headlines, category tiles and a featured-collections bento. Monochrome, modern.",
    thumb: departments[1].image,
    accent: "#151515",
  },
  {
    href: "/c",
    tag: "Direction C",
    name: "Editorial",
    desc: "Warm paper, ink type, an elegant serif. Hairline rules, quiet luxury, no gradients — a high-end print catalogue online.",
    thumb: departments[2].image,
    accent: "#c8bfa8",
  },
]

export default function Index() {
  return (
    <main className={`${manrope.className} min-h-screen bg-[#0b0c10] px-5 py-16 text-white lg:px-8 lg:py-24`}>
      <div className="mx-auto max-w-[80rem]">
        <header className="mb-14 lg:mb-20">
          <p className="mb-5 flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white/45">
            <span className="flex size-5 items-center justify-center rounded-full bg-white/10">
              <ShoppingBag className="size-3" strokeWidth={2.4} />
            </span>
            {brand.name} · Marketplace homepage · Design directions
          </p>
          <h1 className="max-w-3xl text-balance text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
            Three directions, one marketplace.
          </h1>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/60">
            Each is a complete, clickable homepage for {brand.name} — the Ghana ⇄ USA
            marketplace — in a different aesthetic. Open one, then we develop your
            favourite and discard the rest.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {directions.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={d.thumb}
                  alt={`${d.name} direction`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-7">
                <div>
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/40">{d.tag}</p>
                  <h2 className="mt-1.5 text-[1.6rem] font-bold tracking-[-0.02em]">{d.name}</h2>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-white/55">{d.desc}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.92rem] font-semibold" style={{ color: d.accent }}>
                  View homepage
                  <ArrowUpRight className="size-[1.05rem] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
