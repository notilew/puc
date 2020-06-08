'use strict';

$(document).ready(function () {
  $('#btn01').click(function () {
    // $('.panel-body').html('<span><strong>Olá</strong> Mundo!</span>');
    // $('.panel-body').text('<span><strong>Olá</strong> Mundo!</span>');
    // $('.panel-body').html($('#p3').html());
    $('.panel-body').html($('#nome').val());
    $('#nome').val('');
  });

  $('#btn02').click(function () {
    var p = $('<p>Meu <strong>novo</strong> parágrafo.</p>');

    $('section#sessao-02 div.col-md-6 button').before(p);
  });

  var img = $('<img>', {
    src: './rock01.png',
    alt: 'IRock',
    title: 'IRock',
    width: '150px',
    height: '150px'
  });

  $('#imagem').html(img);

  $('#email').prop('value', 'wellingtonfelixbhmg@gmail.com');

  $('#sessao-03 div.panel-body').html(
    '<p><strong>attr</strong>: ' + $('#email').attr('value') + '</p>' +
    '<p><strong>prop</strong>: ' + $('#email').prop('value') + '</p>' +
    '<p><strong>val</strong>: ' + $('#email').val() + '</p>'
  );

  $('#sessao-04 p.paragrafos').css('background-color', 'yellow');
  $('#p10').removeAttr('style');
  $('#p7').remove();
  $('#p9').empty();

  $('#p11').replaceWith($('<p>', {
    html: 'Meu novo <strong>décimo primeiro</strong> parágrafo'
  }));

  $('<p>', {
    html: 'Meu novo <strong>décimo segundo</strong> parágrafo'
  }).replaceAll('#p12');

  $('#sessao-06 p.paragrafos06').wrap('<div>').css({
    backgroundColor: 'yellow',
    color: 'white',
    fontWeight: 'bold',
    padding: '15px'
  });
  
  $('[data-css="painel"]')
    .wrap('<div class="panel panel-danger">')
    .before('<div class="panel-heading">Mensagem</div>')
    .wrap('<div class="panel-body">');
  
  $('#paragrafo').addClass('alert alert-success');
});
