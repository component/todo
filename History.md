1.0.0 / 2014-11-01
==================

 * use __component/reactive__ directly instead of __component/view__ (broken with latest reactive version)
 * rename __ItemView__ to __ItemPresenter__
 * update to express 4
 * refactor due to component (1)
   * remove `name` and `version` properties of locals
   * simplify build process
   * use `templates` property instead of component convert
   * remove on the fly build (replace with [component-middleware](https://github.com/componentjs/middleware.js) in next version)