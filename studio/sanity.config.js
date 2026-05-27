import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Boberger Reitverein',

  // TODO: Replace with your actual Sanity project ID after running: npx sanity login && npx sanity projects list
  // Then update this file and re-run: npx sanity deploy
  projectId: 'REPLACE_WITH_PROJECT_ID',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
