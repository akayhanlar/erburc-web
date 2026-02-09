import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'erburc-yapi',
  title: 'Er Burç Yapı - Yönetim Paneli',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('İçerik Yönetimi')
          .items([
            S.listItem()
              .title('Projeler')
              .icon(() => '🏗️')
              .child(
                S.documentList()
                  .title('Tüm Projeler')
                  .filter('_type == "project"')
              ),
            S.listItem()
              .title('Referanslar')
              .icon(() => '🤝')
              .child(
                S.documentList()
                  .title('Tüm Referanslar')
                  .filter('_type == "companyReference"')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['project', 'companyReference'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev) =>
      prev.filter((item) => ['project', 'companyReference'].includes(item.templateId)),
  },
});
