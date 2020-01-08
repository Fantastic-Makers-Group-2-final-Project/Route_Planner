// import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send(JSON.stringify({'RouteAround - the route planner for urban runners, leisurely strollers and dogwalkers'}));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
