const client = require('./sanity');

module.exports = async function () {
  const data = await client.fetch(
    `*[_type == "unterrichtPage"][0] {
      "heroBildUrl": heroBild.asset->url,
      "introBildUrl": introBild.asset->url,
      introAbsaetze,
      feriencampLabel, feriencampTitel, feriencampText, stundenplanText
    }`
  );
  return data || {};
};
