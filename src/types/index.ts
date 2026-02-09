// Sanity Document Types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  status: 'devam-eden' | 'tamamlanan';
  location: string;
  mainImage: SanityImage;
  gallery?: SanityImage[];
  description: string;
}

export interface Reference {
  _id: string;
  _createdAt: string;
  title: string;
  logo: SanityImage;
}
