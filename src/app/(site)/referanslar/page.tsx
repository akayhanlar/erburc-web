import { Metadata } from 'next';
import { ReferencesGrid } from '@/components';
import { getReferences } from '@/lib/sanity';
import type { Reference } from '@/types';

export const metadata: Metadata = {
  title: 'Referanslarımız | Er Burç Yapı ve Dekorasyon',
  description: 'Er Burç Yapı olarak birlikte çalıştığımız değerli iş ortaklarımız ve referanslarımız.',
};

export const revalidate = 60;

export default async function ReferencesPage() {
  const references = (await getReferences().catch(() => [])) as Reference[];
  const sortedReferences = [...references].sort((a, b) => {
    const aHasLogo = !!a.logo;
    const bHasLogo = !!b.logo;
    if (aHasLogo === bHasLogo) return 0;
    return aHasLogo ? -1 : 1; // Logolu olanlar önce
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Referanslarımız
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Yıllar içinde birlikte çalışma fırsatı bulduğumuz değerli iş ortaklarımız
          </p>
        </div>
      </div>

      {/* References Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ReferencesGrid references={sortedReferences} />
      </div>

      {/* CTA */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Siz de Referanslarımız Arasında Yer Alın
          </h2>
          <p className="text-slate-600 mb-8">
            Kaliteli işçilik ve güvenilir hizmet anlayışımızla projenizi hayata geçirelim.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold transition-colors duration-200"
          >
            Teklif Alın
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
