$(document).ready(function() {
    let count = 0;
    $('#button').click(function() {
      count++;
      $('#resultat').text(count);
    });
  });