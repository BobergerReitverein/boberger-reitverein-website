export default {
  name: 'schulpferd',
  title: 'Schulpferd',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'rasse',
      title: 'Rasse',
      type: 'string'
    },
    {
      name: 'voltigieren',
      title: 'Voltigier-Pferd',
      type: 'boolean',
      description: 'Grünes "Voltigieren" Tag auf der Website anzeigen',
      initialValue: false
    },
    {
      name: 'bild',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true }
    }
  ],
  preview: {
    select: { title: 'name', subtitle: 'rasse', media: 'bild' }
  }
};
