const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "aktuellesPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "heroBildHotspot": heroBild.hotspot,
      heroSubtitel,
      sectionLabel,
      ctaUeberschrift,
      ctaText
    }`
  );
  return data || {};
};
