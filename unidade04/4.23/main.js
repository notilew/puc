'use strict';

$(document).ready(function () {
  $('#sessao-01 #show').on('click', function() {
    $('#sessao-01 #box').show('fast', function() {
      alert('Show')
    });
  });

  $('#sessao-01 #toggle').on('click', function() {
    $('#sessao-01 #box').toggle(5000, 'swing', function() {
      alert('Toggle');
    });
  });

  $('#sessao-01 #hide').on('click', function() {
    $('#sessao-01 #box').hide(2000, function() {
      alert('Hide');
    });
  });

  /* ============================================================ */

  $('#sessao-02 #fade-in').on('click', function() {
    $('#sessao-02 #box').fadeIn(5000);
  });

  $('#sessao-02 #fade-toggle').on('click', function() {
    $('#sessao-02 #box').fadeToggle(5000);
  });

  $('#sessao-02 #fade-to').on('click', function() {
    $('#sessao-02 #box').fadeTo(5000, 0.3);
  });

  $('#sessao-02 #fade-out').on('click', function() {
    $('#sessao-02 #box').fadeOut(5000);
  });

  /* ============================================================ */

  $('#sessao-03 #slide-down').on('click', function() {
    $('#sessao-03 #box').slideDown(5000);
  });

  $('#sessao-03 #slide-toggle').on('click', function() {
    $('#sessao-03 #box').slideToggle(5000);
  });

  $('#sessao-03 #slide-up').on('click', function() {
    $('#sessao-03 #box').slideUp(5000);
  });

  /* ============================================================ */

  $('#sessao-04 #animate').on('click', function() {
    $('#sessao-04 #box')
      .animate({
        width: '100%'
      }, 3000)
      .delay(2000)
      .animate({
        width: '150px'
      }, 3000);
  });

  $('#sessao-04 #stop').on('click', function() {
    $('#sessao-04 #box').stop();
  });
});
