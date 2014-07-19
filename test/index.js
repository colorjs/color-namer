"use strict";

var assert = require('assert')
var namer = require('..')

suite('namer', function () {

  test('is a function', function() {
    assert.equal('function', typeof(namer))
  })

  test('returns an array of candidates with distance values', function() {
    var names = namer('#ffa500')
    assert(Array.isArray(names))
    assert.equal(names[0].distance, 0)
  })

  test('defaults to HTML color candidates', function() {
    var names = namer('0000FF')
    assert.equal(names.length, 21)
  })

  test('accepts custom color candidates', function() {
    var candidates = [
      { name: 'blue', hex: '#0000ff' },
      { name: 'green', hex: '#008000' },
      { name: 'yellow', hex: '#ffff00' }
    ]
    var names = namer('0000FF', candidates)
    assert.equal(names.length, 3)
  })

  test('allows second argument to be a string specifying color set to use', function() {
    var names = namer('0000F3', 'basic')
    assert(names.length < 25)
    assert.equal(names[0].name, "blue")
  })

  test('validates format of custom candidates', function() {
    assert.throws(function() { namer("00CC00", "badness") })
  })

  test('matches inexact colors', function() {
    var names = namer('FF0001')
    assert.equal(names[0].hex, '#FF0000')
    assert.equal(names[0].name, 'red')
    assert.equal(Math.floor(names[0].distance*100), 25)
  })

  test('matches exact colors', function() {
    var names = namer('0000FF')
    assert.equal(names[0].hex, '#0000FF')
    assert.equal(names[0].name, 'blue')
    assert.equal(names[0].distance, 0)
  })

  test('accepts hex strings that include a hash symbol', function() {
    var names = namer('#0000FF')
    assert.equal(names[0].hex, '#0000FF')
    assert.equal(names[0].name, 'blue')
    assert.equal(names[0].distance, 0)
  })

  test('accepts non-hex input formats', function() {
    var names = namer("hsl(50,100%,50%)")
    assert.equal(names[0].name, 'gold')
  })

})
