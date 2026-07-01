import type { CollectionConfig } from 'payload';
export const Stats: CollectionConfig = {
  slug: 'stats',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allows the website to see the data
  },
  fields: [
    {
      name: 'value',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
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
