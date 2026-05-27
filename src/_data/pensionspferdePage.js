const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "pensionspferdePage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "introBildUrl": introBild.asset->url,
      introTitel, introAbsaetze
    }`
  );
  return data || {};
};
