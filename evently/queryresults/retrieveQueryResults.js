function(e, results) {
  var elem = $(this);
  // $.log("retrieving results");
  $.log(results.rows);
  $$(this).num_results = results.rows.length;
  
  // First, just build up a list of ids which match lucene search
  var ids_list = [];
  for (var i=0; i<results.rows.length; i++) {
    var row = results.rows[i];
    ids_list.push(row.id);
    if (row.hasOwnProperty('score')) {
      $$(this).results.push({"id" : row.id, "score" : row.score.toFixed(2)});
    }
    else {
      $$(this).results.push({"id" : row.id, "score" : ""});
    }
  }
  
  var ids_object = { "keys" : ids_list };
  
//  $.post("../../_all_docs?include_docs=true",
//         JSON.stringify(ids_object),
//         function(data) {
//              $.log(data);
//            });
  
  // Then query view for doc info
  // (potentially less returned info than querying _all_docs...)
  $.ajax({
    type: 'POST',
    url: "_view/byid",
    data: JSON.stringify(ids_object),
    success: function(data) {
        elem.trigger("collateQueryResults", data);
       },
    contentType: "application/json"
  });
  
}