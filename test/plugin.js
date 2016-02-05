'use strict';

var sinon = require('sinon');
var posthtml = require('posthtml');
var expect = require('chai').expect;

var when = require('..');

var plugin = sinon.spy(function(tree) {
  return tree;
});

describe('posthtml-when', function() {
  var html = '<html></html>';

  afterEach(function() {
    plugin.reset();
  });

  it('skips plugin when false', function(done) {
    posthtml()
      .use(when(false, plugin))
      .process(html)
      .then(function(result) {
        expect(plugin.called).to.be.false;
        expect(result.html).to.equal(html);
        done();
      }).catch(function(err) {
        done(err);
      });
  });

  it('runs plugin when true', function(done) {
    posthtml()
      .use(when(true, plugin))
      .process(html)
      .then(function() {
        expect(plugin.calledOnce).to.be.true;
        done();
      }).catch(function(err) {
        done(err);
      });
  });

  it('allows conditional to be a function', function(done) {
    posthtml()
      .use(when(function() {
        return false;
      }, plugin))
      .process(html)
      .then(function() {
        expect(plugin.called).to.be.false;
        done();
      }).catch(function(err) {
        done(err);
      });
  });
});
