let express = require('express');
let bodyParser = require('body-parser');
let app = express();
require('dotenv').config()

console.log("Hello World")

app.use(bodyParser.urlencoded({extended: false}));

app.post('/name', (req, res) =>{
  let firstName = req.body.first;
  let lastName = req.body.last;
  res.json({'name': firstName + ' ' + lastName});
})

app.get('/json', (req, _res, next) =>{
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
})

app.get('/now', (req, _res, next) =>{
  req.time = new Date().toString();
  next();
}, (req, res) =>{
  res.json({'time': req.time});
})

app.get('/:word/echo', (req, res, next) =>{
  res.json({'echo': req.params.word});
 next();
})

/* 
app.get('/name', (req, res, next) =>{
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({'name': firstName + ' ' + lastName});
 next();
}) */

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
