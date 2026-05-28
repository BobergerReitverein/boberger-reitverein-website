import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonTypes = new Set([
  'homepage', 'uebersUnsPage', 'anlagePage', 'unterrichtPage',
  'schulpferdePage', 'pensionspferdePage', 'aktuellesPage', 'downloadPage',
  'vorstandPage', 'anfahrtPage', 'impressumPage', 'datenschutzPage', 'siteSettings',
])

// Zeigt alle vorhandenen Dokumente dieses Typs (bestehendes Dokument bleibt erhalten)
const singleton = (S, type, title) =>
  S.documentTypeListItem(type).title(title)

export default defineConfig({
  name: 'default',
  title: 'Webseite BRV',

  projectId: 'iwcink1v',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Webseite BRV')
          .items([

            S.listItem()
              .title('Seiten')
              .child(
                S.list().title('Seiten').items([
                  singleton(S, 'homepage',           'Startseite — Hero & Titel'),
                  singleton(S, 'uebersUnsPage',      'Über uns — Texte & Bild'),
                  singleton(S, 'anlagePage',         'Anlage — Texte & Fotogalerie'),
                  singleton(S, 'unterrichtPage',     'Unterricht — Texte & Feriencamp'),
                  singleton(S, 'schulpferdePage',    'Schulpferde — Seitentext & Statistiken'),
                  singleton(S, 'pensionspferdePage', 'Pensionspferde — Texte & Leistungen'),
                  singleton(S, 'aktuellesPage',      'Aktuelles — Seiteneinstellungen'),
                  singleton(S, 'downloadPage',       'Downloads — Seiteneinstellungen'),
                  singleton(S, 'vorstandPage',       'Team & Vorstand — Fotos & Texte'),
                  singleton(S, 'anfahrtPage',        'Anfahrt — Adresse & Wegbeschreibung'),
                ])
              ),

            S.divider(),

            S.listItem()
              .title('Inhalte')
              .child(
                S.list().title('Inhalte').items([
                  S.documentTypeListItem('schulpferd').title('Schulpferde — Pferde & Bilder'),
                  S.documentTypeListItem('newsPost').title('Aktuelles — Beiträge & Neuigkeiten'),
                  S.documentTypeListItem('download').title('Downloads — Dateien & Dokumente'),
                  S.documentTypeListItem('vorstandsmitglied').title('Beauftragte — Fotos & Positionen'),
                ])
              ),

            S.divider(),

            S.listItem()
              .title('Rechtliches')
              .child(
                S.list().title('Rechtliches').items([
                  singleton(S, 'impressumPage',   'Impressum — Vorstand & Registereintrag'),
                  singleton(S, 'datenschutzPage', 'Datenschutz — Stand & Kontaktdaten'),
                ])
              ),

            S.divider(),

            singleton(S, 'siteSettings', 'Website-Einstellungen (Kontakt & Social Media)'),

          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((t) => !singletonTypes.has(t.templateId))
      }
      return prev
    },
    actions: (prev, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({ action }) => action !== 'delete' && action !== 'duplicate')
        : prev,
  },
})
