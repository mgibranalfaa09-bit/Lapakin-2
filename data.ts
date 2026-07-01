import {
  Smartphone,
  Bike,
  Sofa,
  Camera,
  Footprints,
  Laptop,
  Car,
  Shirt,
  Home,
  Gamepad2,
  Baby,
  Dumbbell,
  type LucideIcon,
} from "lucide-react"

export type Category = {
  slug: string
  name: string
  icon: LucideIcon
}

export const categories: Category[] = [
  { slug: "elektronik", name: "Elektronik", icon: Smartphone },
  { slug: "kendaraan", name: "Kendaraan", icon: Car },
  { slug: "motor", name: "Motor", icon: Bike },
  { slug: "rumah-tangga", name: "Rumah Tangga", icon: Sofa },
  { slug: "fashion", name: "Fashion", icon: Shirt },
  { slug: "komputer", name: "Komputer", icon: Laptop },
  { slug: "kamera", name: "Kamera", icon: Camera },
  { slug: "olahraga", name: "Olahraga", icon: Dumbbell },
  { slug: "hobi", name: "Hobi & Musik", icon: Gamepad2 },
  { slug: "properti", name: "Properti", icon: Home },
  { slug: "ibu-anak", name: "Ibu & Anak", icon: Baby },
  { slug: "sepatu", name: "Sepatu", icon: Footprints },
]

export type Condition = "Baru" | "Bekas - Seperti Baru" | "Bekas - Layak Pakai"

export type Seller = {
  name: string
  avatar?: string
  joinedYear: number
  rating: number
  reviews: number
  responseRate: number
  verified: boolean
}

export type Product = {
  id: string
  title: string
  price: number
  negotiable: boolean
  image: string
  images: string[]
  category: string
  condition: Condition
  city: string
  area: string
  distanceKm: number
  postedAgo: string
  description: string
  featured?: boolean
  views: number
  seller: Seller
}

const sellers: Seller[] = [
  {
    name: "Budi Santoso",
    joinedYear: 2021,
    rating: 4.9,
    reviews: 132,
    responseRate: 98,
    verified: true,
  },
  {
    name: "Siti Rahayu",
    joinedYear: 2022,
    rating: 4.8,
    reviews: 64,
    responseRate: 95,
    verified: true,
  },
  {
    name: "Andi Pratama",
    joinedYear: 2020,
    rating: 4.7,
    reviews: 210,
    responseRate: 92,
    verified: false,
  },
  {
    name: "Dewi Lestari",
    joinedYear: 2023,
    rating: 5.0,
    reviews: 18,
    responseRate: 100,
    verified: true,
  },
]

