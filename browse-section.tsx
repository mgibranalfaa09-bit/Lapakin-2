"use client"

import { useMemo, useState } from "react"
import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ProductCard } from "@/components/product-card"
import { products, categories, cities, type Condition } from "@/lib/data"
import { cn } from "@/lib/utils"

const conditions: Condition[] = [
  "Baru",
  "Bekas - Seperti Baru",
  "Bekas - Layak Pakai",
]

const priceRanges = [
  { label: "Semua Harga", min: 0, max: Infinity },
  { label: "Di bawah Rp1jt", min: 0, max: 1_000_000 },
  { label: "Rp1jt - Rp5jt", min: 1_000_000, max: 5_000_000 },
  { label: "Rp5jt - Rp10jt", min: 5_000_000, max: 10_000_000 },
  { label: "Di atas Rp10jt", min: 10_000_000, max: Infinity },
]

const sortOptions = [
  { value: "terbaru", label: "Terbaru" },
  { value: "terdekat", label: "Terdekat" },
  { value: "termurah", label: "Harga Terendah" },
  { value: "termahal", label: "Harga Tertinggi" },
]

type Filters = {
  category: string
  condition: Condition | "Semua"
  priceIndex: number
  city: string
  maxDistance: number
}

const defaultFilters: Filters = {
  category: "Semua",
  condition: "Semua",
  priceIndex: 0,
  city: "Semua Kota",
  maxDistance: 50,
}

function FilterControls({
  filters,
  setFilters,
}: {
  filters: Filters
  setFilters: (f: Filters) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Label className="mb-2 block text-sm font-semibold">Kondisi</Label>
        <div className="flex flex-col gap-1.5">
          {(["Semua", ...conditions] as const).map((c) => (
            <label
              key={c}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground"
            >
              <input
                type="radio"
                name="condition"
                checked={filters.condition === c}
                onChange={() => setFilters({ ...filters, condition: c })}
                className="size-4 accent-primary"
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-2 block text-sm font-semibold">Rentang Harga</Label>
        <div className="flex flex-col gap-1.5">
          {priceRanges.map((range, i) => (
            <label
              key={range.label}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground"
            >
              <input
                type="radio"
                name="price"
                checked={filters.priceIndex === i}
                onChange={() => setFilters({ ...filters, priceIndex: i })}
                className="size-4 accent-primary"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-2 block text-sm font-semibold">Kota</Label>
        <Select
          value={filters.city}
          onValueChange={(v) => setFilters({ ...filters, city: v as string })}
        >
          <SelectTrigger className="h-9 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-2 block text-sm font-semibold">
          Jarak maksimal: {filters.maxDistance} km
        </Label>
        <input
          type="range"
          min={1}
          max={50}
          value={filters.maxDistance}
          onChange={(e) =>
            setFilters({ ...filters, maxDistance: Number(e.target.value) })
          }
          className="w-full accent-primary"
          aria-label="Jarak maksimal"
        />
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>1 km</span>
          <span>50 km</span>
        </div>
      </div>
    </div>
  )
}

export function BrowseSection() {
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [sort, setSort] = useState("terbaru")

  const filtered = useMemo(() => {
    const range = priceRanges[filters.priceIndex]
    const result = products.filter((p) => {
      if (filters.category !== "Semua" && p.category !== filters.category)
        return false
      if (filters.condition !== "Semua" && p.condition !== filters.condition)
        return false
      if (p.price < range.min || p.price > range.max) return false
      if (filters.city !== "Semua Kota" && p.city !== filters.city) return false
      if (p.distanceKm > filters.maxDistance) return false
      return true
    })

    switch (sort) {
      case "termurah":
        result.sort((a, b) => a.price - b.price)
        break
      case "termahal":
        result.sort((a, b) => b.price - a.price)
        break
      case "terdekat":
        result.sort((a, b) => a.distanceKm - b.distanceKm)
        break
      default:
        break
    }
    return result
  }, [filters, sort])

  const activeFilterCount =
    (filters.condition !== "Semua" ? 1 : 0) +
    (filters.priceIndex !== 0 ? 1 : 0) +
    (filters.city !== "Semua Kota" ? 1 : 0) +
    (filters.maxDistance !== 50 ? 1 : 0)

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6" id="jelajahi">
      {/* Category pills */}
      <div className="-mx-4 mb-6 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-2 pb-1">
          <CategoryPill
            active={filters.category === "Semua"}
            onClick={() => setFilters({ ...filters, category: "Semua" })}
            label="Semua"
          />
          {categories.map((cat) => (
            <CategoryPill
              key={cat.slug}
              active={filters.category === cat.slug}
              onClick={() => setFilters({ ...filters, category: cat.slug })}
              label={cat.name}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-base font-semibold">Filter</h2>
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={() => setFilters(defaultFilters)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Reset
                </button>
              )}
            </div>
            <FilterControls filters={filters} setFilters={setFilters} />
          </div>
        </aside>

        {/* Results */}
        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              barang ditemukan
            </p>
            <div className="flex items-center gap-2">
              {/* Mobile filter */}
              <Sheet>
                <SheetTrigger
                  render={
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 gap-1.5 lg:hidden"
                    />
                  }
                >
                  <SlidersHorizontal className="size-4" />
                  Filter
                  {activeFilterCount > 0 && (
                    <Badge className="ml-0.5 size-5 rounded-full p-0">
                      {activeFilterCount}
                    </Badge>
                  )}
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader className="px-5">
                    <SheetTitle>Filter</SheetTitle>
                  </SheetHeader>
                  <div className="px-5 pb-6">
                    <FilterControls filters={filters} setFilters={setFilters} />
                    <Button
                      variant="ghost"
                      className="mt-5 w-full"
                      onClick={() => setFilters(defaultFilters)}
                    >
                      <X className="size-4" />
                      Reset filter
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <Select value={sort} onValueChange={(v) => setSort(v as string)}>
                <SelectTrigger className="h-9 w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20 text-center">
              <p className="font-heading text-lg font-semibold text-foreground">
                Tidak ada barang yang cocok
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Coba ubah atau reset filter pencarianmu.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setFilters(defaultFilters)}
              >
                Reset filter
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function CategoryPill({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:bg-muted",
      )}
    >
      {label}
    </button>
  )
}
