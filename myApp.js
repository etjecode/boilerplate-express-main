let express = require('express');
let app = express();

console.log("Hello World")

app.get('/', (_req, res) => {
  res.send('Hello Express')
})

app.get('/', (_req, res) => {
  res.sendFile( __dirname + '/views/index.html' );
})































 module.exports = app;
