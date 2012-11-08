
/**
 * Module dependencies.
 */

var Item = require('item')
  , ItemView = require('item-view')
  , Collection = require('collection')
  , keyname = require('keyname');

/**
 * Collection of todo Items.
 */

var items = new Collection;

/**
 * Todo input.
 */

var input = document.querySelector('[name=todo]');

/**
 * Todo list.
 */

var list = document.querySelector('#todos');

/**
 * Handle keydown.
 */

input.onkeydown = function(e){
  switch (keyname(e.which)) {
    case 'enter':
      // input
      var str = e.target.value;
      if ('' == str.trim()) return;
      e.target.value = '';

      // item
      var item = new Item({ title: str });
      items.push(item);
      item.save();

      // view
      var view = new ItemView(item);
      list.appendChild(view.el);
      break;
  }
};

// fetch initial items

Item.all(function(err, items){
  items.each(function(item){
    var view = new ItemView(item);
    list.appendChild(view.el);
  });
});

// TODO: refactor ^ once we have 
// async enumerables:

/*

Item.each(function(item){
  var view = new ItemView(item);
  list.appendChild(view.el);
});

*/