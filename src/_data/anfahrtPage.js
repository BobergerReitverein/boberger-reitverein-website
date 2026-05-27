const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "anfahrtPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "routen": routen[] { icon, titel, schritte }
    }`
  );
  return data || {};
};
