function (e, data) {

  // $.log(JSON.parse(data));
  var jdata = JSON.parse(data);
  for (var i=0; i<jdata.rows.length; i++) {
    var row = jdata.rows[i];
    // $.log(row);
    if (row.id === $$(this).results[i].id) {
      $$(this).results[i].date = row.value.date;
      $$(this).results[i].content = row.value.content.substring(0,80);
    }
    else {
      $.log("PROBLEM -- Non-matching ids!");
    }
  }
  
  // $.log($$(this).results);

  $(this).trigger('result');
}