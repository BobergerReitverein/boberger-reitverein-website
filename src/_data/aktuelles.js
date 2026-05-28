const client = require('./sanity');

module.exports = async function () {
  return client.fetch(`
    *[_type == "newsPost"] | order(datum desc) {
      titel,
      kategorie,
      datum,
      auszug,
      inhalt,
      termineAbschnitte,
      hinweis,
      "slug": slug.current
    }
  `);
};
