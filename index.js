var basicColors = require('./lib/html-colors');
var htmlColors = require('./lib/html-colors');
var distance = require('euclidean-distance');
var chroma = require('chroma-js');

module.exports = function(color, candidates) {

  if (!candidates) {
    candidates = htmlColors;
  } else if (!Array.isArray(candidates)) {
    throw new Error("The second argument must be an array of color candidates");
  }

  var color = chroma(color)

  return candidates
    .map (function(candidate) {
      candidate.distance = distance(color.lab(), chroma(candidate.hex).lab())
      return candidate;
    })
    .sort (function(a, b) {
      return a.distance - b.distance;
    });

}