'use strict';

$(document).ready(function () {
  $('p button').on('click', function() {
    $.get('pagina.html', function(dados) {
      $('.panel-body').html(dados);
    }).done(function() {
      console.log('done');
    }).fail(function() {
      console.log('fail');
    }).always(function() {
      console.log('always');
    });
  });
  
  $('p .btn-default').on('click', function() {
    $('.panel-body').load('pagina.html');
  });
});
