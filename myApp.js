let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World")

app.get('/json', (req, _res, next) =>{
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
})

/* 
app.get('/', (_req, res) => {
  res.send('Hello Express')
}) */

app.get('/', (_req, res) => {
  res.sendFile( __dirname + '/views/index.html' );
})

app.use('/public', express.static(__dirname + '/public'));


app.get('/json', (_req, res) => {
let responseMessage = 'Hello json'

  res.json(
    {'message':   process.env.MESSAGE_STYLE === 'uppercase' ? responseMessage.toUpperCase() : responseMessage}
  )
})






























 module.exports = app;
