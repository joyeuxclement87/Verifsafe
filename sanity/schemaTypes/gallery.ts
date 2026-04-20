import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Project Label (e.g. Commercial Installation)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fire Extinguishers', value: 'Fire Extinguishers' },
          { title: 'Fire Alarm Systems', value: 'Fire Alarm Systems' },
          { title: 'Hose Reels', value: 'Hose Reels' },
          { title: 'Detection Devices', value: 'Detection Devices' },
          { title: 'Emergency Lighting', value: 'Emergency Lighting' },
          { title: 'Installations', value: 'Installations' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
