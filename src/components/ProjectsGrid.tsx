'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { urlFor } from '@/lib/sanity';

interface ProjectsGridProps {
  projects: Project[];
}

type FilterType = 'all' | 'devam-eden' | 'tamamlanan';

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  const tabs: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Tümü' },
    { value: 'devam-eden', label: 'Devam Edenler' },
    { value: 'tamamlanan', label: 'Tamamlananlar' },
  ];

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              filter === tab.value
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab.label}
            <span className="ml-2 text-sm opacity-75">
              ({tab.value === 'all' 
                ? projects.length 
                : projects.filter(p => p.status === tab.value).length})
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project._id}
              href={`/projeler/${project.slug.current}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
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
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  project.status === 'devam-eden'
                    ? 'bg-blue-500 text-white'
                    : 'bg-green-500 text-white'
                }`}>
                  {project.status === 'devam-eden' ? 'Devam Ediyor' : 'Tamamlandı'}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                {project.location && (
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                )}

                {project.description && (
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                )}

                <div className="mt-4 flex items-center text-amber-600 font-medium text-sm">
                  Detayları Gör
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-slate-500 text-lg">Bu kategoride henüz proje bulunmuyor.</p>
        </div>
      )}
    </div>
  );
}
