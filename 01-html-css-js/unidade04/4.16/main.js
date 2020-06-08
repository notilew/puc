'use strict';

$(document).ready(function() {
  $('#btn01').click(function() {
    $('.paragrafos').css({
      color: 'white',
      backgroundColor: 'green',
      fontWeight: 'bold',
      padding: '15px',
      borderRadius: '0.5em'
    });
  });
  
  $('#btn02').click(function() {
    $('.paragrafos').css({
      color: 'white',
      backgroundColor: 'red',
      fontWeight: 'bold',
      padding: '15px',
      borderRadius: '0.5em'
    });
  });
});