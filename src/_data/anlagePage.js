const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "anlagePage"][0] {
      "heroBildUrl": heroBild.asset->url,
      introTitel,
      introAbsaetze,
      "galerie": galerie[] { "bildUrl": bild.asset->url, beschriftung },
      "bannerBildUrl": bannerBild.asset->url,
      einrichtungen
    }`
  );
  return data || {};
};
