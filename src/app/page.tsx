import Link from 'next/link';
import { Hero } from '@/components';
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
      <Hero />

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              Ürün ve Uygulama Alanlarımız
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              Konut ve sosyal donatı projelerinde ahşap imalatı gerektiren tüm alanlarda üretim ve montaj yapıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-8 text-sm md:text-base text-slate-700">
            <span>Kapı</span>
            <span>Vestiyer</span>
            <span>Mutfak</span>
            <span>Yatak Odası</span>
            <span>Televizyon Üniteleri</span>
            <span>Gölgellik</span>
            <span>Banyo</span>
            <span>Lobi</span>
            <span>Doğrama</span>
            <span>Süpürgelik</span>
            <span>Merdiven</span>
            <span>Posta Kutusu</span>
          </div>
          
          {/* TSE Badge */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-slate-700 font-semibold text-base md:text-lg">
                Tüm ürünlerimizde <span className="text-amber-600">TSE</span> mevcuttur
              </p>
            </div>
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
        <section className="py-20 bg-white">
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
