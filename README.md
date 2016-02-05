# posthtml-when

[![Build Status](https://travis-ci.org/devinus/posthtml-when.svg?branch=master)](https://travis-ci.org/devinus/posthtml-when)
[![Coverage Status](https://coveralls.io/repos/github/devinus/posthtml-when/badge.svg?branch=master)](https://coveralls.io/github/devinus/posthtml-when?branch=master)

[PostHTML][1] plugin for conditional plugins.

## Usage

```js
var posthtml = require('posthtml');
var when = require('posthtml-when');

posthtml()
  .use(when(conditional, plugin()));
```

[1]: https://github.com/posthtml/posthtml
