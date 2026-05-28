const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "impressumPage"][0] {
      registernummer,
      registergericht,
      vorstandEintraege,
      inhaltlichVerantwortlichTitel,
      inhaltlichVerantwortlichName,
      bildnachweisName,
      bildnachweisUrl,
      bildnachweisZusatz
    }`
  );
  return data || {};
};
