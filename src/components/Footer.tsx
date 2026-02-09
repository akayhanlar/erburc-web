import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Er Burç Yapı Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold">ER BURÇ YAPI</h3>
                <p className="text-slate-400 text-sm">VE DEKORASYON</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              TOKİ projelerinde ahşap doğrama, kapı, dolap ve dekorasyon işlerinde 
              35 yılı aşkın tecrübemizle hizmetinizdeyiz. Kalite ve güvenilirlik 
              bizim için vazgeçilmezdir.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/erburcyapi"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/erburcyapi/"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/+905343816499"
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.25 6.33 2.25 11.79c0 2.09.61 4.02 1.77 5.7L2 22l4.64-1.96c1.62.89 3.45 1.36 5.4 1.36h.01c5.46 0 9.79-4.33 9.79-9.79C21.84 6.33 17.5 2 12.04 2zm0 17.55h-.01c-1.71 0-3.37-.46-4.82-1.33l-.35-.21-2.75 1.16.59-2.92-.19-.3a8.21 8.21 0 01-1.26-4.36c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.26.86 5.81 2.41a8.18 8.18 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.51-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.45.13-.15.17-.25.26-.42.09-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.81 2.77 4.39 3.89.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-500">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-500">İletişim Bilgileri</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-300 text-sm leading-relaxed">
                  Sanayi Keresteciler Sitesi,<br />
                  6. Sk. No:6<br />
                  Yakutiye/ERZURUM
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+904422490439" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">
                  0 (442) 249 04 39
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col text-slate-300 text-sm">
                  <a href="mailto:info@erburcyapi.com" className="hover:text-amber-500 transition-colors duration-200">
                    info@erburcyapi.com
                  </a>
                  <a href="mailto:erburcyapi@gmail.com" className="hover:text-amber-500 transition-colors duration-200">
                    erburcyapi@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2024 Er Burç Yapı ve Dekorasyon. Tüm hakları saklıdır.</p>
            <p className="mt-4 md:mt-0">
              Erzurum&apos;dan Türkiye&apos;ye kaliteli hizmet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
