import Image from 'next/image';
import { Reference } from '@/types';
import { urlFor } from '@/lib/sanity';

interface ReferencesGridProps {
  references: Reference[];
}

export default function ReferencesGrid({ references }: ReferencesGridProps) {
  if (references.length === 0) {
    return (
      <div className="text-center py-16">
        <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        <p className="text-slate-500 text-lg">Henüz referans eklenmemiş.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {references.map((reference) => (
        <div
          key={reference._id}
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group"
        >
          <div className="relative w-full h-28 mb-4 bg-slate-50 rounded-lg overflow-hidden">
            {reference.logo ? (
              <Image
                src={urlFor(reference.logo).width(400).fit('max').url()}
                alt={reference.logo.alt || reference.title}
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            ) : (
              <div className="w-full h-full bg-slate-50 rounded-lg border border-dashed border-slate-200 flex flex-col items-center justify-center px-4 text-center">
                <svg className="w-8 h-8 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 00-7.446-1.657A3 3 0 006 8v1H5a3 3 0 000 6h1.172a3 3 0 002.12.879h1.086l1.707 1.707a2 2 0 002.828 0l3.414-3.414A3 3 0 0019 11.172V10a3 3 0 00-3-3h0z"
                  />
                </svg>
                <span className="text-slate-600 text-xs font-medium">
                  {reference.title}
                </span>
              </div>
            )}
          </div>
          <p className="text-slate-700 font-medium text-center text-sm">
            {reference.title}
          </p>
        </div>
      ))}
    </div>
  );
}
