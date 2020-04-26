'use strict';

$(document).ready(function () {
  $('#sessao-01 .btn-primary').width(200);
  // $('#sessao-01 .btn-primary').innerWidth(200);
  // $('#sessao-01 .btn-primary').outerWidth(200, true);

  $('#sessao-01 .btn-primary').height(200);
  // $('#sessao-01 .btn-primary').innerHeight(200);
  // $('#sessao-01 .btn-primary').outerHeight(200, true);

  /* ==================================================== */

  /* var p = $('#sessao-02 p').position();

  $('#sessao-02 .panel-body').html($('<p>', { text: '(' + p.left + ', ' + p.top + ')' })); */

  var p = $('#sessao-02 p').offset();

  $('#sessao-02 .panel-body').html($('<p>', { text: '(' + p.left + ', ' + p.top + ')' }));
});