export const products: Product[] = [
  {
    id: "iphone-13-128gb",
    title: "iPhone 13 128GB Midnight - Fullset Mulus",
    price: 7800000,
    negotiable: true,
    image: "/products/iphone.png",
    images: ["/products/iphone.png"],
    category: "elektronik",
    condition: "Bekas - Seperti Baru",
    city: "Jakarta Selatan",
    area: "Kebayoran Baru",
    distanceKm: 2.4,
    postedAgo: "2 jam lalu",
    description:
      "iPhone 13 128GB warna Midnight, kondisi 95% mulus tanpa lecet. Fullset dengan box, charger, dan kabel original. Battery health 89%. iCloud aman, bisa cek di tempat. Nego tipis untuk yang serius.",
    featured: true,
    views: 1243,
    seller: sellers[0],
  },
  {
    id: "honda-vario-150",
    title: "Honda Vario 150 2019 Pajak Hidup Surat Lengkap",
    price: 16500000,
    negotiable: true,
    image: "/products/motor.png",
    images: ["/products/motor.png"],
    category: "motor",
    condition: "Bekas - Layak Pakai",
    city: "Bandung",
    area: "Cibeunying",
    distanceKm: 5.1,
    postedAgo: "5 jam lalu",
    description:
      "Honda Vario 150 tahun 2019, mesin halus, kelistrikan normal. Pajak hidup sampai 2025, STNK dan BPKB lengkap atas nama sendiri. Ban masih tebal, siap pakai harian.",
    featured: true,
    views: 876,
    seller: sellers[2],
  },
  {
    id: "sofa-3-seater",
    title: "Sofa 3 Seater Fabric Minimalis Warna Krem",
    price: 2250000,
    negotiable: true,
    image: "/products/sofa.png",
    images: ["/products/sofa.png"],
    category: "rumah-tangga",
    condition: "Bekas - Seperti Baru",
    city: "Tangerang",
    area: "BSD City",
    distanceKm: 8.7,
    postedAgo: "1 hari lalu",
    description:
      "Sofa 3 seater bahan fabric warna krem, baru pakai 8 bulan. Busa masih empuk, tidak ada sobek atau noda. Pindahan rumah jadi dilepas. Bisa diantar area BSD.",
    views: 432,
    seller: sellers[1],
  },
  {
    id: "sony-a6400",
    title: "Sony A6400 + Lensa Kit 16-50mm Like New",
    price: 9500000,
    negotiable: false,
    image: "/products/kamera.png",
    images: ["/products/kamera.png"],
    category: "kamera",
    condition: "Bekas - Seperti Baru",
    city: "Jakarta Pusat",
    area: "Menteng",
    distanceKm: 3.9,
    postedAgo: "8 jam lalu",
    description:
      "Sony A6400 body + lensa kit 16-50mm. Shutter count 4.200, fungsi semua normal. Cocok untuk vlog dan content creator. Dapat box, baterai 2 buah, dan tas kamera.",
    featured: true,
    views: 657,
    seller: sellers[3],
  },
  {
    id: "nike-pegasus-40",
    title: "Nike Air Zoom Pegasus 40 Size 42 Original",
    price: 950000,
    negotiable: true,
    image: "/products/sepatu.png",
    images: ["/products/sepatu.png"],
    category: "sepatu",
    condition: "Bekas - Layak Pakai",
    city: "Surabaya",
    area: "Gubeng",
    distanceKm: 12.3,
    postedAgo: "3 jam lalu",
    description:
      "Nike Pegasus 40 size 42, ori beli di store resmi. Pakai 3x lari, kondisi 90%. Box masih ada. Lepas karena kekecilan.",
    views: 298,
    seller: sellers[2],
  },
  {
    id: "macbook-air-m1",
    title: "MacBook Air M1 2020 256GB Garansi Panjang",
    price: 9200000,
    negotiable: true,
    image: "/products/laptop.png",
    images: ["/products/laptop.png"],
    category: "komputer",
    condition: "Bekas - Seperti Baru",
    city: "Jakarta Barat",
    area: "Kebon Jeruk",
    distanceKm: 6.2,
    postedAgo: "12 jam lalu",
    description:
      "MacBook Air M1 2020, RAM 8GB, SSD 256GB. Cycle count 78, battery health 94%. Mulus tanpa dent. Cocok untuk kerja dan kuliah. Charger original included.",
    featured: true,
    views: 1102,
    seller: sellers[0],
  },
  {
    id: "polygon-mtb",
    title: "Sepeda Gunung Polygon Premier 27.5 Inch",
    price: 2700000,
    negotiable: true,
    image: "/products/sepeda.png",
    images: ["/products/sepeda.png"],
    category: "olahraga",
    condition: "Bekas - Layak Pakai",
    city: "Depok",
    area: "Margonda",
    distanceKm: 9.8,
    postedAgo: "2 hari lalu",
    description:
      "Polygon Premier MTB 27.5 inch, 21 speed Shimano. Rem cakram depan belakang. Velg dan ban masih bagus. Tinggal pakai gowes.",
    views: 376,
    seller: sellers[1],
  },
  {
    id: "gitar-yamaha-f310",
    title: "Gitar Akustik Yamaha F310 Original Suara Mantap",
    price: 1100000,
    negotiable: false,
    image: "/products/gitar.png",
    images: ["/products/gitar.png"],
    category: "hobi",
    condition: "Bekas - Seperti Baru",
    city: "Yogyakarta",
    area: "Sleman",
    distanceKm: 4.5,
    postedAgo: "6 jam lalu",
    description:
      "Yamaha F310 original, suara jernih dan nyaring. Senar baru ganti. Bonus tas gitar dan pick. Cocok untuk pemula maupun yang sudah mahir.",
    views: 211,
    seller: sellers[3],
  },
  {
    id: "iphone-12-64gb",
    title: "iPhone 12 64GB Blue Mulus Batangan",
    price: 5400000,
    negotiable: true,
    image: "/products/iphone.png",
    images: ["/products/iphone.png"],
    category: "elektronik",
    condition: "Bekas - Layak Pakai",
    city: "Bekasi",
    area: "Bekasi Timur",
    distanceKm: 14.1,
    postedAgo: "1 hari lalu",
    description:
      "iPhone 12 64GB warna biru. Kondisi 88%, ada baret halus wajar pemakaian. Battery health 82%. Unit only, tanpa box. Harga nego.",
    views: 540,
    seller: sellers[2],
  },
  {
    id: "kursi-kerja-ergonomis",
    title: "Kursi Kantor Ergonomis Headrest Hitam",
    price: 1350000,
    negotiable: true,
    image: "/products/sofa.png",
    images: ["/products/sofa.png"],
    category: "rumah-tangga",
    condition: "Bekas - Seperti Baru",
    city: "Jakarta Selatan",
    area: "Tebet",
    distanceKm: 3.3,
    postedAgo: "9 jam lalu",
    description:
      "Kursi kerja ergonomis dengan headrest, sandaran reclining, dan roda mulus. Pakai 6 bulan untuk WFH. Sangat nyaman untuk duduk lama.",
    views: 187,
    seller: sellers[0],
  },
  {
    id: "fujifilm-xt30",
    title: "Fujifilm X-T30 Body Only Silver Lengkap",
    price: 8800000,
    negotiable: true,
    image: "/products/kamera.png",
    images: ["/products/kamera.png"],
    category: "kamera",
    condition: "Bekas - Layak Pakai",
    city: "Semarang",
    area: "Tembalang",
    distanceKm: 7.6,
    postedAgo: "1 hari lalu",
    description:
      "Fujifilm X-T30 body only warna silver. Shutter count 9.800. Film simulation lengkap, hasil foto tajam. Dapat 2 baterai dan charger.",
    views: 423,
    seller: sellers[3],
  },
  {
    id: "adidas-ultraboost",
    title: "Adidas Ultraboost Light Size 41 Original",
    price: 1450000,
    negotiable: false,
    image: "/products/sepatu.png",
    images: ["/products/sepatu.png"],
    category: "sepatu",
    condition: "Bekas - Seperti Baru",
    city: "Jakarta Utara",
    area: "Kelapa Gading",
    distanceKm: 11.2,
    postedAgo: "4 jam lalu",
    description:
      "Adidas Ultraboost Light size 41 (UK 7.5). Original, beli di Adidas store. Pakai 2x, masih sangat empuk. Box dan struk ada.",
    views: 264,
    seller: sellers[1],
  },
]

export function formatRupiah(value: number): string {
  return "Rp" + value.toLocaleString("id-ID")
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getCategoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug
}

export const cities = [
  "Semua Kota",
  "Jakarta Selatan",
  "Jakarta Pusat",
  "Jakarta Barat",
  "Jakarta Utara",
  "Bandung",
  "Surabaya",
  "Tangerang",
  "Bekasi",
  "Depok",
  "Yogyakarta",
  "Semarang",
]
