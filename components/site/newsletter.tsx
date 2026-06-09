"use client"

import * as React from "react"
import { ArrowRight, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "error" | "done">("idle")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setStatus(valid ? "done" : "error")
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-hero px-6 py-12 text-hero-foreground sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-extrabold tracking-[-0.02em]">
            Get the latest drops and offers first
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty text-hero-foreground/80">
            Join 50,000+ shoppers getting new arrivals and vendor deals in their
            inbox. Unsubscribe anytime.
          </p>

          {status === "done" ? (
            <p
              role="status"
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-coral/20 px-5 py-3 text-sm font-semibold text-hero-foreground"
            >
              <Check className="size-4 text-coral" />
              You&apos;re in. Watch your inbox for the next drop.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="flex-1 text-left">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === "error") setStatus("idle")
                  }}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "newsletter-error" : undefined}
                  placeholder="Enter your email address"
                  className="h-13 w-full rounded-full border border-white/20 bg-white/10 px-5 text-sm text-hero-foreground outline-none transition-colors placeholder:text-hero-foreground/60 focus:border-coral focus:bg-white/15"
                />
                {status === "error" && (
                  <p
                    id="newsletter-error"
                    className="mt-2 pl-4 text-sm text-coral"
                  >
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-coral px-7 text-sm font-semibold text-coral-foreground transition-all hover:brightness-105 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
