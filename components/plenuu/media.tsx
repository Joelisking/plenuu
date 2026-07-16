import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * Shot — a framed product/lifestyle photo.
 *
 * Renders a real image (next/image, filling a rounded, sized container) so the
 * pages read like a genuine product page. Swap the files in /public/plenuu or
 * repoint the paths in lib/product.ts to use your own photography.
 *
 * The parent controls size; the image covers it. Pass `overlay` for a soft
 * tint (useful when placing a light photo on a dark or colored surface).
 */
export function Shot({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  overlay,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
  overlay?: string
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
      {overlay ? <div className="absolute inset-0" style={{ background: overlay }} /> : null}
    </div>
  )
}
