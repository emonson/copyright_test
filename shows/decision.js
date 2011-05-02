function(doc, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });

    var mustache = require("vendor/couchapp/lib/mustache");
    var markdown = require("vendor/couchapp/lib/markdown");
    var html = markdown.encode(doc.content);
    
    var attch = doc._attachments;
    var att_list = [];
    for (var a in attch) {
      var att_url = '../../../../' + doc._id + "/" + a;
      var att_obj = {"att_url":att_url, "att_name":a};
      att_list.push(att_obj);
    }
    
    var data = {
	    "date": doc.date,
	    "type": doc.type,
	    "content": html,
	    "attachments": att_list
    };
        
    return mustache.to_html(this.templates.decision, data);

}