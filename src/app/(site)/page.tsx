import Link from 'next/link';
import { HeroSlider } from '@/components';
import { getProjects, getReferences, urlFor } from '@/lib/sanity';
import { Project, Reference } from '@/types';
import Image from 'next/image';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const [projects, references] = await Promise.all([
    getProjects().catch(() => [] as Project[]),
    getReferences().catch(() => [] as Reference[]),
  ]);

  const recentProjects = projects.slice(0, 6);
  const topReferences = [...references].sort((a, b) => {
    const aHasLogo = !!a.logo;
    const bHasLogo = !!b.logo;
    if (aHasLogo === bHasLogo) return 0;
    return aHasLogo ? -1 : 1; // Logolu olanlar önce
  });

  return (
    <>
      <HeroSlider />

      {/* Core Values Section */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              {
                title: 'DENEYİM',
                description: 'Yılların birikimiyle sahada test edilmiş çözümler',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M3 21l7.5-9L13 14l4-5 4 6M3 10l4-6h10l4 6"
                    />
                  </svg>
                ),
              },
              {
                title: 'KALİTE',
                description: 'Malzeme seçiminden montaja kadar kontrol edilen süreç',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M9 12l2 2 4-4m-3-7l5 2 2 5-2 5-5 2-5-2-2-5 2-5 5-2z"
                    />
                  </svg>
                ),
              },
              {
                title: 'ESTETİK',
                description: 'Mekânla uyumlu, çizgisi zamansız tasarımlar',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M4 16l4.5-9L13 13l3-6 4 9M4 20h16"
                    />
                  </svg>
                ),
              },
              {
                title: 'GÜVEN',
                description: 'Söz verilen zamanda, söz verilen işi teslim etme',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M16 7a4 4 0 00-7.446-1.657A3 3 0 006 8v1H5a3 3 0 000 6h1.172a3 3 0 002.12.879h1.086l1.707 1.707a2 2 0 002.828 0l3.414-3.414A3 3 0 0019 11.172V10a3 3 0 00-3-3h0z"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full border border-amber-500 bg-black/40 flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-base font-semibold tracking-[0.2em] text-amber-400 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 max-w-[12rem]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TSE Badge */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
              <Image
                src="/images/tse_logo.png"
                alt="TSE Sertifikalı"
                width={56}
                height={56}
                className="object-contain"
              />
              <div className="text-left">
                <p className="text-slate-700 font-semibold text-base">
                  Tüm ürünlerimizde <span className="text-amber-600">TSE</span> mevcuttur
                </p>
                <p className="text-slate-500 text-sm">Kalite ve güvenilirlik sertifikalı</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              TOKİ projeleri başta olmak üzere tüm inşaat projelerinde ahşap işleri konusunda kapsamlı hizmet sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ahşap Doğrama',
                description: 'Pencere ve kapı doğramaları, özel tasarım ahşap işleri',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
              },
              {
                title: 'İç Kapı İmalatı',
                description: 'Amerikan panel kapı, laminat kapı, lake kapı üretimi',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 11h8m-8 4h4m-7 6h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Mutfak & Dolap',
                description: 'Mutfak dolapları, gardırop ve ankastre ünite imalatı',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: 'Dekorasyon',
                description: 'İç mekan dekorasyon, tavan kaplama, duvar panelleri',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 text-center hover:bg-amber-50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product & Application Areas */}
      <section className="py-10 bg-white relative overflow-hidden">
        {/* Dekoratif arka plan */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/80 via-white to-white" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ürün ve Uygulama Alanlarımız
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Konut ve sosyal donatı projelerinde ahşap imalatı gerektiren tüm alanlarda üretim ve montaj yapıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Kapı', icon: 'M8 7h8M8 11h8m-8 4h4m-7 6h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { name: 'Vestiyer', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6M4 6v12' },
              { name: 'Mutfak', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { name: 'Yatak Odası', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { name: 'Televizyon Üniteleri', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { name: 'Gölgellik', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
              { name: 'Banyo', icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' },
              { name: 'Lobi', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { name: 'Doğrama', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
              { name: 'Süpürgelik', icon: 'M4 6h16M4 12h16M4 18h16' },
              { name: 'Merdiven', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { name: 'Posta Kutusu', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            ].map((item) => (
              <div
                key={item.name}
                className="group flex items-center gap-4 p-4 md:p-5 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <span className="text-slate-700 font-medium text-sm md:text-base group-hover:text-slate-900">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      {recentProjects.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Son Projelerimiz
                </h2>
                <p className="text-slate-600 max-w-xl">
                  Türkiye genelinde tamamladığımız ve devam eden projelerimizden bazıları
                </p>
              </div>
              <Link
                href="/projeler"
                className="mt-6 md:mt-0 inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200"
              >
                Tüm Projeler
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentProjects.map((project: Project) => (
                <Link
                  key={project._id}
                  href={`/projeler/${project.slug.current}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage).width(600).height(400).url()}
                        alt={project.mainImage.alt || project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <Image
                        src="/images/sabit.jpeg"
                        alt={`${project.title} proje görseli yakında eklenecek`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      project.status === 'devam-eden' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                    }`}>
                      {project.status === 'devam-eden' ? 'Devam Ediyor' : 'Tamamlandı'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.location && (
                      <p className="text-slate-500 text-sm mt-1">{project.location}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* References Section */}
      {topReferences.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Referanslarımız
              </h2>
              <p className="text-slate-600">
                Birlikte çalıştığımız değerli iş ortaklarımız
              </p>
            </div>

            <div className="flex items-stretch gap-8 md:gap-10 overflow-x-auto pb-2">
              {topReferences.map((reference: Reference) => (
                <div
                  key={reference._id}
                  className="shrink-0 w-40 flex flex-col items-center"
                >
                  {reference.logo ? (
                    <div className="relative w-full h-20 mb-2 grayscale hover:grayscale-0 transition-all duration-300">
                      <Image
                        src={urlFor(reference.logo).width(300).fit('max').url()}
                        alt={reference.logo.alt || reference.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-20 mb-2 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex flex-col items-center justify-center px-3 text-center">
                      <svg className="w-6 h-6 text-amber-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 00-7.446-1.657A3 3 0 006 8v1H5a3 3 0 000 6h1.172a3 3 0 002.12.879h1.086l1.707 1.707a2 2 0 002.828 0l3.414-3.414A3 3 0 0019 11.172V10a3 3 0 00-3-3h0z"
                        />
                      </svg>
                      <span className="text-slate-600 text-[11px] leading-snug">
                        {reference.title}
                      </span>
                    </div>
                  )}
                  <p className="text-slate-700 text-xs text-center mt-1">
                    {reference.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/referanslar"
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200"
              >
                Tüm Referanslar
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Projeniz İçin Teklif Alın
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            TOKİ projeleri veya özel projeleriniz için uzman ekibimizden ücretsiz keşif ve teklif alın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link
              href="/iletisim"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              İletişime Geçin
            </Link>
            <a
              href="tel:+905343816499"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              0 (534) 381 64 99
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
