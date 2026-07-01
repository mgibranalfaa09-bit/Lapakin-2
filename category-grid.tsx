import Link from "next/link"
import { categories } from "@/lib/data"

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Jelajahi kategori
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Temukan barang yang kamu cari dengan cepat
          </p>
        </div>
        <Link
          href="#jelajahi"
          className="hidden text-sm font-medium text-primary hover:underline sm:block"
        >
          Lihat semua
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <Link
              key={cat.slug}
              href={`/?kategori=${cat.slug}#jelajahi`}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-accent text-primary">
                <Icon className="size-6" />
              </span>
              <span className="text-xs font-medium leading-tight text-foreground">
                {cat.name}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
