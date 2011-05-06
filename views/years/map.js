function(doc) {
  if(doc.date && (doc.relevant == true)) {
    emit(doc.date.split('-')[0], 1);
  } 
}
