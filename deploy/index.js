var express = require('express')
var app = express()
var compression = require('compression')

app.set('port', (process.env.PORT || 3200))
app.use(compression())
console.log('sssss');
app.use(express.static(__dirname + '/browser'))
app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
