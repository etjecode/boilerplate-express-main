let express = require('express');
let app = express();

console.log("Hello World")

app.get('/', (_req, res) => {
  res.send('Hello Express')
})

app.get('/', (_req, res) => {
  res.sendFile( __dirname + '/views/index.html' );
})

app.use('/public', express.static(__dirname + '/public'));


app.get('/json', (_req, res) => {
  res.json({"message": "Hello json"})
})































 module.exports = app;
