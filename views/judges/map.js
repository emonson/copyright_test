function(doc) {
  if(doc.judge) {
    emit(doc.judge, 1);
  }
}
