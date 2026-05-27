const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "homepage"][0] {
      "heroBildUrl": heroBild.asset->url,
      heroTagline,
      uebersUnsTitel,
      uebersUnsAbsaetze,
      "uebersUnsBildUrl": uebersUnsBild.asset->url,
      "kontaktHintergrundbildUrl": kontaktHintergrundbild.asset->url
    }`
  );
  return data || {};
};
