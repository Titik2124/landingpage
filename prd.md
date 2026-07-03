
# PRD - Chatime Landing Page

## 1. Overview

### 1.1 Product Name

Chatime Indonesia - Official Landing Page

### 1.2 Purpose

Membuat landing page resmi Chatime Indonesia yang modern, responsif, dan menarik untuk mempromosikan brand Chatime, menampilkan menu produk, lokasi outlet, promo terbaru, dan memudahkan pengguna untuk melakukan pemesanan atau menemukan toko terdekat.

### 1.3 Target Audience

- Remaja dan dewasa muda (usia 15-35 tahun)
- Pecinta minuman bubble tea / milk tea
- Pengguna mobile-first (70%+ akses via smartphone)
- Masyarakat urban di kota-kota besar Indonesia

### 1.4 Goals & Objectives

- Meningkatkan brand awareness Chatime di Indonesia
- Mendorong kunjungan ke outlet Chatime terdekat
- Menampilkan menu dan promo terbaru secara real-time
- Meningkatkan engagement melalui visual yang menarik
- Menyediakan informasi franchise / partnership

---

## 2. Design Requirements

### 2.1 Brand Guidelines

- **Primary Color:** `#7B2D8E` (Ungu Chatime)
- **Secondary Color:** `#F5A623` (Kuning/Emas)
- **Accent Color:** `#FFFFFF` (Putih), `#2D2D2D` (Hitam)
- **Font:** Poppins / Montserrat (modern, clean, youthful)
- **Style:** Modern, playful, vibrant, dengan elemen visual bubble tea

### 2.2 Design Principles

- Mobile-first responsive design
- Smooth scroll animations dan micro-interactions
- High-quality product imagery
- Clean layout dengan white space yang cukup
- Konsisten dengan brand identity Chatime global

---

## 3. Page Structure & Sections

### 3.1 Navbar (Navigation Bar)

- **Logo** Chatime (kiri)
- **Menu items:** Home, Menu, Promo, Outlet, About, Franchise
- **CTA Button:** "Order Now" (kanan, highlighted)
- Sticky navbar dengan efek transparan → solid saat scroll
- Hamburger menu untuk mobile

### 3.2 Hero Section

- **Headline:** Tagline utama Chatime (contoh: "Make Every Sip Count")
- **Sub-headline:** Deskripsi singkat tentang Chatime
- **CTA Buttons:** "Order Now" & "Find Store"
- **Visual:** Hero image/ilustrasi bubble tea dengan animasi floating bubbles
- **Background:** Gradient ungu dengan elemen dekoratif

### 3.3 About Section

- Cerita singkat Chatime (didirikan tahun 2005 di Taiwan)
- Visi & misi Chatime Indonesia
- Statistik: jumlah outlet, kota, pelanggan
- Animasi counter untuk statistik (count-up animation)

### 3.4 Menu Section

- **Kategori:** Milk Tea, Fruit Tea, Coffee, Smoothies, Seasonal
- **Tab/Filter** berdasarkan kategori
- **Card produk** berisi: gambar, nama, deskripsi singkat, harga
- Hover effect pada card (scale up, shadow)
- **CTA:** "Lihat Menu Lengkap"

### 3.5 Promo / Offers Section

- Banner carousel promo terbaru
- Highlight 2-3 promo aktif
- Timer countdown untuk promo terbatas
- **CTA:** "Grab the Deal"

### 3.6 Best Seller / Signature Section

- Showcase 3-4 produk andalan Chatime
- Large product images
- Testimoni / rating pelanggan
- Animasi parallax atau scroll-triggered

### 3.7 Outlet / Store Locator Section

- Embedded Google Maps
- Search bar untuk cari outlet berdasarkan lokasi
- List outlet terdekat dengan detail (alamat, jam buka, no. telp)
- Filter berdasarkan kota/area

### 3.8 Franchise / Partnership Section

- Informasi peluang franchise
- Benefit bergabung dengan Chatime
- Form inquiry singkat (nama, email, kota, pesan)
- **CTA:** "Join Us"

### 3.9 Testimonials Section

- Carousel testimoni pelanggan
- Rating bintang
- Foto dan nama pelanggan
- Social proof dari social media

### 3.10 Footer

- Logo Chatime
- Quick links navigasi
- Social media icons (Instagram, TikTok, Facebook, YouTube)
- Contact info (email, phone)
- Copyright notice
- Newsletter signup (opsional)

