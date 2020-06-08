'use strict';

$(document).ready(function () {
  $(document)
    .on('contextmenu', function(e) {
      e.preventDefault();
    })
    .on('click', function() {
      $('ul.list-group').hide('fast');
    });

  $('#box')
    .on('contextmenu', function(e) {
      e.preventDefault();

      $('ul.list-group').toggle('fast').css({
        left: e.pageX + 'px',
        top: e.pageY + 'px'
      });
    })
    .on('mousedown', function(e) {
      e.stopPropagation();
    })
    .on('click', function(e) {
      $('ul.list-group').hide('fast');
    });

    $('ul.list-group button').on('click', function(e) {
      switch($(this).attr('data-menu')) {
        case 'recortar':
          $('#box').html($('<h2>', { text: 'Recortar' }));
        break;

        case 'copiar':
            $('#box').html($('<h2>', { text: 'Copiar' }));
        break;

        case 'colar':
          $('#box').html($('<h2>', { text: 'Colar' }));
        break;
      }
    });
});
