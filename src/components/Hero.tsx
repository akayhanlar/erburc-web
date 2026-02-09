import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 rounded-full mb-6">
            <span className="text-amber-400 text-sm font-medium">
              TOKİ Onaylı Taşeron Firma
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Toplu Konut ve Ahşap İşlerinde
            <span className="block text-amber-500 mt-2">Uzman Çözüm Ortağı</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            35 yılı aşkın tecrübemizle TOKİ projelerinde ahşap doğrama, kapı, 
            dolap ve dekorasyon işlerinde güvenilir çözüm ortağınız.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <div className="text-3xl md:text-4xl font-bold text-amber-500">35+</div>
              <div className="text-slate-400 mt-1">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500">80+</div>
              <div className="text-slate-400 mt-1">Tamamlanan Proje</div>
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
      <div className="absolute bottom-0 left-0 right-0">
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
