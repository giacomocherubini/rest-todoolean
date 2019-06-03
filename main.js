$(document).ready(function()  {

  var url_base = 'http://157.230.17.132:3004/todos';

  $. ajax({
    'url': url_base,
    'method': 'GET',
    'success': function(data) {
      for (var i = 0; i < data.length; i++) {
        $('#azioni_da_fare').append('<li>'+ data[i] + '</li>');
      }
    },
    'error': function() {
      alert('error');
    }
  });
});
