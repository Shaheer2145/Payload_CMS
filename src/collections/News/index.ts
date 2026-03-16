import type { CollectionConfig } from 'payload'
export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: () => true,
    // Allows the website to see the data 
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media', // Links to your Media.ts collection 
      required: true,
    },
  ],
}