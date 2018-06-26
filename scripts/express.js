var express = require('express');
var path = require('path');
const app = express();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

nunjucks.configure('templates', {
  autoescape: true,
  express: app 
}); 

app.set('view engine','nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));


app.route('/')
  .get((req, res) => {
    res.render('index');
})

app.route('/index')
  .get((req, res) => {
    res.render('index');
})

app.route('/create')
  .get((req, res) => {
    res.render('create');
})

app.route('/FAQ')
  .get((req, res) => {
    res.render('FAQ');
})

app.route('/About')
  .get((req, res) => {
    res.render('About');
})

app.route('/contact-us')
  .get((req, res) => {
    res.render('contact-us');
})

app.route('/careers')
  .get((req, res) => {
    res.render('careers');
})

app.listen(9000);