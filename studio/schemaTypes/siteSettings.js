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
    { name: 'facebook', title: 'Facebook-URL', type: 'url' },
    { name: 'youtube', title: 'YouTube-URL', type: 'url' },
    { name: 'tiktok', title: 'TikTok-URL', type: 'url' },
    { name: 'gruendungsjahr', title: 'Gründungsjahr', type: 'string', description: 'z.B. "1968"' },
    { name: 'oeffnungszeiten', title: 'Öffnungszeiten / Anwesenheitszeiten', type: 'text', rows: 3 },
  ],
  preview: { select: { title: 'vereinsname' } }
};
