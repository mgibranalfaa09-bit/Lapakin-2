import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { BrowseSection } from "@/components/browse-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <div className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Barang terbaru di sekitarmu
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Ribuan barang bekas dan baru siap dibeli hari ini
            </p>
          </div>
          <BrowseSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
