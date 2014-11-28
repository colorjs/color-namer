$(function() {

  var l = 50;
  var h = parseInt(Math.random()*360, 10);
  var s = parseInt(Math.random()*100, 10);
  var set = true;
  var clipRGB = new ZeroClipboard.Client();
  clipRGB.setHandCursor(true);
  var clipHEX = new ZeroClipboard.Client();
  clipHEX.setHandCursor(true);
  var clipHSL = new ZeroClipboard.Client();
  clipHSL.setHandCursor(true);
  var color = [0,0,0];
  var hex = '#000000';

  function setColor() {
    $('body').css('background-color', 'hsl('+h+','+s+'%,'+l+'%)');

    var bgcolor = $('body').css('background-color');

    if (bgcolor.match(/^rgb/)) {
      color = bgcolor.replace('rgb(', '').replace(')', '').split(', ');
      hex = '#' + (color[0] > 16 ? '' : '0') + parseInt(color[0], 10).toString(16) +
                  (color[1] > 16 ? '' : '0') + parseInt(color[1], 10).toString(16) +
                  (color[2] > 16 ? '' : '0') + parseInt(color[2], 10).toString(16);
    } else {
      hex = bgcolor;
      color = [parseInt(bgcolor.substr(1,2), 16), parseInt(bgcolor.substr(3,2), 16), parseInt(bgcolor.substr(5,2), 16)];
    }
    $('#hexval').html(hex);

    $('#r').html(color[0]);
    $('#g').html(color[1]);
    $('#b').html(color[2]);

    $('#h').html(h);
    $('#s').html(s+'%');
    $('#l').html(l+'%');

    clipRGB.setText(color[0]+' '+color[1]+' '+color[2]);
    clipHEX.setText(hex);
    clipHSL.setText(h+' '+s+'% '+l+'%');
  }

  try {
    var pageTracker = _gat._getTracker("UA-3110123-8");
    pageTracker._trackPageview();
  } catch(err) {}

  clipRGB.glue('rgb');
  clipHEX.glue('hex');
  clipHSL.glue('hsl');

  $(window).mousemove(function(e) {
    if (set) {
      h = Math.min(360, parseInt((e.clientX / $(window).width()) * 360, 10));
      s = 100 - Math.min(100, parseInt((e.clientY / $(window).height()) * 100, 10));
      setColor();
    }
  });

  $(window).mousewheel(function(e, d) {
    e.preventDefault();
    if (set) {
      l = Math.max(0, Math.min(100, l + parseInt(d, 10)));
      setColor();
    }
  });

  $(window).click(function() {
    setColor();
    set = !set;
    $('#color').toggleClass('itsok', set);
  });

  $('div:not(#color)').mousemove(function() {
    $('#color').addClass('hover');
  }).mouseleave(function() {
    $('#color').removeClass('hover');
  });

  $('div:not(#color)').click(function(e) {
    e.stopPropagation();
  });

  setColor();

});
