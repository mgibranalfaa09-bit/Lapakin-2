import Link from "next/link"
import { Store } from "lucide-react"

const columns = [
  {
    title: "Lapakin",
    links: ["Tentang Kami", "Karier", "Blog", "Kontak"],
  },
  {
    title: "Jual Beli",
    links: ["Pasang Iklan", "Tips Aman", "Promosikan Iklan", "Pusat Bantuan"],
  },
  {
    title: "Kategori Populer",
    links: ["Elektronik", "Kendaraan", "Properti", "Fashion"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Store className="size-5" />
              </span>
              <span className="font-heading text-xl font-bold text-foreground">
                Lapakin
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Marketplace lokal untuk jual beli barang bekas dan baru di sekitarmu.
              Aman, cepat, dan tepercaya.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Lapakin. Dibuat di Indonesia.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-foreground">
              Syarat & Ketentuan
            </Link>
            <Link href="/" className="hover:text-foreground">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
