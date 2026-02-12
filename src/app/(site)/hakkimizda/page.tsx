import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hakkımızda | Er Burç Yapı ve Dekorasyon',
  description:
    'Er Burç Yapı Dekorasyon Doğrama Medikal İnşaat Taahhüt Ticaret ve Sanayi Ltd. Şti. hakkında bilgi alın. TOKİ projeleri ve ahşap imalatındaki uzmanlığımız.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hakkımızda
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            ER BURÇ YAPI DEKORASYON DOĞRAMA MEDİKAL İNŞAAT TAAHHÜT TİCARET VE
            SANAYİ LTD. ŞTİ. olarak, toplu konut ve ahşap işlerinde uzman
            çözüm ortağınızız.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main text */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Er Burç Yapı, kökleri Erzurum’a uzanan ve yıllar içinde Türkiye
              geneline yayılan bir ahşap imalat ve uygulama firmasıdır. TOKİ
              başta olmak üzere pek çok toplu konut projesinde; iç kapı,
              vestiyer, mutfak dolabı, gömme dolap, TV üniteleri, merdiven,
              süpürgelik, posta kutusu ve dekoratif ahşap kaplamalar gibi
              kalemlerde üretim ve montaj sorumluluğu üstleniyoruz.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Keresteciler Sitesi&apos;nde
              konumlandırdığımız imalathanemizde; projeye özel ölçülendirme,
              seri üretim ve sahada montaj süreçlerini tek elden
              yönetiyoruz. Böylece hem TOKİ projelerinde hem de özel konut ve
              ticari yapılarda, mimari projeye tam uyumlu, hızlı ve
              standartları yüksek teslimatlar gerçekleştiriyoruz.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Çalışma anlayışımızı dört ana değerde özetliyoruz:{' '}
              <span className="font-semibold">Deneyim</span> (sahada
              sınanmış bilgi birikimi), <span className="font-semibold">Kalite</span>{' '}
              (malzemeden montaj detayına kadar kontrollü süreç),{' '}
              <span className="font-semibold">Estetik</span> (mekân bütünlüğünü
              gözeten tasarım dili) ve <span className="font-semibold">Güven</span>{' '}
              (söz verilen işi, söz verilen zamanda teslim etme). Yürüttüğümüz
              projelerde işverenlerimizle uzun soluklu bir iş ortaklığı
              hedefleyerek, teslim sonrası destek ve bakım konularında da
              sorumluluk alıyoruz.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Bugün, Er Burç Yapı markası; TOKİ toplu konutları, kamu binaları,
              özel konut projeleri ve ticari yapılar için ahşap doğrama ve
              dekorasyon alanında güvenilir bir çözüm ortağı olarak konumlanmış
              durumdadır. Erzurum&apos;dan aldığımız güçle, Türkiye&apos;nin
              dört bir yanında projelere değer katmaya devam ediyoruz.
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-3">
                Projelerimizi İnceleyin
              </h2>
              <p className="text-slate-600 mb-4">
                Tamamlanan ve devam eden çalışmalarımızı görmek için
                projeler sayfamızı ziyaret edebilirsiniz.
              </p>
              <Link
                href="/projeler"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold text-sm md:text-base transition-colors duration-200"
              >
                Projelerimiz
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company info card */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Firma Bilgileri
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                ER BURÇ YAPI DEKORASYON DOĞRAMA MEDİKAL İNŞAAT TAAHHÜT TİCARET
                VE SANAYİ LTD. ŞTİ.
              </p>
              <dl className="text-sm text-slate-700 space-y-2">
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-slate-600">
                    Vergi Dairesi
                  </dt>
                  <dd className="text-right">Aziziye VD 125 0279 539</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-slate-600">
                    Ticaret Sicil / Oda No
                  </dt>
                  <dd className="text-right">12462 / 8097</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-slate-600">Mersis No</dt>
                  <dd className="text-right">0125 0279 5390 0025</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-slate-600">E-posta</dt>
                  <dd className="text-right">erburcyapi@gmail.com</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-slate-600">Telefon</dt>
                  <dd className="text-right">0 (442) 249 04 39</dd>
                </div>
              </dl>

              <div className="border-t border-slate-200 pt-4 mt-2 text-sm">
                <h3 className="font-semibold text-slate-700 mb-1">Adres</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kurtuluş Mah. Keresteciler Sitesi<br />
                  6. Sok. No: 6<br />
                  Yakutiye / ERZURUM
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-sm"
                >
                  İletişim Bilgilerine Git
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

