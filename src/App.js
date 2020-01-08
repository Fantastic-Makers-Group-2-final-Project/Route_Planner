// import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

const express = require('express');
const port = process.env.Port || 3000;
const app = express();
app.get('/', function (req, res) {
  res.send(JSON.stringify({'RouteAround - the route planner for urban runners, leisurely strollers and dogwalkers'}));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
