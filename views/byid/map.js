function(doc) {
  emit(doc._id, {"date":doc.date,
                 "relevant":doc.relevant,
                 "court":doc.court, 
                 "content":doc.content.substring(0,200)});
}