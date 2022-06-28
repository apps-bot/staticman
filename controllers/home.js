'use strict'

const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));

const pkg = require('./../package.json')

module.exports = (req, res) => {
  res.send(`StaticMan v ${pkg.version}!`)
}
