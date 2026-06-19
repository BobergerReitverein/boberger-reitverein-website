const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "homepage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "heroBildHotspot": heroBild.hotspot,
      heroTitelOben, heroTitelMitte, heroTitelUnten,
      heroTagline,
      uebersUnsTitel,
      uebersUnsAbsaetze,
      "uebersUnsBildUrl": uebersUnsBild.asset->url,
      "uebersUnsBildHotspot": uebersUnsBild.hotspot,
      "kontaktHintergrundbildUrl": kontaktHintergrundbild.asset->url,
      "kontaktHintergrundbildHotspot": kontaktHintergrundbild.hotspot
    }`
  );
  return data || {};
};
