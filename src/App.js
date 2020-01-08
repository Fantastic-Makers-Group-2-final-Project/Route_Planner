// var styleSheet = require('src/App.css');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.status(200).json(
    'This is where our RouteAround web app will go :)'
  )
});
app.post('/', (req, res) => {
  res.status(200).json(req.body)
})
module.exports = app;