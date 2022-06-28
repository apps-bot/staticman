'use strict'

const pkg = require('./../package.json')

app.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})

module.exports = (req, res) => {
  res.send(`StaticMan v ${pkg.version}!`)
}
