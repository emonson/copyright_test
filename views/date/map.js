//This is a simple function that doesn't do anything
//useful, but will work on all CouchDB databases.
function(doc) {
  emit(doc.date, {date: doc.date, type: doc.type, summary: doc.content.substring(0,80)});
}
