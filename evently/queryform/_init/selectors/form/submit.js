function(e) {
  var query_string = $('input[name=query]', this).val();              
  $(this).trigger('doQuery', query_string);
  $(this).trigger('_init');
  return false;
}