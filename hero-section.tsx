import { Search, MapPin, ShieldCheck, Tag, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const popular = ["iPhone", "Motor bekas", "Sofa", "Kamera", "Laptop", "Sepeda"]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            <Zap className="size-3.5" />
            Lebih dari 50.000 barang dijual di sekitarmu
          </p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Jual beli barang bekas & baru di sekitarmu
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Temukan barang terbaik dari penjual terdekat, atau pasang iklan gratis
            dalam hitungan menit. Aman, cepat, dan tanpa ribet.
          </p>

          <form
            action="/"
            role="search"
            className="mt-7 flex flex-col gap-2 rounded-2xl bg-background p-2 shadow-xl sm:flex-row"
          >
            <div className="relative flex flex-1 items-center">
              <Search className="pointer-events-none absolute left-3 size-5 text-muted-foreground" />
              <Input
                name="q"
                placeholder="Mau cari apa hari ini?"
                aria-label="Cari barang"
                className="h-12 border-0 bg-transparent pl-10 text-base text-foreground shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="relative flex items-center border-t border-border sm:border-l sm:border-t-0">
              <MapPin className="pointer-events-none absolute left-3 size-5 text-muted-foreground" />
              <Input
                name="lokasi"
                defaultValue="Jakarta Selatan"
                aria-label="Lokasi"
                className="h-12 border-0 bg-transparent pl-10 text-base text-foreground shadow-none focus-visible:ring-0 sm:w-44"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 rounded-xl px-6 text-base">
              Cari
            </Button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-primary-foreground/70">Populer:</span>
            {popular.map((term) => (
              <a
                key={term}
                href={`/?q=${encodeURIComponent(term)}`}
                className="rounded-full bg-primary-foreground/10 px-3 py-1 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              >
                {term}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4" />
              Penjual terverifikasi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Tag className="size-4" />
              Pasang iklan gratis
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" />
              Transaksi lokal
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
