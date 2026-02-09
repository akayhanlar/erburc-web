import { defineField, defineType } from 'sanity';

// Not: "reference" ismi Sanity'de dahili olarak kullanıldığı için
// doküman tipi adı olarak kullanılamaz. Bu yüzden "companyReference"
// adını kullanıyoruz; arayüzde görünen başlık yine "Referans".
export default defineType({
  name: 'companyReference',
  title: 'Referans',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Firma Adı',
      type: 'string',
      validation: (Rule) => Rule.required().error('Firma adı zorunludur'),
    }),
    defineField({
      name: 'logo',
      title: 'Firma Logosu',
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
      validation: (Rule) => Rule.required().error('Logo zorunludur'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
});
