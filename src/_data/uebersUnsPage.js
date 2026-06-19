const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "uebersUnsPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "heroBildHotspot": heroBild.hotspot,
      heroSubtitel,
      "hauptBildUrl": hauptBild.asset->url,
      "hauptBildHotspot": hauptBild.hotspot,
      absaetze
    }`
  );
  return data || {};
};
