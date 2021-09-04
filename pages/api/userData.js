const { MongoClient } = require("mongodb");

export async function userDatabaseConnection() {
  const client = await new MongoClient(
    "mongodb+srv://bernardo:THNyRbakY5EnQDNi@cluster0.2pezt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  await client.connect();

  const db = client.db();

  return db;
}

export async function userFetchingData() {
  const db = await userDatabaseConnection();

  const imcData = await db.collection("imcs").find().toArray();

  const imcDataFormated = JSON.stringify(imcData);

  const imcDataParsed = JSON.parse(imcDataFormated);

  return imcDataParsed;
}

export default async function userDatabaseHandling(req, res) {
  const db = await userDatabaseConnection();

  const { email, password, check, birthday, height, weight } = req.body;

  const userSignedUp = await db.collection("users").findOne({ email: email });

  if (userSignedUp) {
    res.status(422).json({ message: "Usuário já cadastrado!" });
    return;
  }

  if (req.method === "POST") {
    try {
      await db
        .collection("users")
        .insertOne({ email, password, check, birthday, height, weight });
    } catch (error) {
      res.status(500).json({ message: "Falha ao inserir os dados.", isLogin: false  });
      return;
    }

    res.status(201).json({ message: "Inscrição realizada com sucesso!" });
  }
}
