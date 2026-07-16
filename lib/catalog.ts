/**
 * Plenuu catalog — demo content for the marketplace homepages.
 *
 * Plenuu connects Ghana and the USA: many vendors, many departments. The three
 * routes (/a, /b, /c) are three visual directions over this one catalog.
 * Imagery is local, verified photography in /public/plenuu — swap the files or
 * repoint the paths to use real data. Prices are in Ghana Cedi (GH₵), Plenuu's
 * home currency. The `Product` shape stays compatible with lib/cart.
 */

export const brand = {
  name: "Plenuu",
  tagline: "One marketplace, two markets.",
  markets: ["Ghana", "United States"],
  stats: [
    { value: "20,000+", label: "products" },
    { value: "1,400", label: "verified vendors" },
    { value: "3–5 days", label: "tracked delivery" },
  ],
}

/** Format a Cedi amount the way Plenuu shows it: "GH₵ 1,250". */
export function cedis(amount: number): string {
  return `GH₵ ${amount.toLocaleString("en-GH")}`
}

export type Department = { slug: string; name: string; blurb: string; count: string; image: string }

export const departments: Department[] = [
  { slug: "fashion", name: "Fashion", blurb: "Ready-to-wear · Denim · Tailoring", count: "12,400 items", image: "/plenuu/dept-fashion.jpg" },
  { slug: "electronics", name: "Electronics", blurb: "Phones · Audio · Computing", count: "6,800 items", image: "/plenuu/dept-electronics.jpg" },
  { slug: "home", name: "Home & Living", blurb: "Furniture · Decor · Kitchen", count: "9,100 items", image: "/plenuu/dept-home.jpg" },
  { slug: "beauty", name: "Beauty", blurb: "Skincare · Fragrance · Hair", count: "5,300 items", image: "/plenuu/dept-beauty.jpg" },
  { slug: "footwear", name: "Footwear", blurb: "Sneakers · Boots · Sandals", count: "4,600 items", image: "/plenuu/dept-footwear.jpg" },
  { slug: "accessories", name: "Accessories", blurb: "Watches · Bags · Eyewear", count: "7,200 items", image: "/plenuu/dept-accessories.jpg" },
]

export type Product = {
  id: string
  name: string
  vendor: string
  location: "Ghana" | "USA"
  department: string
  price: number
  compareAt?: number
  rating: number
  reviews: number
  image: string
  badge?: string
}

export const products: Product[] = [
  { id: "aria-runner", name: "Aria Runner Sneakers", vendor: "Kumasi Kicks", location: "Ghana", department: "Footwear", price: 640, compareAt: 890, rating: 4.8, reviews: 214, image: "/plenuu/prod-sneaker.jpg", badge: "Best seller" },
  { id: "studio-headphones", name: "Studio Wireless Headphones", vendor: "SoundLab Accra", location: "Ghana", department: "Electronics", price: 1200, rating: 4.9, reviews: 512, image: "/plenuu/prod-headphones.jpg" },
  { id: "osu-satchel", name: "Osu Leather Satchel", vendor: "Osu Leatherworks", location: "Ghana", department: "Accessories", price: 980, rating: 4.7, reviews: 138, image: "/plenuu/prod-bag.jpg", badge: "Handmade" },
  { id: "chrono-field", name: "Chrono Field Watch", vendor: "Meridian & Co.", location: "USA", department: "Accessories", price: 1450, compareAt: 1800, rating: 4.6, reviews: 96, image: "/plenuu/prod-watch.jpg" },
  { id: "acetate-sun", name: "Classic Acetate Sunglasses", vendor: "Vista Optics", location: "USA", department: "Accessories", price: 420, rating: 4.5, reviews: 320, image: "/plenuu/prod-sunglasses.jpg" },
  { id: "palm-lamp", name: "Palm Ceramic Table Lamp", vendor: "Nest Home", location: "USA", department: "Home & Living", price: 560, rating: 4.8, reviews: 74, image: "/plenuu/prod-lamp.jpg", badge: "New" },
]

/** Every product keyed by id — used by cart/wishlist lookups. */
export const allProducts: Product[] = products
const productIndex = new Map(allProducts.map((p) => [p.id, p]))
export function getProduct(id: string): Product | undefined {
  return productIndex.get(id)
}

export type Trust = { label: string; desc: string }

export const trust: Trust[] = [
  { label: "Verified vendors", desc: "Every seller is vetted before a single item goes live." },
  { label: "Pay your way", desc: "Cards, Apple Pay and Mobile Money, all at checkout." },
  { label: "Tracked delivery", desc: "Door to door in 3–5 days across both markets." },
  { label: "Buyer protection", desc: "A full refund on anything that arrives less than right." },
]

/** Quick-browse chips / nav categories. */
export const quickLinks = ["Fashion", "Electronics", "Home & Living", "Beauty", "Footwear", "Accessories"]

export const vendor = {
  eyebrow: "Sell on Plenuu",
  title: "One storefront. Two markets.",
  body: "List once and reach shoppers across Ghana and the United States. We handle payments, cross-border logistics and buyer trust — you handle the craft.",
  cta: "Start selling",
  points: ["0% listing fees for 90 days", "Payouts to bank or Mobile Money", "Fulfilment support on both sides of the Atlantic"],
}
