"use client"

import Link from "next/link"
import { useState } from "react"
import { MapPin, Heart, Clock, BadgeCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { type Product, formatRupiah } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group relative overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-shadow hover:shadow-lg">
      <Link href={`/produk/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            crossOrigin="anonymous"
          />
          {product.condition === "Baru" && (
            <Badge className="absolute left-2 top-2 bg-success text-primary-foreground">
              Baru
            </Badge>
          )}
        </div>
      </Link>

      <button
        type="button"
        onClick={() => setLiked((v) => !v)}
        aria-label={liked ? "Hapus dari favorit" : "Simpan ke favorit"}
        aria-pressed={liked}
        className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background"
      >
        <Heart
          className={cn(
            "size-4 transition-colors",
            liked ? "fill-destructive text-destructive" : "text-foreground",
          )}
        />
      </button>

      <Link href={`/produk/${product.id}`} className="block p-3">
        <p className="font-heading text-base font-bold text-foreground">
          {formatRupiah(product.price)}
        </p>
        <h3 className="mt-0.5 line-clamp-2 min-h-10 text-sm leading-5 text-foreground">
          {product.title}
        </h3>
        <p className="mt-1.5 text-xs text-muted-foreground">{product.condition}</p>
        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3 shrink-0" />
          <span className="truncate">{product.area}</span>
          <span aria-hidden>·</span>
          <span className="shrink-0">{product.distanceKm} km</span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3 shrink-0" />
          <span>{product.postedAgo}</span>
          {product.seller.verified && (
            <span className="ml-auto inline-flex items-center gap-0.5 text-primary">
              <BadgeCheck className="size-3.5" />
            </span>
          )}
        </div>
      </Link>
    </article>
  )
}
