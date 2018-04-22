console.log("w00t");

var colors = ['#ff0000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];

$('#panel-body').css('background', random_color);
