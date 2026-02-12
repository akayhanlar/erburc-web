'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const SLIDES = [
  {
    title: 'TOKİ & Müteahhit İşleri',
    image: '/images/toki.webp',
    subtitle: 'Toplu Konut ve Taahhüt Projelerinde Uzman Çözüm Ortağı',
    description: '55 yılı aşkın tecrübemizle tüm ahşap doğrama, kapı, dolap ve dekorasyon işlerinde güvenilir çözüm ortağınız.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Ofis Yenileme İşleri',
    image: '/images/ofis.webp',
    subtitle: 'Kurumsal ve Ofis Mekanlarının Yenilenmesi',
    description: 'Ofisleriniz için modern çalışma alanları, toplantı odaları, lobi ve resepsiyon dekorasyonu.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Mutfak Yenileme İşleri',
    image: '/images/mutfak.jpg',
    subtitle: 'Hayalinizdeki Mutfağa Kavuşun',
    description: 'Mutfak dolapları, tezgah montajı, ankastre üniteler ve tam mutfak yenileme hizmetleri.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Dış Cephe İşleri',
    image: '/images/dis_cephe.jpg',
    subtitle: 'Bina Dış Cephe ve Cephe Kaplama',
    description: 'Dış cephe doğrama, panjur, gölgellik ve bina dışı ahşap uygulamaları.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const ROTATION_INTERVAL = 5000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Images - Her slide için arka plan */}
      {SLIDES.map((slide, index) => (
        <div
          key={`bg-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          {/* Koyu overlay - metin okunabilirliği için */}
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
      ))}

      {/* Desen overlay */}
      <div className="absolute inset-0 opacity-10 z-[1] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Slider Content */}
          <div className="relative min-h-[280px] flex flex-col items-center justify-center">
            {SLIDES.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? 'opacity-100 translate-y-0'
                    : index < activeIndex
                      ? 'opacity-0 -translate-y-8'
                      : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-20 h-20 rounded-full border-2 border-amber-500/60 bg-black/40 flex items-center justify-center mb-6 text-amber-400 backdrop-blur-sm">
                  {slide.icon}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                  {slide.title}
                  <span className="block text-amber-500 mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-10 bg-amber-500'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/projeler"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Projelerimizi İnceleyin
            </Link>
            <Link
              href="/iletisim"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200"
            >
              İletişime Geçin
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500">55+</div>
              <div className="text-slate-400 mt-1">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500">80+</div>
              <div className="text-slate-400 mt-1">Tamamlanan Büyük Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500">20+</div>
              <div className="text-slate-400 mt-1">Uzman Personel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500">15+</div>
              <div className="text-slate-400 mt-1">İl Genelinde Hizmet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
