const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "unterrichtPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "heroBildHotspot": heroBild.hotspot,
      heroSubtitel,
      "introBildUrl": introBild.asset->url,
      "introBildHotspot": introBild.hotspot,
      introAbsaetze,
      feriencampLabel, feriencampTitel, feriencampText, stundenplanText,
      kontaktCtaUeberschrift, kontaktCtaText
    }`
  );
  return data || {};
};
