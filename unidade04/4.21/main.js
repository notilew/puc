'use strict';

$(document).ready(function () {
  $('.btn-default').click(function() {
    $('.panel-body').empty();
  });

  $('#box1')
  .click(function() {
    $('#sessao-01 .panel-body').append($('<p>', { text: 'Clique' }));
  }).dblclick(function() {
    $('#sessao-01 .panel-body').append($('<p>', { text: 'Duplo Clique' }));
  }).mousedown(function() {
    $('#sessao-01 .panel-body').append($('<p>', { text: 'Botão Pressionado' }));
  }).mouseup(function() {
    $('#sessao-01 .panel-body').append($('<p>', { text: 'Botão Solto' }));
  }).mouseover(function(e) {
    $('#sessao-01 .panel-body').append($('<p>', { text: 'MouseOver: ' + e.target.id }));
  }).mouseenter(function(e) {
    $('#sessao-01 .panel-body').append($('<p>', { text: 'MouseEnter: ' + e.target.id }));
  }).mouseout(function(e) {
    $('#sessao-01 .panel-body').append($('<p>', { text: 'MouseOut: ' + e.target.id }));
  }).mouseleave(function(e) {
    $('#sessao-01 .panel-body').append($('<p>', { text: 'MouseLeave:' + e.target.id }));
  }).mousemove(function(e) {
    var posicao = $(this).position();

    $('#box2').html('(' + parseInt(e.pageX - posicao.left) + ', ' + parseInt(e.pageY - posicao.top) + ')');
  }).contextmenu(function(e) {
    e.preventDefault();

    $('#sessao-01 .panel-body').append($('<p>', { text: 'Clique com Botão Direito' }));
  });

  /* ===================================================== */

  $('#nome').keypress(function(e) {
    $('#sessao-02 .panel-body')
      .append($('<p>', { text: 'Tecla Pressionada: ' + String.fromCharCode(e.which) }));
  });

  /* ===================================================== */

  $('#email')
  .focus(function() {
    $(this).css('background-color', 'yellow');
  }).blur(function() {
    $(this).css('background-color', 'white');
  }).change(function() {
    $('#sessao-03 .panel-body').html($('<p>', { text: $(this).val() }));
  }).select(function() {
    $('#sessao-03 .panel-body').html($('<p>', { text: $(this).val() }));
  });

  /* ===================================================== */

  $(window).resize(function() {
    $('#sessao-04 .panel-body').html($('<p>', { text: 'Janela Redimensionada '}));
  }).scroll(function() {
    $('#sessao-04 .panel-body').html($('<p>', { text: 'Janela Rolando' }));
  });

  /* ===================================================== */

  $('#mensagem').on('click', { nome: 'wellington' }, function(e) {
    $('#sessao-06 .panel-body').html($('<p>', { text: 'Clicado por ' + e.data.nome }));
  });

  $('#sessao-06 button').on('click', function() {
    $('#sessao-06 .panel-body').html($('<p>', { text: 'Clique do Botão' }));
  });

  $('#paragrafo').on('click', function() {
    $('#sessao-06 button').trigger('click')
  });

  $(document).on('login', function(e) {
    $('#sessao-06 .panel-body').html($('<p>', { text: 'Usuário: ' + e.usuario + ' Senha: ' + e.senha }));
  });

  $('#sessao-06 button.btn-default').on('click', function() {
    $(document).trigger({
      type: 'login',
      usuario: 'wellington',
      senha: '123'
    });
  });
});
