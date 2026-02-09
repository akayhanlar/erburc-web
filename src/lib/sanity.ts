import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import { SanityImage } from '@/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

// GROQ Queries
export const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  slug,
  status,
  location,
  mainImage,
  gallery,
  description
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  slug,
  status,
  location,
  mainImage,
  gallery,
  description
}`;

export const referencesQuery = `*[_type == "companyReference"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  logo
}`;

// Fetch functions
export async function getProjects() {
  return client.fetch(projectsQuery);
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(projectBySlugQuery, { slug });
}

export async function getReferences() {
  return client.fetch(referencesQuery);
}
