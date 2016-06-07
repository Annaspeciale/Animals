$(document).ready(function() {
  var answer = prompt('What is your favorite animal? Snakes, turtles or insects?');

  if (answer === 'snakes') {
    $('#snakes').show();
  } else if (answer === 'turtles') {
    $('#turtles').show();
  } else if (answer === 'insects') {
    $('#insects').show();
  } else {
    document.write("Invalid Entry")
  }

});
