fs = require('fs')
resolve = require('component-resolver')
build = require('component-builder')
coffee = require('builder-coffee-script')
mkdirp = require('mkdirp')

OUTPUT = 'build'
REMOTES = 'components'

# resolve the dependency tree
resolve process.cwd(), { install: true, out: REMOTES}, (err, tree) ->
    if err
        throw err

    mkdirp.sync OUTPUT

    # include javascript and coffeescript, both from `.scripts` field
    build.scripts(tree)
        .use('scripts', build.plugins.js(), coffee())
        .use('templates', build.plugins.string())
        .end (err, string) ->
            if err
                throw err
            fs.writeFileSync "#{OUTPUT}/build.js", build.scripts.require + string

    # only include `.css` files from components' `.styles` field
    build.styles(tree)
        .use('styles', build.plugins.css())
        .end (err, string) ->
            if err
                throw err
            fs.writeFileSync "#{OUTPUT}/build.css", string

    # only copy `images` and `fonts` to the build folder
    build.files(tree, {destination: OUTPUT})
        .use('images', build.plugins.symlink())
        .use('fonts', build.plugins.symlink())
        .end()