
/**
 * Module dependencies.
 */

var express = require('express')
  , items = require('./server/items')
  , app = express();

// configure

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/build'));

// items

app.get('/items', items.all);
app.post('/items', items.create);
app.put('/items/:id', items.update);
app.delete('/items/:id', items.remove);

// catch-all

app.all('*', build, function(req, res){
  res.sendfile('index.html');
});

// bind

app.listen(3000);
console.log('listening on 3000');
