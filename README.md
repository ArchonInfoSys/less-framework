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
grunt
```

This will build the style guide into the `build` folder. To view, just open `build/index.html` in a browser.

Once you are ready to publish the result to [Github Pages](https://pages.github.com/), run:

```
grunt publish
```

This will build the style guide and push it to the `gh-pages` branch on the `origin` remote.
