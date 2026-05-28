export default {
  name: 'impressumPage',
  title: 'Impressum (Seite)',
  type: 'document',
  fields: [
    {
      name: 'registernummer',
      title: 'Registernummer',
      type: 'string',
      description: 'z.B. "VR 7675"'
    },
    {
      name: 'registergericht',
      title: 'Registergericht',
      type: 'string',
      description: 'z.B. "Amtsgericht Hamburg"'
    },
    {
      name: 'vorstandEintraege',
      title: 'Vorstand — vertretungsberechtigte Mitglieder',
      description: 'Die 3 Mitglieder die im Impressum aufgeführt werden (Vorsitzende, Stellv., Schatzmeisterin)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'rolle', title: 'Funktion', type: 'string' },
          { name: 'name', title: 'Name', type: 'string' }
        ],
        preview: { select: { title: 'rolle', subtitle: 'name' } }
      }]
    },
    {
      name: 'inhaltlichVerantwortlichTitel',
      title: 'Inhaltlich Verantwortlich — Titel/Funktion',
      type: 'string',
      description: 'z.B. "Die Vorsitzende"'
    },
    {
      name: 'inhaltlichVerantwortlichName',
      title: 'Inhaltlich Verantwortlich — Name',
      type: 'string'
    },
    {
      name: 'bildnachweisName',
      title: 'Bildnachweis — Name der Fotografin / des Fotografen',
      type: 'string'
    },
    {
      name: 'bildnachweisUrl',
      title: 'Bildnachweis — Website-URL',
      type: 'url'
    },
    {
      name: 'bildnachweisZusatz',
      title: 'Bildnachweis — Zusatztext',
      type: 'string',
      description: 'z.B. "© Jurina Zwirner — jurina.de"'
    }
  ],
  preview: { select: { title: 'registernummer' } }
};
