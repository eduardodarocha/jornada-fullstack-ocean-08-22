const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  console.log("res",res);
  res.send(`<h1>'Hello World!!!'</h1>`);
});

app.get('/oi', function (req, res) {
  console.log("res",res);
  res.send(`<h1>'Alô mundo!'</h1>`);
});
console.log("Servidor rodando na porta 3000");

const lista = [
  {
    id: 1,
    nome: "Paulo",
    pontos: 21,
  },
  {
    id: 2,
    nome: "Daniel",
    pontos: 52,
  },
  {
    id: 3,
    nome: "Beatriz",
    pontos: 97,
  },
];

app.get("/pontuacoes", function (req, res) {
  res.send(lista);
});

app.post("/pontuacoes", function (req, res) {
  const item = req.body;
  // console.log(item);
  lista.push({
    id: lista.length + 1,
    nome: item.nome,
    pontos: item.pontos,
  });
  res.send("Item adicionado com sucesso!");

  res.send(lista);
})

app.listen(3000);