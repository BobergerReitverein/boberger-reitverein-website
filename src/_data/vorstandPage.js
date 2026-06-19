const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "vorstandPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "heroBildHotspot": heroBild.hotspot,
      heroSubtitel,
      "gruppenFotoUrl": gruppenFoto.asset->url,
      "gruppenFotoHotspot": gruppenFoto.hotspot,
      gruppenFotoBeschriftung,
      betriebsleiterinName,
      betriebsleiterinRolle,
      "betriebsleiterinFotoUrl": betriebsleiterinFoto.asset->url,
      "betriebsleiterinFotoHotspot": betriebsleiterinFoto.hotspot,
      satzungBeschreibung,
      mitgliedUeberschrift,
      mitgliedText
    }`
  );
  return data || {};
};
