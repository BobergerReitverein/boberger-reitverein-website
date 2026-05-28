const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "datenschutzPage"][0] {
      stand
    }`
  );
  return data || {};
};
