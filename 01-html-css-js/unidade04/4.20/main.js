'use strict';

$(document).ready(function () {
  // $('p').filter('.paragrafos').css('background-color', 'yellow');
  // $('p').has('strong').css('background-color', 'yellow');
  // $('p').filter('.paragrafos').not('#p3').css('background-color', 'yellow');
  /* $('p').each(function() {
    if ($(this).is('.paragrafos')) {
      $(this).css('background-color', 'yellow');
    }
  }); */
  var ids = $('p').map(function() {
    return $(this).attr('id');
  }).toArray().join(', ');
  
  $('div.panel-body').text(ids);
  
  // $('#sessao-02 p').eq(2).css('background-color', 'yellow');
  // $('#sessao-02 p').first().css('background-color', 'yellow');
  // $('#sessao-02 p').last().css('background-color', 'yellow');
  $('#sessao-02 p').slice(3, 6).css('background-color', 'yellow');
  
  $('#sessao-03 p').parent().css({
    border: 'solid thin black',
    padding: '15px',
    margin: '15px 0px'
  });
  
  /* $('#sessao-03 p').parent().css({
    border: 'solid thin black',
    padding: '15px',
    margin: '15px 0px'
  }); */
  
  // $('#sessao-03 p').first().siblings().css('background-color', 'yellow');
  $('#primeira-divisao').children().css('background-color', 'yellow');

  // $('#terceira-divisao').children().add('#sessao-04 h3').add('#sessao-04 h4').css('background-color', 'yellow');

  $('#quarta-divisao')
    .children()
    .add('#sessao-04 h3')
    .add('#sessao-04 h4')
    .css('background-color', 'red')
    .end()
    .css('color', 'white');
});
