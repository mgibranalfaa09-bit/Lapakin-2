"use client"

import { MessageCircle, Phone, Star, BadgeCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { type Seller } from "@/lib/data"

export function SellerActions({ seller }: { seller: Seller }) {
  const initials = seller.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <Avatar className="size-12">
          <AvatarFallback className="bg-primary/10 font-heading font-semibold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="truncate font-heading font-semibold text-foreground">
              {seller.name}
            </p>
            {seller.verified && (
              <BadgeCheck className="size-4 shrink-0 text-primary" />
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            Bergabung sejak {seller.joinedYear}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-muted/60 p-2.5">
          <p className="flex items-center justify-center gap-0.5 font-heading text-base font-bold text-foreground">
            <Star className="size-3.5 fill-highlight text-highlight" />
            {seller.rating}
          </p>
          <p className="text-[11px] text-muted-foreground">Rating</p>
        </div>
        <div className="rounded-lg bg-muted/60 p-2.5">
          <p className="font-heading text-base font-bold text-foreground">
            {seller.reviews}
          </p>
          <p className="text-[11px] text-muted-foreground">Ulasan</p>
        </div>
        <div className="rounded-lg bg-muted/60 p-2.5">
          <p className="font-heading text-base font-bold text-foreground">
            {seller.responseRate}%
          </p>
          <p className="text-[11px] text-muted-foreground">Respons</p>
        </div>
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="size-3.5" />
        Biasanya membalas dalam beberapa menit
      </p>

      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        <Button size="lg" className="h-11 w-full gap-2 text-base">
          <MessageCircle className="size-5" />
          Chat Penjual
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="h-11 w-full gap-2 text-base"
        >
          <Phone className="size-5" />
          Lihat Nomor
        </Button>
      </div>
    </div>
  )
}
