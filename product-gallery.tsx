"use client"

import { useState } from "react"
import { Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProductGallery({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [active, setActive] = useState(0)
  const [liked, setLiked] = useState(false)
  // Pad to show a richer gallery using available images
  const gallery = images.length >= 3 ? images : [...images, ...images, ...images].slice(0, 3)

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10">
        <img
          src={gallery[active] || "/placeholder.svg"}
          alt={`${title} - foto ${active + 1}`}
          className="aspect-[4/3] w-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute right-3 top-3 flex gap-2">
          <Button
            variant="secondary"
            size="icon-lg"
            className="rounded-full bg-background/90 backdrop-blur"
            aria-label="Bagikan"
          >
            <Share2 className="size-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon-lg"
            className="rounded-full bg-background/90 backdrop-blur"
            aria-label={liked ? "Hapus dari favorit" : "Simpan ke favorit"}
            aria-pressed={liked}
            onClick={() => setLiked((v) => !v)}
          >
            <Heart
              className={cn(
                "size-5",
                liked ? "fill-destructive text-destructive" : "text-foreground",
              )}
            />
          </Button>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        {gallery.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Lihat foto ${i + 1}`}
            className={cn(
              "size-16 shrink-0 overflow-hidden rounded-lg ring-2 transition-all sm:size-20",
              active === i ? "ring-primary" : "ring-transparent opacity-70 hover:opacity-100",
            )}
          >
            <img
              src={img || "/placeholder.svg"}
              alt=""
              className="size-full object-cover"
              crossOrigin="anonymous"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
