// import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

// const express = require('express');
// const port = process.env.Port || 3000;
// const app = express();
// app.get('/', function (req, res) {
//   res.send(JSON.stringify({'RouteAround - the route planner for urban runners, leisurely strollers and dogwalkers'}));
// });

// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}!`);
// });

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.status(200).json({
    "thing": "somethingElse"
  })
});
app.post('/', (req, res) => {
  res.status(200).json(req.body)
})
module.exports = app;