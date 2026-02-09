import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects, urlFor } from '@/lib/sanity';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug).catch(() => null);
  
  if (!project) {
    return {
      title: 'Proje Bulunamadı | Er Burç Yapı',
    };
  }

  return {
    title: `${project.title} | Er Burç Yapı ve Dekorasyon`,
    description: project.description || `${project.title} projesi detayları`,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects().catch(() => []);
  return projects.map((project: { slug: { current: string } }) => ({
    slug: project.slug.current,
  }));
}

export const revalidate = 60;

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug).catch(() => null);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projeler"
            className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tüm Projeler
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
              project.status === 'devam-eden' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
            }`}>
              {project.status === 'devam-eden' ? 'Devam Ediyor' : 'Tamamlandı'}
            </span>
            {project.location && (
              <span className="flex items-center text-slate-300">
                <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            {project.mainImage && (
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={urlFor(project.mainImage).width(1200).height(675).url()}
                  alt={project.mainImage.alt || project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Description */}
            {project.description && (
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Proje Hakkında</h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {project.description}
                </p>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Proje Galerisi</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((image: { _key?: string; alt?: string }, index: number) => (
                    <div
                      key={image._key || index}
                      className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <Image
                        src={urlFor(image).width(400).height(400).url()}
                        alt={image.alt || `${project.title} - Görsel ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-xl p-8 sticky top-28">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Proje Bilgileri</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500">Proje Adı</p>
                    <p className="font-semibold text-slate-800">{project.title}</p>
                  </div>
                </div>

                {project.location && (
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-slate-500">Konum</p>
                      <p className="font-semibold text-slate-800">{project.location}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500">Durum</p>
                    <p className="font-semibold text-slate-800">
                      {project.status === 'devam-eden' ? 'Devam Ediyor' : 'Tamamlandı'}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-slate-200" />

              <div className="text-center">
                <p className="text-slate-600 mb-4">Bu projeyle ilgili bilgi almak için:</p>
                <Link
                  href="/iletisim"
                  className="block w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
