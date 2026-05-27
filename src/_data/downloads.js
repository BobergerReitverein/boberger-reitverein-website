const client = require('./sanity');

module.exports = async function () {
  return client.fetch(`
    *[_type == "download"] | order(kategorie asc, name asc) {
      name,
      kategorie,
      datum,
      "dateiUrl": datei.asset->url
    }
  `);
};
