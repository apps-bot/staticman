const express = require("express");
const app = express();

var express = require('../..');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

const StaticmanAPI = require('./server')

const api = new StaticmanAPI()

api.start(port => {
  console.log('Staticman API running on port', port)
})
