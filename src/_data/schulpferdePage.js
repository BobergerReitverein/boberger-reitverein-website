const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "schulpferdePage"][0] {
      "heroBildUrl": heroBild.asset->url,
      heroSubtitel,
      introUeberschrift,
      introAbsaetze,
      stats
    }`
  );
  return data || {};
};
