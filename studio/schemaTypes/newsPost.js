export default {
  name: 'newsPost',
  title: 'Aktuelles',
  type: 'document',
  fields: [
    {
      name: 'titel',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL-Kürzel',
      type: 'slug',
      options: { source: 'titel', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      description: 'Kurzes Label, z. B. „Feriencamps" oder „Turniere"'
    },
    {
      name: 'datum',
      title: 'Datum',
      type: 'date',
      options: { dateFormat: 'DD.MM.YYYY' }
    },
    {
      name: 'auszug',
      title: 'Einleitung',
      type: 'text',
      rows: 3,
      description: '1–2 Sätze, die den Artikel einleiten (kursiv hervorgehoben)'
    },
    {
      name: 'inhalt',
      title: 'Inhalt (Absätze)',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      description: 'Beliebig viele Textabsätze — ein Eintrag pro Absatz'
    },
    {
      name: 'termineAbschnitte',
      title: 'Termine / Kalender',
      type: 'array',
      description: 'Optionale Terminlisten (z. B. Camp-Termine, Jahresplan)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Abschnitts-Überschrift',
              type: 'string',
              description: 'z. B. „Reit-Camps — Sommerferien 2026" (optional)'
            },
            {
              name: 'eintraege',
              title: 'Einträge',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'datum',        title: 'Datum',         type: 'string', description: 'z. B. „Mo 13.07. – Fr 17.07.2026"' },
                    { name: 'bezeichnung',  title: 'Bezeichnung',   type: 'string' }
                  ],
                  preview: { select: { title: 'datum', subtitle: 'bezeichnung' } }
                }
              ]
            }
          ],
          preview: { select: { title: 'label' } }
        }
      ]
    },
    {
      name: 'hinweis',
      title: 'Hinweis-Box',
      type: 'text',
      rows: 2,
      description: 'Optionaler grüner Info-Kasten am Ende des Artikels'
    },
    {
      name: 'bild',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true }
    }
  ],
  preview: {
    select: { title: 'titel', subtitle: 'kategorie' }
  }
};
