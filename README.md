# 🌍 Travel with Limon

A modern, responsive travel and tourism website designed to showcase beautiful destinations, explore travel experiences, and help visitors discover memorable journeys.

**Travel with Limon** focuses on presenting destinations through an elegant interface, immersive photography, and dedicated destination pages.

---

## ✨ Features

### 🏠 Homepage
- Modern and responsive landing page.
- Attractive hero section.
- Navigation bar for easy browsing.
- Travel search section.
- Featured destination section.

### 📍 Destination Explorer
- Browse multiple travel destinations.
- Destination cards with photographs and descriptions.
- Dedicated pages for individual destinations.
- Dynamic destination routing using Next.js.

### 🖼️ Destination Gallery
- Dedicated photo galleries for each destination.
- Large featured destination photographs.
- Responsive image grid.
- Interactive image lightbox.
- Previous and next image navigation.
- Keyboard navigation support.
- Full-size image viewing.

### 📱 Responsive Design
- Mobile-friendly interface.
- Tablet and desktop compatibility.
- Responsive image layouts.
- Modern typography and visual styling.

---

## 🏔️ Destinations

The website currently features the following destinations:

| Destination | Region |
|---|---|
| Darjeeling | West Bengal |
| Darjeeling Offbeat | West Bengal |
| Kalimpong | West Bengal |
| Kalimpong Offbeat | West Bengal |
| North Sikkim | Sikkim |
| East Sikkim | Sikkim |
| Dooars | West Bengal |

Each destination has its own dedicated page and associated photo gallery.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and routing |
| React 19 | UI development |
| TypeScript | Type safety |
| Tailwind CSS | Styling and responsive layouts |
| Lucide React | Icons |
| Next.js Image | Image optimization |

---

## 📂 Project Structure

```text
travel-with-limon/
│
├── app/
│   ├── destinations/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── home/
│   │   └── destinations.tsx
│   │
│   ├── layout/
│   │   └── navbar.tsx
│   │
│   └── shared/
│       ├── destination-card.tsx
│       └── destination-gallery.tsx
│
├── data/
│   ├── destinations.ts
│   └── gallery.ts
│
├── public/
│   └── destinations/
│       ├── darjeeling/
│       ├── darjeeling_offbeat/
│       ├── kalimpong/
│       ├── kalimpong_offbeat/
│       ├── north_sikkim/
│       ├── east_sikkim/
│       └── dooars/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd travel-with-limon
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```text
http://localhost:3000
```

---

## 📸 Adding Destination Images

Destination photographs are stored inside the `public/destinations/` directory.

Example:

```text
public/
└── destinations/
    ├── darjeeling/
    │   ├── drj4.jpeg
    │   └── drj5.jpeg
    │
    ├── north_sikkim/
    │   ├── ns1.jpeg
    │   ├── ns2.webp
    │   ├── ns3.jpeg
    │   └── ns4.webp
```

The destination image paths are configured in:

- `data/destinations.ts`
- `data/gallery.ts`

When adding new photographs, update the corresponding gallery configuration.

---

## 🔗 Dynamic Destination Routing

Individual destination pages use Next.js dynamic routing.

Example URLs:

```text
/destinations/darjeeling
/destinations/kalimpong
/destinations/north_sikkim
/destinations/dooars
```

The `[slug]` route dynamically loads destination information and its associated gallery.

---

## 🎨 Design Philosophy

Travel with Limon aims to provide:

- A clean and modern user interface.
- Beautiful destination photography.
- Easy navigation.
- An immersive travel discovery experience.
- Consistent visual styling across devices.

---

## 🔮 Future Improvements

Potential future additions include:

- Online tour and package booking.
- Detailed travel itineraries.
- Destination-wise package pricing.
- Customer testimonials and reviews.
- Contact and enquiry forms.
- WhatsApp enquiry integration.
- Admin dashboard for managing destinations.
- Database integration for dynamic content.
- SEO improvements and performance optimization.

---

## 👨‍💻 Development

This project is developed using modern frontend technologies with a focus on responsive design, reusable components, and maintainable code.

---

## 📄 License

All rights reserved unless otherwise specified.

Destination photographs, branding, and other project assets may belong to their respective owners.

---

**Travel with Limon — Explore More. Travel Better.** 🌍
