'use strict'

const pkg = require('./../package.json')

module.exports = (req, res) => {
  res.send(`StaticMan v ${pkg.version}!`)
}
