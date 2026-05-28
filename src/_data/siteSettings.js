const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "siteSettings"][0] {
      vereinsname, strasse, plzOrt, telefon, email,
      instagram, facebook, youtube, tiktok,
      gruendungsjahr, oeffnungszeiten
    }`
  );
  return data || {};
};
