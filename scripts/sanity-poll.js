require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');
const fs   = require('fs');
const path = require('path');

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset:   process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false
});

const triggerPath = path.join(__dirname, '../src/_data/sanityTrigger.js');

let lastState = '';

async function poll() {
  try {
    const stamps = await client.fetch('*[]._updatedAt');
    const current = stamps.sort().join('|');
    if (lastState && current !== lastState) {
      const ts = new Date().toISOString();
      fs.writeFileSync(triggerPath, `module.exports = '${ts}';\n`);
      console.log(`[sanity] Änderung erkannt → Rebuild (${ts})`);
    }
    lastState = current;
  } catch (_) {
    // Netzwerkfehler ignorieren
  }
}

setInterval(poll, 3000);
poll();
console.log('[sanity] Beobachte Sanity alle 3s auf Änderungen...');
