import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        label: 'One Third',
        value: 'oneThird',
      },
      {
        label: 'Half',
        value: 'half',
      },
      {
        label: 'Two Thirds',
        value: 'twoThirds',
      },
      {
        label: 'Full',
        value: 'full',
      },
    ],
  },
  {
    name: 'type',
    type: 'select',
    defaultValue: 'text',
    options: [
      { label: 'Text', value: 'text' },
      { label: 'Media (Image)', value: 'media' },
      { label: 'Group', value: 'group' },
      { label: 'Array', value: 'array' }
    ],
  },
  {
    name: 'text',
    type: 'richText',
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'text',
    },
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ]
      },
    })
  },
  {
    name: 'media',
    type: 'upload',
    relationTo: 'media',
    required: true,
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'media',
    },
  },
  {
    name: 'groupSection',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'group',
    },
    fields: [
      {
        name: 'badgeText',
        type: 'text',
        required: true,
      },
      {
        name: 'mainTitle',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        type: 'richText',
        required: true,
        editor: lexicalEditor({
          features: ({ rootFeatures }) => {
            return [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ]
          },
        })
      },
      {
        name: 'features',
        type: 'array',
        fields: [
          {
            name: 'FeatureText',
            type: 'text',
          }
        ]
      }
    ]
  },
  {
    name: 'arraySection',
    type: 'array',
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'array',
      initCollapsed: false,

    },

    fields: [
      {
        name: 'mainBox',
        type: 'richText',
        required: true,
        editor: lexicalEditor({
          features: ({ rootFeatures }) => {
            return [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ]
          },
        })
      },
      {
        name: 'features',
        type: 'array',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'icon',
            type: 'upload',
            relationTo: 'media',
            required: true
          },
          {
            name: 'description',
            type: 'textarea',
            required: true
          }
        ]
      },

    ]
  },

  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_data, siblingData) => {
          return Boolean(siblingData?.enableLink)
        },
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
}
