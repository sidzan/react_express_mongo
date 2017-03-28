
const path = require('path');
const express = require('express');
const bodyParser = require ('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const debug = require('debug');
const debugWarn = debug('warn');
const debugError = debug('error');

var db;
const url = 'mongodb://sijan:sijan@localhost:27017/starwars'

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err)
  db = database
  debugWarn ('check this out')
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})


app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})


app.post("/list_quote",(req,res)=>{
  console.log("this was called")
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.send(result)
  })
});

app.post("/add_quote",(req,res)=>{
  console.log("this was called",req.body)
  db.collection('quotes').save(req.body,(err)=>{
      if (err){
          res.status(500).send(err);
          return
      }
      res.status(200).send(req.body._id);
  });
});

app.post("/delete",(req,res)=>{
  console.log("delete called",req.body.id)
  db.collection('quotes').remove(
  {"_id":  req.body.id },(err)=>{
      if (err){
          res.status(500).send(err);
          return
      }
      res.status(200).send("Ok");
  });
});

function add_quote(data,cb){
  db.collection('quotes').save(data, (err, result) => {
    cb()
    if (err) return console.log(err)
  })
}
