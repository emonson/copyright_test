//This is a simple function that doesn't do anything
//useful, but will work on all CouchDB databases.
function(doc) {
  emit(doc._id, doc);
}
