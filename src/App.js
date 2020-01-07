// import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('RouteAround - the route planner for urban runners, leisurely strollers and dogwalkers'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
