const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "vorstandPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      heroSubtitel,
      "gruppenFotoUrl": gruppenFoto.asset->url,
      gruppenFotoBeschriftung,
      betriebsleiterinName,
      betriebsleiterinRolle,
      "betriebsleiterinFotoUrl": betriebsleiterinFoto.asset->url,
      satzungBeschreibung,
      mitgliedUeberschrift,
      mitgliedText
    }`
  );
  return data || {};
};
