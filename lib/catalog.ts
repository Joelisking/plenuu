/**
 * Plenuu catalog — demo content for the marketing homepage.
 * Imagery is verified Unsplash photography (see next.config remotePatterns).
 * Prices are in Ghana Cedi (GH₵), Plenuu's home currency.
 */

export type Product = {
  id: string
  name: string
  vendor: string
  department: string
  price: number
  compareAt?: number
  rating: number
  reviews: number
  image: string
  badge?: "new" | "hot" | "low-stock"
}

export type Department = {
  slug: string
  name: string
  blurb: string
  items: string
  image: string
  span?: "wide" | "tall"
}

const UNSPLASH = "https://images.unsplash.com/photo-"

/** Build a sized, auto-formatted Unsplash URL from a verified photo id. */
export function img(id: string, width = 800): string {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${width}&q=80`
}

/** Format a Cedi amount the way Plenuu shows it: "GH₵ 1,250". */
export function cedis(amount: number): string {
  return `GH₵ ${amount.toLocaleString("en-GH")}`
}

export const departments: Department[] = [
  {
    slug: "fashion",
    name: "Fashion",
    blurb: "Men · Women · Kids",
    items: "12,400 items",
    image: "1483985988355-763728e1935b",
    span: "wide",
  },
  {
    slug: "electronics",
    name: "Electronics",
    blurb: "Phones · Laptops · Audio",
    items: "6,800 items",
    image: "1496181133206-80ce9b88a853",
    span: "tall",
  },
  {
    slug: "home",
    name: "Home & Living",
    blurb: "Furniture · Decor · Kitchen",
    items: "9,100 items",
    image: "1606813907291-d86efa9b94db",
  },
  {
    slug: "beauty",
    name: "Beauty",
    blurb: "Skincare · Makeup · Hair",
    items: "4,300 items",
    image: "1620916566398-39f1143ab7be",
  },
  {
    slug: "sports",
    name: "Sports & Fitness",
    blurb: "Gear · Apparel · Outdoors",
    items: "2,750 items",
    image: "1571019613454-1cb2f99b2d8b",
  },
  {
    slug: "food",
    name: "Food & Pantry",
    blurb: "Snacks · Staples · Drinks",
    items: "3,200 items",
    image: "1542838132-92c53300491e",
  },
]

export const featured: Product[] = [
  {
    id: "earbuds-pro",
    name: "Aria Wireless Earbuds Pro",
    vendor: "SoundLab Accra",
    department: "Electronics",
    price: 450,
    compareAt: 620,
    rating: 4.8,
    reviews: 312,
    image: "1572569511254-d8f925fe2cbb",
    badge: "hot",
  },
  {
    id: "silk-wrap-dress",
    name: "Adwoa Silk Wrap Dress",
    vendor: "Kente & Co.",
    department: "Fashion",
    price: 890,
    compareAt: 1100,
    rating: 4.9,
    reviews: 86,
    image: "1539008835657-9e8e9680c956",
  },
  {
    id: "vitamin-c-serum",
    name: "Glow Vitamin C Serum",
    vendor: "Pure Botanica",
    department: "Beauty",
    price: 220,
    compareAt: 300,
    rating: 4.7,
    reviews: 540,
    image: "1596462502278-27bfdc403348",
  },
  {
    id: "soy-candle-set",
    name: "Harmattan Soy Candle Set",
    vendor: "Loom & Light",
    department: "Home & Living",
    price: 180,
    rating: 4.6,
    reviews: 124,
    image: "1571781926291-c477ebfd024b",
    badge: "new",
  },
]

export const bestSellers: Product[] = [
  {
    id: "off-white-sneakers",
    name: "Coastline Low Sneakers",
    vendor: "Stride GH",
    department: "Fashion",
    price: 540,
    rating: 4.8,
    reviews: 419,
    image: "1491553895911-0055eca6402d",
  },
  {
    id: "studio-headphones",
    name: "Studio Over-Ear Headphones",
    vendor: "SoundLab Accra",
    department: "Electronics",
    price: 760,
    compareAt: 920,
    rating: 4.7,
    reviews: 233,
    image: "1505740420928-5e560c06d30e",
    badge: "hot",
  },
  {
    id: "everyday-backpack",
    name: "Everyday Roll-Top Backpack",
    vendor: "Carry Lab",
    department: "Fashion",
    price: 380,
    rating: 4.9,
    reviews: 158,
    image: "1553062407-98eeb64c6a62",
  },
  {
    id: "ceramic-vase",
    name: "Hand-thrown Ceramic Vase",
    vendor: "Loom & Light",
    department: "Home & Living",
    price: 260,
    rating: 4.5,
    reviews: 61,
    image: "1556228720-195a672e8a03",
  },
  {
    id: "field-watch",
    name: "Meridian Field Watch",
    vendor: "Northbound",
    department: "Electronics",
    price: 1250,
    compareAt: 1490,
    rating: 4.8,
    reviews: 97,
    image: "1523275335684-37898b6baf30",
  },
  {
    id: "leather-tote",
    name: "Soft Leather Day Tote",
    vendor: "Kente & Co.",
    department: "Fashion",
    price: 690,
    rating: 4.7,
    reviews: 142,
    image: "1548036328-c9fa89d128fa",
    badge: "low-stock",
  },
]

/** Compact set used in the hero collage. */
export const heroProducts: Product[] = [
  featured[0],
  bestSellers[0],
  featured[2],
  bestSellers[3],
]

/** Every product, de-duplicated by id — used by cart/wishlist lookups. */
export const allProducts: Product[] = Array.from(
  new Map([...featured, ...bestSellers].map((p) => [p.id, p])).values()
)

const productIndex = new Map(allProducts.map((p) => [p.id, p]))

export function getProduct(id: string): Product | undefined {
  return productIndex.get(id)
}

/**
 * Clean product shots for the hero product wall, grouped into three drifting
 * columns. All ids are verified Unsplash photos.
 */
export const wallColumns: string[][] = [
  [
    "1572569511254-d8f925fe2cbb",
    "1491553895911-0055eca6402d",
    "1596462502278-27bfdc403348",
    "1556228720-195a672e8a03",
    "1606107557195-0e29a4b5b4aa",
  ],
  [
    "1523275335684-37898b6baf30",
    "1553062407-98eeb64c6a62",
    "1571781926291-c477ebfd024b",
    "1526170375885-4d8ecf77b99f",
    "1542291026-7eec264c27ff",
  ],
  [
    "1505740420928-5e560c06d30e",
    "1548036328-c9fa89d128fa",
    "1620799140408-edc6dcb6d633",
    "1595950653106-6c9ebd614d3a",
    "1578500494198-246f612d3b3d",
  ],
]

/** Primary departments shown in the nav strip. */
export const navDepartments = [
  "Fashion",
  "Electronics",
  "Home & Living",
  "Beauty",
  "Sports",
  "Today's Deals",
] as const
