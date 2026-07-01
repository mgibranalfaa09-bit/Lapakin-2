"use client"

import Link from "next/link"
import { Search, MapPin, Heart, Plus, Menu, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { categories } from "@/lib/data"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Buka menu" />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetHeader className="border-b border-border">
              <SheetTitle className="flex items-center gap-2 font-heading">
                <Store className="size-5 text-primary" />
                Lapakin
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-3">
              {categories.map((cat) => {
                const Icon = cat.icon
                return (
                  <Link
                    key={cat.slug}
                    href={`/?kategori=${cat.slug}`}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    <Icon className="size-4 text-muted-foreground" />
                    {cat.name}
                  </Link>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Store className="size-5" />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-foreground">
            Lapakin
          </span>
        </Link>

        {/* Search */}
        <form
          action="/"
          className="relative hidden flex-1 items-center md:flex"
          role="search"
        >
          <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
          <Input
            name="q"
            placeholder="Cari iPhone, motor, sofa, dan lainnya..."
            className="h-10 rounded-full pl-9 pr-4"
            aria-label="Cari barang"
          />
        </form>

        <div className="ml-auto flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            className="hidden h-10 gap-1.5 rounded-full text-muted-foreground sm:inline-flex"
          >
            <MapPin className="size-4" />
            Jakarta Selatan
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            className="rounded-full"
            aria-label="Favorit"
          >
            <Heart className="size-5" />
          </Button>
          <Button className="h-10 gap-1.5 rounded-full px-4">
            <Plus className="size-4" />
            <span className="hidden sm:inline">Jual</span>
          </Button>
        </div>
      </div>

      {/* Mobile search */}
      <div className="border-t border-border px-4 pb-3 pt-2 md:hidden">
        <form action="/" className="relative flex items-center" role="search">
          <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
          <Input
            name="q"
            placeholder="Cari barang di sekitarmu..."
            className="h-10 rounded-full pl-9 pr-4"
            aria-label="Cari barang"
          />
        </form>
      </div>
    </header>
  )
}
