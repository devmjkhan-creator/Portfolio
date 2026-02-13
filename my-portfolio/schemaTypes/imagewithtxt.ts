export default {
  name: 'imageWithText',
  title: 'Image with Text',
  type: 'object',
  fields: [
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'text', title: 'Bottom Text', type: 'string' },
  ],
};
