const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "homepage"][0] {
      "heroBildUrl": heroBild.asset->url,
      heroTitelOben, heroTitelMitte, heroTitelUnten,
      heroTagline,
      uebersUnsTitel,
      uebersUnsAbsaetze,
      "uebersUnsBildUrl": uebersUnsBild.asset->url,
      "kontaktHintergrundbildUrl": kontaktHintergrundbild.asset->url
    }`
  );
  return data || {};
};
