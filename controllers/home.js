'use strict'

const pkg = require('./../package.json')

app.get('/error', (req, res) => {
  res.send('Custom error landing page')
}

module.exports = (req, res) => {
  res.send(`StaticMan v ${pkg.version}!`)
}
