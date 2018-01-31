// Private key:
// Publish key:

var express = require('express');
var stripe = require('stripe')('private_key');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname +'/src');
app.user(bodyParser.json());
app.user(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res){
    res.render('index', {

    });
});
app.get('/paysucess', function(req,res){
    res.render('index', {

    });
});
app.get('/charge', function(req,res){
    res.render('index', {

    });
});

app.listen(3000, function(){
  console.log('Stripe is running');
});
