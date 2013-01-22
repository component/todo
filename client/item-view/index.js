
/**
 * Module dependencies.
 */

var classes = require('classes')
  , domify = require('domify')
  , html = require('./template')
  , View = require('view')

/**
 * Expose `ItemView`.
 */

module.exports = ItemView;

/**
 * Initialize a new view for `item`.
 *
 * @param {Item} item
 * @api public
 */

function ItemView(item) {
  var el = domify(html);
  el[0].children[1].innerText = item.get('title');
  View.call(this, item, el[0]);
  this.classes = classes(this.el);
  item.on('change complete', this.toggleCompleteClass.bind(this));
  this.bind('click .x', 'remove');
  this.bind('change [name=complete]', 'changed');
  this.toggleCompleteClass();
}

/**
 * Inherits from `View.prototype`.
 */

ItemView.prototype.__proto__ = View.prototype;

/**
 * Complete state change.
 */

ItemView.prototype.changed = function(e){
  var complete = e.target.checked;
  this.obj.complete(complete);
  this.obj.save();
};

/**
 * Remove the item.
 */

ItemView.prototype.remove = function(){
  this.el.parentNode.removeChild(this.el);
  this.obj.remove();
};

/**
 * Toggle root ".complete" class.
 */

ItemView.prototype.toggleCompleteClass = function(){
  if (this.obj.complete()) {
    this.classes.add('complete');
  } else {
    this.classes.remove('complete');
  }
};
