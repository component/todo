
/**
 * Module dependencies.
 */

var template = require('./template')
  , classes = require('classes')
  , reactive = require('reactive');

/**
 * Expose `ItemPresenter`.
 */

module.exports = ItemPresenter;

/**
 * Initialize a new presenter for `item`.
 *
 * @param {Item} item
 * @api public
 */

function ItemPresenter(item) {
  this.item = item;
  this.view = reactive(template, item, {
    delegate: this
  });
  this.classes = classes(this.view.el);
  this.toggleCompleteClass(); // update for initial template
}

/**
 * Save completed state change
 */

ItemPresenter.prototype.change = function(e){
  var complete = e.target.checked;
  this.item.complete(complete);
  this.toggleCompleteClass();
  this.item.save();
};

ItemPresenter.prototype.toggleCompleteClass = function(){
  if (this.item.complete()) {
    this.classes.add('complete');
  } else {
    this.classes.remove('complete');
  }
};

/**
 * Remove the item.
 */

ItemPresenter.prototype.remove = function(){
  this.view.destroy();
  this.item.destroy();
  
};
