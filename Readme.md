
  ![](http://f.cl.ly/items/3l0r2s1C0d1Y1d3N202J/todo.png)

  Todo list component example app:

## Installation

    $ git clone https://github.com/component/todo.git
    $ cd todo
    $ npm install
    $ make
    $ make server

## Implementation

  __NOTE:__ This is a fork of the original component/todo, refactored to differnet stack:
  coffee-script, jade, stylus, component API

  In this implementation all private client-side components are located in `./client`,
  while server related REST end-points are in `./server`. The `./index.html`
  file bootstraps the client-side, and `app.js` is a small Express server
  to power the backend.

  Each client-side component in `./client` defines its own dependencies,
  both "local" (in the `./client` dir), and remote from public components
  that devs have created.

  This is just _one_ example of how you could structure an application. You could
  for example take a more traditional approach with `./models`, `./controllers`,
  and `./views` etc. The entire app could be a single component, with all dependencies
  specified in the root ./component.json, however I recommend splitting your app
  into multiple as shown here, regardless of directory structure.

## Components used

  - [page.js](https://github.com/visionmedia/page.js) for routing
  - [model](https://github.com/component/model) for models
  - [collection](https://github.com/component/collection) for model collections
  - [keyname](https://github.com/component/keyname) for keycode name strings
  - [reactive](https://github.com/component/reactive) for reactive templates

## License

  MIT
