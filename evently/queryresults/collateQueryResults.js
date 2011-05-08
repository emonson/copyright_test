function (e, data) {

  // $.log(JSON.parse(data));
  var jdata = JSON.parse(data);
  
  var courts = {
                  "First":0,
                  "Second":1,
                  "Third":2,
                  "Fourth":3,
                  "Fifth":4,
                  "Sixth":5,
                  "Seventh":6,
                  "Eighth":7,
                  "Ninth":8,
                  "Tenth":9,
                  "Eleventh":10,
                  "DC":11,
                  "Federal":12,
                  "Customs":13,
                  "Claims":14
                };
  var courts_count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                  
  for (var i=0; i<jdata.rows.length; i++) {
    var row = jdata.rows[i];
    // $.log(row);
    if (row.id === $$(this).results[i].id) {
      $$(this).results[i].date = row.value.date;
      $$(this).results[i].court = row.value.court;
      if (row.value.relevant) {
        courts_count[courts[row.value.court]] += 1;
        $$(this).results[i].relevant = "Relevant";
      }
      else {
        $$(this).results[i].relevant = "";
      }
      $$(this).results[i].content = row.value.content.substring(0,120);
    }
    else {
      $.log("PROBLEM -- Non-matching ids!");
    }
  }
  
  
  // $.log(courts_count);
  $(this).trigger('plotcourts', {counts:courts_count});
  $(this).trigger('result');
}