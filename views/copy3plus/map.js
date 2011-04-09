function(doc) {
  if (doc.type === "decision" && doc.relevant === true && doc.date && doc.content) {
    var year_str = doc.date.split('-')[0];
    var content_str = doc.content;
    var c_re = new RegExp("copyright", "gi");
    var match_ar = content_str.match(c_re);
    if (match_ar.length >= 3) {
      emit(year_str, 1);
    }
    else {
      emit(year_str, 0);
    }
  }
}