---

## 4. Functional Requirements

### 4.1 Performance

- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Lighthouse score > 90 (Performance, Accessibility, SEO)
- Image optimization (WebP format, lazy loading)
- Code splitting dan lazy loading untuk komponen

### 4.2 Responsive Design

- Breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px)
- Touch-friendly buttons (min 44x44px)
- Optimized images untuk setiap breakpoint

### 4.3 SEO

- Meta tags (title, description, keywords)
- Open Graph tags untuk social sharing
- Structured data (JSON-LD) untuk Organization & LocalBusiness
- Semantic HTML elements
- Alt text untuk semua gambar
- Sitemap.xml & robots.txt

### 4.4 Animations & Interactions

- Scroll-triggered animations (fade-in, slide-up)
- Smooth scrolling antar section
- Hover effects pada buttons dan cards
- Loading skeleton untuk konten dinamis
- Parallax effect pada hero section

### 4.5 Accessibility (A11y)

- ARIA labels pada elemen interaktif
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1
- Focus indicator yang terlihat
- Screen reader friendly

---

## 5. Tech Stack

### 5.1 Recommended Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React / React Icons
- **Deployment:** Vercel
- **CMS (opsional):** Sanity / Contentful untuk konten dinamis

### 5.2 Additional Libraries

- `react-intersection-observer` — untuk scroll-triggered animations
- `swiper` — untuk carousel/slider
- `next/image` — untuk image optimization
- `next/font` — untuk font optimization

---

## 6. Content & Assets

### 6.1 Copywriting

| Section   | Headline                | Sub-text                                                                |
| --------- | ----------------------- | ----------------------------------------------------------------------- |
| Hero      | Make Every Sip Count    | Nikmati kesegaran Chatime, teh premium#1 dari Taiwan                    |
| About     | Our Story               | Sejak 2005, Chatime telah menghadirkan kebahagiaan dalam setiap tegukan |
| Menu      | Explore Our Menu        | Dari milk tea klasik hingga fruit tea segar, ada untuk semua selera     |
| Promo     | Hot Deals!              | Jangan lewatkan promo spesial bulan ini                                 |
| Franchise | Join the Chatime Family | Jadilah bagian dari brand bubble tea global                             |

### 6.2 Assets Needed

- Logo Chatime (SVG, PNG)
- Product images (high-res, transparent background)
- Outlet/store photos
- Brand pattern/texture assets
- Social media icons
- Favicon

---

## 7. Color Palette & Typography

### 7.1 Colors

```
Primary Purple:    #7B2D8E
Dark Purple:       #5A1D6B
Light Purple:      #B565C7
Gold/Yellow:       #F5A623
White:             #FFFFFF
Light Gray:        #F7F7F7
Dark Gray:         #2D2D2D
Text Gray:         #4A4A4A
```

### 7.2 Typography

```
Headings: Poppins Bold (700)
Sub-headings: Poppins SemiBold (600)
Body: Poppins Regular (400)
Caption: Poppins Light (300)
```

---

## 8. Milestones & Timeline

| Phase   | Task                                                    | Duration |
| ------- | ------------------------------------------------------- | -------- |
| Phase 1 | Setup project, install dependencies, configure Tailwind | 1 day    |
| Phase 2 | Build Navbar, Hero Section, Footer                      | 2 days   |
| Phase 3 | Build About, Menu, Best Seller sections                 | 2 days   |
| Phase 4 | Build Promo, Outlet Locator, Franchise sections         | 2 days   |
| Phase 5 | Animations, responsive tuning, accessibility            | 2 days   |
| Phase 6 | SEO optimization, performance audit, testing            | 1 day    |
| Phase 7 | Deployment & final review                               | 1 day    |

**Total Estimated Duration:** ~11 working days

---

## 9. Success Metrics

- **Bounce Rate:** < 40%
- **Average Session Duration:** > 2 minutes
- **Mobile Performance Score:** > 90
- **Conversion Rate (Order CTA):** > 3%
- **Page Load Time:** < 3 seconds

---

## 10. Out of Scope (Future Iterations)

- Online ordering / e-commerce integration
- Loyalty program / membership system
- Multi-language support (EN/ID)
- Blog / news section
- Integration dengan GoFood / GrabFood / ShopeeFood
- Chatbot / live chat support
