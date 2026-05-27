export default {
  name: 'siteSettings',
  title: 'Einstellungen',
  type: 'document',
  fields: [
    { name: 'vereinsname', title: 'Vereinsname', type: 'string' },
    { name: 'strasse', title: 'Straße & Hausnummer', type: 'string' },
    { name: 'plzOrt', title: 'PLZ und Ort', type: 'string' },
    { name: 'telefon', title: 'Telefon', type: 'string' },
    { name: 'email', title: 'E-Mail', type: 'string' },
    { name: 'instagram', title: 'Instagram-URL', type: 'url' },
  ],
  preview: { select: { title: 'vereinsname' } }
};
