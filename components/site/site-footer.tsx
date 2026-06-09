import { Mail, MapPin, Phone } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: ["Departments", "Today's Deals", "New arrivals", "Best sellers"],
  },
  {
    title: "Company",
    links: ["About Plenuu", "Become a vendor", "Careers", "FAQ"],
  },
  {
    title: "Support",
    links: ["Contact us", "Returns policy", "Privacy policy", "Terms of service"],
  },
]

const payments = ["VISA", "Mastercard", "Amex", "MoMo"]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
              Plenuu
            </span>
            <p className="mt-3 text-pretty text-sm text-muted-foreground">
              The cross-border marketplace connecting Ghana and the USA. Shop
              verified vendors, pay your way, and get it delivered.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                4525 Walnut St, Philadelphia, PA 19104, USA
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <span className="tabular-nums">
                  +1 267 684 6144 · +233 24 727 7946
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a
                  href="mailto:hello@plenuu.com"
                  className="transition-colors hover:text-foreground"
                >
                  hello@plenuu.com
                </a>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-bold">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Plenuu. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {payments.map((p) => (
              <li
                key={p}
                className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
