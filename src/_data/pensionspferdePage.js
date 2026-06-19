const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "pensionspferdePage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "heroBildHotspot": heroBild.hotspot,
      sectionLabel,
      "introBildUrl": introBild.asset->url,
      "introBildHotspot": introBild.hotspot,
      introTitel, introAbsaetze
    }`
  );
  return data || {};
};
