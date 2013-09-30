# grunt-mtg-validate

> Grunt plugin to validate mtg deck lists.

## Getting Started
This plugin requires Grunt `~0.4.0rc7`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install jtrussell/grunt-mtg-validate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mtg-validate');
```

## The "mtg_validate" task

### Overview
In your project's Gruntfile, add a section named `mtg_validate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mtg_validate: {
    options: {
      maindeck_count: 100
    },
    commander: {
      'Thraximundar': 'path/to/list.md'
    }
  }
});
```

NOTE: Your decklist can be arranged in any way you like. Cards should be
presented as unorderd list items with a dash at the start of their line.
Optionally you may specify a card quantity:

```
- Thraximundar
```

or 

```
- 4 Brainstorm
```


### Options

#### options.maindeck_count
Type: `Int`
Default value: `60`

The number of cards you expect to find in the main deck of each list.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
