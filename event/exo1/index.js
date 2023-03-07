$(document).ready(function() {
    var count = 0;
    $('#myButton').click(function() {
      count++;
      $('#clickCount').text(count);
    });
  });