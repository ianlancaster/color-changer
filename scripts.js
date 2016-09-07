var $body = $('body');
var $randomColorButton = $('#randomColorButton');
var $resetButton = $('#resetButton');

$(document).on('click', '#randomColorButton', function() {
  var random = '#' + Math.floor(Math.random()*16777215).toString(16);
  $body.css({'background-color' : random})
});

$resetButton.on('click', function() {
  $body.css({'background-color' : 'white'})
});
