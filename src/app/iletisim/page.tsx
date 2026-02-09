import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Er Burç Yapı ve Dekorasyon',
  description: 'Er Burç Yapı ile iletişime geçin. Erzurum merkezli TOKİ ve özel projeler için teklif alın.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            İletişim
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Projeleriniz için bizimle iletişime geçin, size en uygun çözümü sunalım
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8">İletişim Bilgilerimiz</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="font-semibold text-slate-800 text-lg mb-1">Adres</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sanayi Keresteciler Sitesi,<br />
                    6. Sk. No:8<br />
                    Yakutiye/ERZURUM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="font-semibold text-slate-800 text-lg mb-1">Telefon</h3>
                  <a 
                    href="tel:+904422490439" 
                    className="text-amber-600 hover:text-amber-700 text-xl font-semibold transition-colors duration-200"
                  >
                    0 (442) 249 04 39
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="font-semibold text-slate-800 text-lg mb-1">E-posta</h3>
                  <div className="flex flex-col space-y-1">
                    <a 
                      href="mailto:info@erburcyapi.com" 
                      className="text-amber-600 hover:text-amber-700 text-lg transition-colors duration-200"
                    >
                      info@erburcyapi.com
                    </a>
                    <a 
                      href="mailto:erburcyapi@gmail.com" 
                      className="text-amber-600 hover:text-amber-700 text-lg transition-colors duration-200"
                    >
                      erburcyapi@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.25 6.33 2.25 11.79c0 2.09.61 4.02 1.77 5.7L2 22l4.64-1.96c1.62.89 3.45 1.36 5.4 1.36h.01c5.46 0 9.79-4.33 9.79-9.79C21.84 6.33 17.5 2 12.04 2zm0 17.55h-.01c-1.71 0-3.37-.46-4.82-1.33l-.35-.21-2.75 1.16.59-2.92-.19-.3a8.21 8.21 0 01-1.26-4.36c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.26.86 5.81 2.41a8.18 8.18 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.51-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.45.13-.15.17-.25.26-.42.09-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.81 2.77 4.39 3.89.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="font-semibold text-slate-800 text-lg mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/+905343816499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 text-lg font-semibold transition-colors duration-200"
                  >
                    WhatsApp İletişim Hattı
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="font-semibold text-slate-800 text-lg mb-1">Çalışma Saatleri</h3>
                  <p className="text-slate-600">
                    Pazartesi - Cumartesi<br />
                    <span className="font-medium">08:00 - 18:00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Bize Mesaj Gönderin</h2>
            
            <form className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    placeholder="Adınızı giriniz"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Konu *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                >
                  <option value="">Konu seçiniz</option>
                  <option value="teklif">Teklif Talebi</option>
                  <option value="bilgi">Bilgi Alma</option>
                  <option value="isbirligi">İş Birliği</option>
                  <option value="sikayet">Şikayet / Öneri</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 resize-none"
                  placeholder="Mesajınızı buraya yazınız..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Mesaj Gönder
              </button>

              <p className="text-sm text-slate-500 text-center">
                * ile işaretli alanlar zorunludur
              </p>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Konumumuz</h2>
          <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-slate-500">Sanayi Keresteciler Sitesi, 6. Sk. No:8</p>
              <p className="text-slate-500">Yakutiye/ERZURUM</p>
              <a
                href="https://maps.app.goo.gl/Qz8rpaZsvdxuoPSK6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mt-4 transition-colors duration-200"
              >
                Google Maps&apos;te Aç
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
