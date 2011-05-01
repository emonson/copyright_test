function(doc) {
	if(doc.type == "decision")
	  emit(doc._id, {"date":doc.date, "content":doc.content.substring(0,200)});
}