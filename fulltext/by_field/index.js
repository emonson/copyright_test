function(doc) {
  var ret=new Document();
  ret.add(doc.date, {'field':'date'});
  ret.add(((doc.date==undefined)||((doc.date).substring(0,4)==="XXXX"))?"2050-01-01":doc.date, {'field':'decided', 'type':'date'});
  ret.add(doc.content, {'field':'default'});
  ret.add((doc.relevant==undefined)?"false":(doc.relevant).toString(), {'field':'relevant'});
  return ret
}