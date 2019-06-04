$(document).ready(function()  {

  var url_base = 'http://157.230.17.132:3004/todos/';

  stampa_todo();
  // intercetto il click sul punsante per creare una nuova azione da fare
  $('#nuova_azione').click(function() {
    var new_action = $('#testo_azione').val();
    // resetto il l'input
    $('#testo_azione').val('');
    $. ajax({
        'url': url_base,
        'method': 'POST',
        'data': {
        'text': new_action
        },
        'success': function() {
          stampa_todo();
        },
        'error': function() {
          alert('error');
      }
    });
  });

  // intercetto il click sulla X
  $('#azioni_da_fare').on('click', 'li', function() {
    alert('eliminato');
    var id_to_delete = $(this).attr('data-id');
      $. ajax({
          'url': url_base + id_to_delete,
          'method': 'DELETE',
          'success': function() {
            stampa_todo();
          },
          'error': function() {
            alert('error');
        }
      });
  })

  function stampa_todo(data) {
    // svuoto l'html
    $('#azioni_da_fare').html('');
    $. ajax({
      'url': url_base,
      'method': 'GET',
      'success': function(data) {
        for (var i = 0; i < data.length; i++) {
          // creo una variabile per l'id di ogni azione
          var azione = data[i];
          $('#azioni_da_fare').append('<li class="li_azione" data-id="'+azione.id+'">' + '<button class="elimina"> x </button>' + ' ' + data[i].text + '</li>');
        }
      },
      'error': function() {
        alert('error');
      }
    });
  }

});
