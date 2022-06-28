var app = express();
app.get('/help', function(req, res) {
    res.sendFile('public/help.html', {root: __dirname })
});

const StaticmanAPI = require('./server')

const api = new StaticmanAPI()

api.start(port => {
  console.log('Staticman API running on port', port)
})
