import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudyTextBlock',
  title: 'Case Study Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'tone',
      title: 'Default Paragraph Tone',
      type: 'string',
      options: {
        list: [
          { title: 'Dark', value: 'dark' },
          { title: 'Black', value: 'black' },
        ],
      },
      initialValue: 'dark',
    }),
    defineField({
      name: 'paragraphTones',
      title: 'Per-Paragraph Tones (Optional)',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Dark', value: 'dark' },
              { title: 'Black', value: 'black' },
            ],
          },
        },
      ],
    }),
  ],
});
