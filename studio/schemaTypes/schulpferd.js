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
    },
    {
      name: 'reihenfolge',
      title: 'Reihenfolge',
      type: 'number',
      description: '1 = erste Position auf der Website (niedrigere Zahl = weiter vorne)'
    }
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'reihenfolgeAsc',
      by: [{ field: 'reihenfolge', direction: 'asc' }]
    },
    {
      title: 'Name A–Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'name', subtitle: 'rasse', media: 'bild' }
  }
};
