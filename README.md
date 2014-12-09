# CivicSource LESS Framework

> Base styles / style guide for the CivicSource UX

Be sure to checkout the [demo page / style guide](https://civicsource.github.io/less-framework).

## Install with [Bower](http://bower.io/)

```
bower install civicsource/less-framework
```

Then reference `preboot.less` from any LESS stylesheet in your project.

```less
@import (reference) "bower_components/less-framework/preboot.less";
```

## How to Build the `gh-pages` Style Guide

Clone the repo, then run:

```
npm install
bower install
grunt publish
```

This will build the style guide into the `build` folder and push the results to the `gh-pages` branch on the remote named `origin`.

If you just want to build the style guide to view locally, just run `grunt` and you can view `build/index.html`.
