export default {
  name: 'vorstandPage',
  title: 'Vorstand (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild (Teamfoto-Balken)', type: 'image', options: { hotspot: true } },
    { name: 'gruppenFoto', title: 'Gruppenfoto Vorstand', type: 'image', options: { hotspot: true } },
    {
      name: 'gruppenFotoBeschriftung',
      title: 'Gruppenfoto — Beschriftung (Namen der abgebildeten Personen)',
      type: 'text',
      rows: 2
    },
    { name: 'betriebsleiterinName', title: 'Betriebsleiterin — Name', type: 'string' },
    { name: 'betriebsleiterinRolle', title: 'Betriebsleiterin — Funktion', type: 'string' },
    { name: 'betriebsleiterinFoto', title: 'Betriebsleiterin — Foto', type: 'image', options: { hotspot: true } },
  ],
  preview: { select: { title: 'betriebsleiterinName', media: 'gruppenFoto' } }
};
