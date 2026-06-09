import Image from "next/image"

import { img, wallColumns } from "@/lib/catalog"
import { cn } from "@/lib/utils"

const columnConfig = [
  { speed: "46s", dir: "normal", offset: "0" },
  { speed: "62s", dir: "reverse", offset: "-3rem" },
  { speed: "54s", dir: "normal", offset: "-1.5rem" },
]

export function ProductWall({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[clamp(24rem,52vh,38rem)] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_11%,#000_89%,transparent)]",
        className
      )}
      aria-hidden
    >
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {wallColumns.map((col, i) => {
          const cfg = columnConfig[i]
          return (
            <div
              key={i}
              className="plenuu-wall-col flex flex-col gap-3 sm:gap-4"
              style={{
                animationDuration: cfg.speed,
                animationDirection: cfg.dir,
                marginTop: cfg.offset,
              }}
            >
              {[...col, ...col].map((id, j) => (
                <div
                  key={`${id}-${j}`}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10"
                >
                  <Image
                    src={img(id, 360)}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 30vw, 16vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
