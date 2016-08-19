# posthtml-when

[![Build Status](https://travis-ci.org/devinus/posthtml-when.svg?branch=master)](https://travis-ci.org/devinus/posthtml-when)
[![Coverage Status](https://coveralls.io/repos/github/devinus/posthtml-when/badge.svg?branch=master)](https://coveralls.io/github/devinus/posthtml-when?branch=master)
[![npm version](https://badge.fury.io/js/posthtml-when.svg)](https://badge.fury.io/js/posthtml-when)
[![Dependency Status](https://david-dm.org/devinus/posthtml-when.svg)](https://david-dm.org/devinus/posthtml-when)
[![devDependency Status](https://david-dm.org/devinus/posthtml-when/dev-status.svg)](https://david-dm.org/devinus/posthtml-when?type=dev)

[PostHTML][1] plugin for conditional plugins.

## Usage

```js
var posthtml = require('posthtml');
var when = require('posthtml-when');

posthtml()
  .use(when(conditional, plugin()));
```

[1]: https://github.com/posthtml/posthtml
