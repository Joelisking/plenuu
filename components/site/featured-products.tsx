import { featured } from "@/lib/catalog"
import { ProductCard } from "@/components/site/product-card"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      <SectionHeading
        title="Handpicked this week"
        intro="A rotating edit of products our team is loving right now, across every department."
        action={{ label: "View all products", href: "#best-sellers" }}
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {featured.map((product, i) => (
          <Reveal key={product.id} delay={i * 70}>
            <ProductCard product={product} className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
