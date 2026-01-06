import stockImage from "../assets/projects-optimized/stock-management/stock.webp";
import stock1 from "../assets/projects-optimized/stock-management/stock1.webp";
import stock2 from "../assets/projects-optimized/stock-management/stock2.webp";
import stock3 from "../assets/projects-optimized/stock-management/stock3.webp";
import stock4 from "../assets/projects-optimized/stock-management/stock4.webp";
import stock5 from "../assets/projects-optimized/stock-management/stock5.webp";

const stockManagementData = {
  id: 4,
  slug: "stock-management",
  title: "Stock Management System",
  description:
    "A powerful web-based Inventory Management System built with Laravel 12 and Livewire 3. Complete solution for managing stock, purchase & sales transactions, and generating real-time financial reports.",
  fullDescription: `Sistem Manajemen Inventaris berbasis web yang powerful dan modern, dibangun dengan Laravel 12 dan Livewire 3. Aplikasi ini dirancang untuk membantu bisnis dalam mengelola stok barang, transaksi pembelian & penjualan, serta menghasilkan laporan keuangan secara real-time.

Aplikasi ini menggabungkan kekuatan backend Laravel yang robust dengan interaktivitas frontend Livewire, memberikan pengalaman pengguna yang seamless tanpa perlu menulis JavaScript kompleks. Dengan dukungan multi-warehouse, tracking real-time, dan sistem laporan yang komprehensif, aplikasi ini siap mendukung operasional bisnis Anda.

📦 Inventory Management: Kelola stok multi-warehouse dengan real-time tracking, barcode support, dan notifikasi otomatis untuk stok menipis. Pantau pergerakan barang di semua gudang dengan dashboard yang intuitif.

💰 Sales & Purchase System: Point of Sale (POS) interface yang responsif dan mudah digunakan, lengkap dengan sistem pembelian, payment terms, dan tracking pembayaran untuk mendukung cash flow bisnis.

👥 Stakeholder Management: Database lengkap untuk customer dan supplier management, plus sistem user management dengan role & permissions untuk kontrol akses yang aman.

📈 Analytics & Reports: Laporan laba rugi detail, stock reports, transaction history, dan expense tracking untuk memberikan insights bisnis yang akurat dan membantu pengambilan keputusan.

⚡ Performance Optimized: Database optimization dengan eager loading, frontend build dengan Vite untuk kecepatan maksimal, caching strategy yang comprehensive, dan code organization yang clean mengikuti best practices.

🚀 Modern Tech Stack: Dibangun dengan Laravel 12, Livewire 3, Tailwind CSS 4, dan Vite 7 untuk development experience yang luar biasa dan performa production yang optimal.`,
  image: stockImage,
  images: [stockImage, stock1, stock2, stock3, stock4, stock5],
  date: "December, 2024",
  tags: ["Full-Stack", "Laravel", "Livewire"],
  technologies: [
    "Laravel 12",
    "Livewire 3",
    "PHP 8.2",
    "Tailwind CSS 4",
    "Vite 7",
    "MySQL",
    "Alpine.js",
  ],
  demoLink: "",
  githubLink: "https://github.com/adibsya/stock-management",
  features: [
    "Multi-warehouse stock management with real-time tracking",
    "Point of Sale (POS) system with intuitive interface",
    "Purchase order and supplier management",
    "Customer database and sales tracking",
    "Profit & Loss reporting with detailed analytics",
    "Barcode integration for product tracking",
    "Payment terms and installment support",
    "Expense tracking and financial reports",
    "User management with roles & permissions",
    "Real-time updates without page refresh (Livewire)",
    "Responsive design with Tailwind CSS",
    "Optimized performance with caching strategies",
  ],
};

export default stockManagementData;
