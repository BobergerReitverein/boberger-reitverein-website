const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "anlagePage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "heroBildHotspot": heroBild.hotspot,
      introTitel,
      introAbsaetze,
      "galerie": galerie[] { "bildUrl": bild.asset->url, "bildHotspot": bild.hotspot, beschriftung },
      "bannerBildUrl": bannerBild.asset->url,
      "bannerBildHotspot": bannerBild.hotspot,
      einrichtungen
    }`
  );
  return data || {};
};
