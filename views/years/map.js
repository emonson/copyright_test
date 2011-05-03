function(doc) {
  if(doc.date && doc.relevant) {
    emit(doc.date.split('-')[0], 1);
  } 
}
