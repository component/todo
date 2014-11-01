
/**
 * Module dependencies.
 */

var Item = require('item')
  , ItemPresenter = require('item-presenter')
  , Collection = require('collection')
  , keyname = require('keyname')
  , page = require('page');

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

      // presenter
      var presenter = new ItemPresenter(item);
      list.appendChild(presenter.view.el);
      break;
  }
};

/**
 * Clear list.
 */

page('*', function(ctx, next){
  list.innerHTML = '';
  next();
});

/**
 * All items.
 */

page('/', function(){
  Item.all(function(err, items){
    items.each(function(item){
      var presenter = new ItemPresenter(item);
      list.appendChild(presenter.view.el);
    });
  });
});

/**
 * Completed items.
 */

page('/complete', function(){
  Item.all(function(err, items){
    items.select('complete()').each(function(item){
      var presenter = new ItemPresenter(item);
      list.appendChild(presenter.view.el);
    });
  });
});

/**
 * Incomplete items.
 */

page('/incomplete', function(){
  Item.all(function(err, items){
    items.reject('complete()').each(function(item){
      var presenter = new ItemPresenter(item);
      list.appendChild(presenter.view.el);
    });
  });
});

page();
