'use strict'

var app = express();
app.get('/help', function(req, res) {
    res.sendFile('public/help.html', {root: __dirname })
});


const pkg = require('./../package.json')

module.exports = (req, res) => {
  res.send(`StaticMan v ${pkg.version}!`)
}
