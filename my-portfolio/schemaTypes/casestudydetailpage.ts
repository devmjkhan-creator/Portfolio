import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudyDetailPage',
  title: 'Case Study Detail Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro Paragraph',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industryInfo',
      title: 'Industry Info',
      type: 'object',
      fields: [
        defineField({
          name: 'industry',
          title: 'Industry',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'company',
          title: 'Company',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'date',
          title: 'Date',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Flexible Content',
      type: 'array',
      of: [{ type: 'caseStudyTextBlock' }, { type: 'caseStudyImageBlock' }, { type: 'imageWithText' }],
    }),
  ],
});
