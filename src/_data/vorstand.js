const client = require('./sanity');

module.exports = async function () {
  return client.fetch(`
    *[_type == "vorstandsmitglied"] | order(reihenfolge asc) {
      name,
      rolle,
      "fotoUrl": foto.asset->url
    }
  `);
};
