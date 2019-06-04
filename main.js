$(document).ready(function()  {

  var url_base = 'http://157.230.17.132:3004/todos';

  stampa_todo();

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

  function stampa_todo(data) {
    $('#azioni_da_fare').html('');
    $. ajax({
      'url': url_base,
      'method': 'GET',
      'success': function(data) {
        for (var i = 0; i < data.length; i++) {
          $('#azioni_da_fare').append('<li>'+ data[i].text + '</li>');
        }
      },
      'error': function() {
        alert('error');
      }
    });
  }

});
