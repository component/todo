
/**
 * Module dependencies.
 */

var express = require('express')
  , build = require('./server/build')
  , items = require('./server/items')
  , app = express();

// configure

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/build'));

// items

app.get('/item/all', items.all);
app.post('/item', items.create);
app.put('/item/:id', items.update);
app.del('/item/:id', items.remove);

// catch-all

app.all('*', build, function(req, res){
  res.sendfile('index.html');
});

// bind

app.listen(3000);
console.log('listening on 3000');
