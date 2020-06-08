'use strict';

$(document).ready(function() {
  $(':input').css('background-color', 'yellow');
  
  $(':button').css({
    backgroundColor: 'red',
    fontWeight: 'bold'
  });
  
  $('#produtos').change(function() {
    alert($('#produtos :selected').text());
  });
  
  $('#cabecalho :header').css('background-color', 'yellow');
  
  $('ul#contador :even').css('background-color', 'yellow');
});