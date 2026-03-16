import type { CollectionConfig } from 'payload'

export const Schedule : CollectionConfig= {
  slug: 'schedule',
  admin: { useAsTitle: 'name' },
  access:{
    read:()=>true,
  },

  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'title', type: 'text', required: true }, // e.g., Senior Consultant
    {
      name: 'department',
      type: 'select',
      options: ['Cardiology', 'Gynecology', 'Pediatrics', 'Dermatology', 'Urology', 'ENT'],
      required: true
    },
    { name: 'specialty', type: 'text' },
    { name: 'doctorImage', type: 'upload', relationTo: 'media' },
    {
      name: 'schedule',
      type: 'array', // Nested array for the table
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'days', type: 'text', required: true },
            { name: 'time', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
};
