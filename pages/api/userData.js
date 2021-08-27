const { MongoClient } = require("mongodb");

export default async function userFetchingData() {

  const client = await new MongoClient(
    "mongodb+srv://bernardo:THNyRbakY5EnQDNi@cluster0.2pezt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  await client.connect();

  const db = client.db();

  const imcData = await db.collection('imcs').find().toArray();

  const imcDataFormated = JSON.stringify(imcData);

  const imcDataParsed = JSON.parse(imcDataFormated);

  return imcDataParsed;
}
