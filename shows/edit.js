function(doc, req) {

  var ddoc = this;
  var mustache = require("vendor/couchapp/lib/mustache");
  var path = require("vendor/couchapp/lib/path").init(req);
  var markdown = require("vendor/couchapp/lib/markdown");

  var data = {
    header : {
      appIndex : ddoc.extradata.index,
      appName : ddoc.extradata.name,
      alt_action : "view"
    },
    scripts : {},
    pageTitle : "Decision edit",
    assets : path.asset()
  };
  
  if (doc) {
    var html = markdown.encode(doc.content);
    
    var attch = doc._attachments;
    var att_list = [];
    for (var a in attch) {
      var att_url = '../../../../' + doc._id + "/" + a;
      var att_obj = {"att_url":att_url, "att_name":a};
      att_list.push(att_obj);
    }
    
    data.doc = JSON.stringify(doc);
    data.id = doc._id;
    data.header.id = doc._id;
    data.date = doc.date;
    data.court = doc.court;
    data.type = doc.type;
    data.content = html;
    data.relevant = doc.relevant ? "checked" : "";
    data.attachments = att_list;
  }
      
  return mustache.to_html(ddoc.templates.edit, data, ddoc.templates.partials);
  
}