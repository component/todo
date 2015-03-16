###*
# Module dependencies.
###

express = require('express')
items = require('./server/items')
bodyParser = require('body-parser')
morgan = require('morgan')
app = express()
# configure
app.use morgan('dev')
app.use bodyParser.json()
app.use express.static(__dirname + '/build')
# items
app.get '/items', items.all
app.post '/items', items.create
app.put '/items/:id', items.update
app.delete '/items/:id', items.remove
# catch-all
app.get '/*', (req, res) ->
  res.sendFile __dirname + '/index.html'
  return
# bind
app.listen 3000
console.log 'listening on http://localhost:3000'

# ---
# generated by js2coffee 2.0.1