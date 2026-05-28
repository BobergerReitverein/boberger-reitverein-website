export default {
  name: 'vorstandsmitglied',
  title: 'Beauftragte',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'rolle',
      title: 'Funktion',
      type: 'string'
    },
    {
      name: 'reihenfolge',
      title: 'Reihenfolge',
      type: 'number',
      description: '1 = erste Position auf der Seite'
    },
    {
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true }
    }
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'reihenfolgeAsc',
      by: [{ field: 'reihenfolge', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'name', subtitle: 'rolle', media: 'foto' }
  }
};
