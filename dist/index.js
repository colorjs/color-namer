"use strict";

function update() {

  // Empty the results container
  $("#colors").text("")

  // Try to parse the input
  try {
    var color = $("#query").val()
  } catch(e) {
    return console.log(e)
  }

  $("body").css({
    backgroundColor: chroma(color).hex(),
    color: (chroma(color).luminance() > 0.5) ? "black" : "white"
  })

  window.location.hash = chroma(color).hex();

  $("input").css({
    color: (chroma(color).luminance() > 0.5) ? "black" : "white"
  })

  // Toggle input placeholder color
  $("#query").toggleClass("white", chroma(color).luminance() < 0.5)

  var colors = colorNamer(color, 'html')

  colors.forEach(function(color) {
    $("#colors").append(ich.color(color))
  })
  console.log(colors)
}

$(function(){
  $("#query").on('keyup', update)
  $("#query").on('change', update)

  $("form").on('submit', function(e) {
    return false;
  })

  if (window.location.hash) {
    $("#query").val(window.location.hash)
  }

  update()

})
