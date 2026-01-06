import inventarisImage from "../assets/projects/management-inventaris/inventaris.png";
import inventaris1 from "../assets/projects/management-inventaris/inventaris1.png";
import inventaris2 from "../assets/projects/management-inventaris/inventaris2.png";
import inventaris3 from "../assets/projects/management-inventaris/inventaris3.png";
import inventaris4 from "../assets/projects/management-inventaris/inventaris4.png";
import inventaris5 from "../assets/projects/management-inventaris/inventaris5.png";

const esimsData = {
  id: 5,
  slug: "e-sims",
  title: "E-SIMS - School Inventory Management",
  description:
    "Electronic School Inventory Management System - A modern inventory management system designed to facilitate asset management, condition tracking, and maintenance reporting efficiently with real-time updates.",
  fullDescription: `E-SIMS adalah sistem manajemen inventaris modern yang dirancang khusus untuk institusi pendidikan. Aplikasi ini memudahkan pengelolaan aset sekolah, pelacakan kondisi barang, serta manajemen pemeliharaan dan laporan kerusakan secara efisien, responsif, dan real-time.

Sistem ini mengintegrasikan berbagai aspek pengelolaan inventaris sekolah dalam satu platform yang user-friendly, mulai dari pencatatan aset, pelaporan kerusakan, hingga analisis biaya pemeliharaan. Dengan dukungan multi-role access dan dashboard interaktif, E-SIMS membantu sekolah mengelola aset lebih terstruktur dan transparan.

📦 Asset Management: Kelola semua aset sekolah dengan sistem CRUD lengkap, pelacakan detail kode-merek-kondisi, filter canggih berdasarkan kategori/ruangan, dan export PDF untuk laporan siap cetak.

⚠️ Reporting & Maintenance: Sistem tiket pelaporan kerusakan dengan bukti foto, tracking status real-time (pending/process/fixed), dan riwayat perbaikan lengkap dengan pencatatan biaya untuk transparansi anggaran.

📊 Interactive Dashboard: Visualisasi data dengan Chart.js menampilkan statistik real-time kondisi aset, biaya pemeliharaan, dan quick summary untuk setiap kategori dan ruangan.

📱 Mobile-First Design: UI responsif sempurna di semua perangkat dengan ergonomic UX - tombol aksi strategis mudah dijangkau, dan clean aesthetic menggunakan Tailwind CSS untuk pengalaman mobile terbaik.

⚡ High Performance: Dioptimasi dengan dashboard caching menggunakan Redis (11 queries → 0 queries), eager loading untuk mencegah N+1 query problem, database indexing, dan minified assets (ukuran turun ~80%) untuk kecepatan loading 3-5x lebih cepat.

👥 Multi-Role Access: Sistem akses berbeda untuk Admin, Teknisi, dan User biasa, memastikan setiap pengguna hanya mengakses fitur sesuai kewenangannya untuk keamanan data yang optimal.`,
  image: inventarisImage,
  images: [
    inventarisImage,
    inventaris1,
    inventaris2,
    inventaris3,
    inventaris4,
    inventaris5,
  ],
  date: "November, 2024",
  tags: ["Full-Stack", "Laravel", "School System"],
  technologies: [
    "Laravel",
    "PHP 8.2",
    "Tailwind CSS",
    "Alpine.js",
    "Chart.js",
    "MySQL",
    "Vite",
    "DomPDF",
  ],
  demoLink: "",
  githubLink: "https://github.com/adibsya/e-sims",
  features: [
    "Comprehensive asset CRUD with detailed tracking",
    "Advanced filtering by category, room, and condition",
    "PDF export for printable asset reports",
    "Damage reporting system with photo evidence",
    "Real-time status tracking (pending/process/fixed)",
    "Maintenance logs with cost tracking",
    "Interactive dashboard with Chart.js visualization",
    "Real-time statistics for assets and maintenance costs",
    "Mobile-first responsive design with ergonomic UX",
    "Multi-role user management (Admin, Technician, User)",
    "Redis caching for 3-5x faster dashboard loading",
    "Database optimization with eager loading and indexing",
  ],
};

export default esimsData;
