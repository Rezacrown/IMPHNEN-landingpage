"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">
          IMPNEN
        </h1>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#"
            className="font-medium text-slate-700 hover:text-[#3b82f6] transition-colors"
          >
            Beranda
          </Link>
          <Link
            href="#features"
            className="font-medium text-slate-700 hover:text-[#3b82f6] transition-colors"
          >
            Fitur
          </Link>
          <Link
            href="#testimonial"
            className="font-medium text-slate-700 hover:text-[#3b82f6] transition-colors"
          >
            Testimoni
          </Link>
          <Link
            href="#merchant"
            className="font-medium text-slate-700 hover:text-[#3b82f6] transition-colors"
          >
            Toko
          </Link>
        </nav>
        <button className="md:hidden bg-[#3b82f6] text-white p-2 rounded-lg hover:bg-[#2563eb] transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
