const express = require("express");
const app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const StaticmanAPI = require('./server')

const api = new StaticmanAPI()

api.start(port => {
  console.log('Staticman API running on port', port)
})
