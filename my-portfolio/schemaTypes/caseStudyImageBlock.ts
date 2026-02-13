import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudyImageBlock',
  title: 'Case Study Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Bottom Text / Caption',
      type: 'string',
    }),
  ],
});
