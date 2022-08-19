const express = require('express');
const app = express();

app.get('/', function (req, res) {
  console.log("res",res);
  res.send(`<h1>'Hello World'</h1>`);
});

app.get('/oi', function (req, res) {
  console.log("res",res);
  res.send(`<h1>'Aló mundo!'</h1>`);
});
console.log("Servidor rodando na porta 3000");
app.listen(3000);