function(doc) {
  if(doc.date) {
    emit(doc.date.split('-')[0], 1);
  } 
}
