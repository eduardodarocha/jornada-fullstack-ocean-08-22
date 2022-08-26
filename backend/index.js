const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_DB_URL;
// const url = "mongodb://localhost:27017";
const dbName = process.env.MONGO_DB_NAME;

// Declaração da função main()
async function main() {
  // Realizar a conexão com o MongoClient
  // MongoClient -> MongoDatabase -> MongoCollection

  // Conexões com o client podem levar um tempo para
  //  concluir. Portanto, utilizamos o mecanismo de
  //  Promises do JavaScript, que permitem aguardar
  //  esse tempo. Para isso, vamos usar o async/await.
  console.log("Conectando com o banco de dados...");

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("pontuacoes");

  console.log("Banco de dados conectado com sucesso!");


  const app = express();
  app.use(express.json());

  app.get('/', function (req, res) {
    console.log("res", res);
    res.send(`<h1>'Hello World!!!'</h1>`);
  });

  app.get('/oi', function (req, res) {
    console.log("res", res);
    res.send(`<h1>'Alô mundo!'</h1>`);
  });
  console.log("Servidor rodando na porta 3000");

  // const lista = [{
  //     id: 1,
  //     nome: "Paulo",
  //     pontos: 21,
  //   },
  //   {
  //     id: 2,
  //     nome: "Daniel",
  //     pontos: 52,
  //   },
  //   {
  //     id: 3,
  //     nome: "Beatriz",
  //     pontos: 97,
  //   },
  // ];

  app.get("/pontuacoes", async function (req, res) {
    const itens = await collection
    .find()
    .sort({ pontos: -1 })
    .limit(10)
    .toArray();
    res.send(itens);
  });

  app.post("/pontuacoes", async function (req, res) {
    const item = req.body;
    // console.log(item);
    // lista.push({
    //   id: lista.length + 1,
    //   nome: item.nome,
    //   pontos: item.pontos,
    // });
    await collection.insertOne(item)
    res.send(item);
  });

  app.listen(process.env.PORT || 3000);
}
main();