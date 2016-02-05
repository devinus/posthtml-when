'use strict';

var packageName = require('../package.json').name;
var debug = require('debug')(packageName);

function skip() {
  debug('skipping plugin');
}

module.exports = function when(conditional, plugin) {
  if (typeof conditional === 'function' ? conditional() : conditional) {
    return plugin;
  }

  return skip;
};
