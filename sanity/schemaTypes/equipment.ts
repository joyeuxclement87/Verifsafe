import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'equipment',
  title: 'Equipment',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Equipment Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Equipment Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add a list of features or benefits (e.g. Available in multiple sizes)',
    }),
    defineField({
      name: 'link',
      title: 'Page Link',
      type: 'string',
      description: 'The URL path to the detail page (e.g. /equipments/fire-extinguishers)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort the equipment on the page (e.g., 1, 2, 3)',
    }),
  ],
})
