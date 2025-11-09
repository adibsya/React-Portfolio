# Project Data Structure

## Overview

Data setiap project sekarang dipisahkan ke dalam file individual untuk memudahkan maintenance dan scalability.

## Struktur Folder

```
src/
├── data/
│   ├── index.js          # Central registry dan helper functions
│   ├── cookingApp.js     # Data project Cooking App
│   ├── justibotAi.js     # Data project JustiBot AI
│   └── mobileApp.js      # Data project Mobile App
└── components/
    ├── projectExample.jsx  # Grid display untuk semua projects
    └── projectDetail.jsx   # Modal detail untuk satu project
```

## Cara Menambah Project Baru

### 1. Buat File Data Baru

Buat file baru di folder `src/data/`, contoh: `myNewProject.js`

```javascript
const myNewProjectData = {
  id: 4,
  slug: "my-new-project",
  title: "My New Project Title",
  description: "Short description untuk card preview",
  fullDescription: `Deskripsi lengkap project...
  
  Bisa multi-line dan dengan formatting.`,
  image: "/assets/my-project.png", // atau import dari assets
  images: [
    // Array gambar untuk slider di detail page (opsional)
    "/assets/my-project-1.png",
    "/assets/my-project-2.png",
    "/assets/my-project-3.png",
    "/assets/my-project-4.png",
  ],
  date: "October 23, 2024",
  tags: ["React", "Node.js", "MongoDB"],
  technologies: ["React", "Express", "MongoDB", "Docker"],
  demoLink: "https://demo-link.com",
  githubLink: "https://github.com/username/repo",
  features: ["Feature 1", "Feature 2", "Feature 3"],
};

export default myNewProjectData;
```

### 2. Register di index.js

Tambahkan import dan register project di `src/data/index.js`:

```javascript
import cookingAppData from "./cookingApp";
import justibotAiData from "./justibotAi";
import mobileAppData from "./mobileApp";
import myNewProjectData from "./myNewProject"; // Import baru

const projectsData = {
  "cooking-app": cookingAppData,
  "justibot-ai": justibotAiData,
  "mobile-app": mobileAppData,
  "my-new-project": myNewProjectData, // Register di sini
};

// ... rest of code
```

### 3. Done!

Project baru otomatis muncul di grid dan bisa dibuka detailnya.

## Schema Data Project

```typescript
{
  id: number,                    // Unique ID
  slug: string,                  // URL-friendly identifier
  title: string,                 // Judul project
  description: string,           // Deskripsi pendek (untuk card)
  fullDescription: string,       // Deskripsi lengkap (untuk detail page)
  image: string,                 // Path atau URL gambar utama (untuk card)
  images?: string[],             // Array gambar untuk slider (opsional)
  date: string,                  // Tanggal project
  tags: string[],               // Tags untuk kategori
  technologies: string[],       // Teknologi yang digunakan
  demoLink: string,             // Link ke live demo
  githubLink: string,           // Link ke GitHub repo
  features: string[],           // List fitur utama
}
```

## Image Slider Feature

Project detail sekarang mendukung **image slider** untuk menampilkan multiple screenshots/tampilan project.

### Cara Menggunakan:

1. Tambahkan property `images` (array) ke data project
2. Jika `images` ada dan memiliki lebih dari 1 gambar, slider akan muncul otomatis
3. Jika `images` tidak ada, akan fallback ke `image` (single image)

### Fitur Slider:

- ⬅️ ➡️ Navigation buttons (muncul saat hover)
- 🔵 Dot indicators di bawah gambar
- ⌨️ Keyboard navigation (Arrow Left/Right)
- 📱 Touch/swipe support (di mobile)
- 🔢 Image counter (top-right corner)
- ♾️ Loop navigation (dari gambar terakhir ke pertama)

### Contoh:

```javascript
const projectData = {
  // ... data lainnya
  image: cookingAppImage, // Gambar untuk card
  images: [
    // Gambar untuk slider
    cookingAppImage,
    "/assets/cooking-app-2.png",
    "/assets/cooking-app-3.png",
    "https://example.com/image4.jpg",
  ],
  // ... data lainnya
};
```

## Helper Functions

### `getAllProjects()`

Mengembalikan array semua projects untuk ditampilkan di grid.

```javascript
import { getAllProjects } from "../data";

const projects = getAllProjects();
// Returns: [cookingAppData, justibotAiData, mobileAppData]
```

### `getProjectBySlug(slug)`

Mengembalikan data satu project berdasarkan slug.

```javascript
import { getProjectBySlug } from "../data";

const project = getProjectBySlug("cooking-app");
// Returns: cookingAppData object
```

## Keuntungan Struktur Ini

1. **Modular**: Setiap project punya file sendiri
2. **Easy to Maintain**: Perubahan pada satu project tidak affect yang lain
3. **Scalable**: Mudah menambah project baru tanpa mengubah component
4. **Clean Code**: Component tidak tercampur dengan data
5. **Type Safe**: Mudah untuk menambahkan TypeScript di masa depan
6. **Git Friendly**: Conflict lebih jarang karena file terpisah

## Tips

- Simpan semua images di folder `public/assets/` atau `src/assets/`
- Gunakan slug yang URL-friendly (lowercase, dash-separated)
- Pastikan semua required fields diisi
- Gunakan image dengan aspect ratio yang konsisten (16:9 recommended untuk slider)
- Untuk slider, tambahkan 3-5 gambar yang menunjukkan berbagai tampilan project
- Isi demoLink dan githubLink dengan URL yang valid (atau "#" jika belum ada)
- Keyboard shortcuts: Arrow Left/Right (navigate), Escape (close modal)
