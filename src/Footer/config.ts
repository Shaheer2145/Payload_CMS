import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'socialBlock',
      type: 'array',
      fields: [
        {
          name: 'testimonials',
          type: 'upload',
          relationTo: 'media',
        }
      ]

    },
    {
      name: 'columns',
      type: 'array',
      minRows: 2,
      maxRows: 2,
      fields: [
        { name: 'label', type: 'text' },
        {
          name: 'navItems',
          type: 'array',
          fields: [link({ appearances: false })],
        },
      ],
    },
    {
      name: 'address',
      type: 'group',
      fields: [
        { name: 'mapImage', type: 'upload', relationTo: 'media' },
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
