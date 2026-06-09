import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { Departments } from "@/components/site/departments"
import { FeaturedProducts } from "@/components/site/featured-products"
import { DealsBand } from "@/components/site/deals-band"
import { BestSellers } from "@/components/site/best-sellers"
import { Journey } from "@/components/site/journey"
import { VendorCta } from "@/components/site/vendor-cta"
import { Delivery } from "@/components/site/delivery"
import { TrustStrip } from "@/components/site/trust-strip"
import { Newsletter } from "@/components/site/newsletter"
import { SiteFooter } from "@/components/site/site-footer"
import { CartDrawer } from "@/components/site/cart-drawer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Departments />
        <FeaturedProducts />
        <DealsBand />
        <BestSellers />
        <Journey />
        <VendorCta />
        <Delivery />
        <TrustStrip />
        <Newsletter />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
