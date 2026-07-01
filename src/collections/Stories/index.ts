import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
  slug: 'stories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true, // Allows the website to see the data
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'position', // <-- Added the position field here
      type: 'text',
      required: true,
      admin: {
        placeholder: 'e.g., Recovered Patient / Chief Medical Officer',
      },
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
