'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/projeler', label: 'Projelerimiz' },
  { href: '/referanslar', label: 'Referanslar' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpeg"
              alt="Er Burç Yapı ve Dekorasyon"
              width={260}
              height={80}
              className="rounded-md h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200 shadow-sm"
            >
              Bize Ulaşın
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Menüyü aç"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-amber-600 hover:bg-slate-50 px-4 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/iletisim"
                onClick={() => setIsOpen(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-md font-medium text-center transition-colors duration-200 mx-4 mt-2"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
