'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ttnapp:app', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({foo: 'bar'})    // Mock options passed in
      .withArguments(['name-x'])      // Mock the arguments
      .withPrompts({someAnswer: true});
  });

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
