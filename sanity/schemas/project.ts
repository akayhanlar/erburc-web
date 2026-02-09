import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Proje',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Proje Adı',
      type: 'string',
      validation: (Rule) => Rule.required().error('Proje adı zorunludur'),
    }),
    defineField({
      name: 'slug',
      title: 'URL (Otomatik)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('URL zorunludur'),
    }),
    defineField({
      name: 'status',
      title: 'Proje Durumu',
      type: 'string',
      options: {
        list: [
          { title: 'Devam Eden', value: 'devam-eden' },
          { title: 'Tamamlanan', value: 'tamamlanan' },
        ],
        layout: 'radio',
      },
      initialValue: 'devam-eden',
      validation: (Rule) => Rule.required().error('Proje durumu seçilmelidir'),
    }),
    defineField({
      name: 'location',
      title: 'Konum (İl/İlçe)',
      type: 'string',
      placeholder: 'Örn: Erzurum/Yakutiye',
    }),
    defineField({
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin (SEO için)',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galeri Görselleri',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternatif Metin',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Proje Açıklaması',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      media: 'mainImage',
    },
    prepare({ title, status, media }) {
      const statusLabel = status === 'devam-eden' ? '🔄 Devam Eden' : '✅ Tamamlanan';
      return {
        title: title,
        subtitle: statusLabel,
        media: media,
      };
    },
  },
});
