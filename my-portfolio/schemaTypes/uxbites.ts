export default {
  name: 'uxBites',
  title: 'UX Bites',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string', // ya 'text' agar long paragraph
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // crop freely
      },
    },
  ],
};
