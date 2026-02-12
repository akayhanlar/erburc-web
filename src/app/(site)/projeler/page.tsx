import { Metadata } from 'next';
import { ProjectsGrid } from '@/components';
import { getProjects } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Projelerimiz | Er Burç Yapı ve Dekorasyon',
  description: 'TOKİ projeleri ve özel projelerde gerçekleştirdiğimiz ahşap işleri, doğrama ve dekorasyon çalışmalarımız.',
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects().catch(() => []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projelerimiz
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Türkiye genelinde TOKİ ve özel sektör projelerinde gerçekleştirdiğimiz ahşap işleri
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
