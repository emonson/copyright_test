function(doc) {
  if(doc.date && doc.court && (doc.relevant == true)) {
    var trans = {
      'Federal':0,
      'First':1,
      'Second':2,
      'Third':3,
      'Fourth':4,
      'Fifth':5,
      'Sixth':6,
      'Seventh':7,
      'Eighth':8,
      'Ninth':9,
      'Tenth':10,
      'Eleventh':11,
      'DC':12,
      'Customs':13,
      'Claims':14
      };

    var year = doc.date.split('-')[0];
    var year_num = parseInt(year);
    if (isNaN(year_num)) {
      year_num = 2020;
    }
    emit([year_num, trans[doc.court]], 1);
  }
}
