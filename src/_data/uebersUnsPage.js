const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "uebersUnsPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "hauptBildUrl": hauptBild.asset->url,
      absaetze
    }`
  );
  return data || {};
};
