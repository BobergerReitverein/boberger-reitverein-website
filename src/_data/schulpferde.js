const client = require('./sanity');

module.exports = async function () {
  return client.fetch(`
    *[_type == "schulpferd"] | order(name asc) {
      name,
      rasse,
      voltigieren,
      "bildUrl": bild.asset->url
    }
  `);
};
