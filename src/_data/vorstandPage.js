const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "vorstandPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "gruppenFotoUrl": gruppenFoto.asset->url,
      gruppenFotoBeschriftung,
      betriebsleiterinName,
      betriebsleiterinRolle,
      "betriebsleiterinFotoUrl": betriebsleiterinFoto.asset->url
    }`
  );
  return data || {};
};
