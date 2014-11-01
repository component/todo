
/**
 * Faux db.
 */

var items = [];

/**
 * Index of `id` in db.
 */

function indexOf(id) {
  for (var i = 0, len = items.length; i < len; ++i) {
    if (id == items[i].id) {
      return i;
    }
  }
}

/**
 * GET all items.
 */

exports.all = function(req, res){
  res.send(items);
};

/**
 * POST a new item.
 */

exports.create = function(req, res){
  var item = req.body;
  var id = items.push(item) - 1;
  item.id = id;
  res.send({ id: id });
};

/**
 * DELETE item :id.
 */

exports.remove = function(req, res){
  var id = req.params.id;
  var i = indexOf(id);
  items.splice(i, 1);
  res.sendStatus(200);
};

/**
 * PUT changes to item :id.
 */

exports.update = function(req, res){
  var id = req.params.id;
  var i = indexOf(id);
  var body = req.body;
  var item = items[i];
  if (!item) return res.send(404, 'item does not exist');
  item.title = body.title;
  item.complete = body.complete;
  res.sendStatus(200);
};