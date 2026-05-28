export default {
  name: 'download',
  title: 'Download',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Mitgliedschaft', value: 'Mitgliedschaft' },
          { title: 'Formulare',      value: 'Formulare'      },
          { title: 'Preise',         value: 'Preise'         },
          { title: 'Reiten',         value: 'Reiten'         },
          { title: 'Camps',          value: 'Camps'          },
          { title: 'Sonstiges',      value: 'Sonstiges'      },
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'datum',
      title: 'Stand (Monat/Jahr)',
      type: 'string',
      description: 'z. B. „Januar 2026"'
    },
    {
      name: 'datei',
      title: 'PDF-Datei',
      type: 'file',
      options: { accept: '.pdf' }
    },
    {
      name: 'reihenfolge',
      title: 'Reihenfolge',
      type: 'number',
      description: '1 = ganz oben in der Kategorie (niedrigere Zahl = weiter vorne)'
    }
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'reihenfolgeAsc',
      by: [{ field: 'kategorie', direction: 'asc' }, { field: 'reihenfolge', direction: 'asc' }]
    },
    {
      title: 'Kategorie + Name',
      name: 'kategorieNameAsc',
      by: [{ field: 'kategorie', direction: 'asc' }, { field: 'name', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'name', subtitle: 'kategorie' }
  }
};
