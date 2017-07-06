"use strict";

var chroma = require('chroma-js')
var color
var key

// These `require` statements are all explicit
// to keep the browserify build from breaking
var lists = {
  basic: require('./lib/colors/basic'),
  html: require('./lib/colors/html'),
  ntc: require('./lib/colors/ntc'),
  pantone: require('./lib/colors/pantone'),
  roygbiv: require('./lib/colors/roygbiv'),
  x11: require('./lib/colors/x11')
}

var namer = module.exports = function(color) {
  color = chroma(color)
  var results = {}
  for (key in lists) {
    results[key] = lists[key]
      .map (function(name) {
        name.distance = chroma.distance(color, chroma(name.hex))
        return name
      })
      .sort (function(a, b) {
        return a.distance - b.distance
      })
  }
  return results
}

namer.chroma = chroma
namer.lists = lists
