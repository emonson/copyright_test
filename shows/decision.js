function(doc, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });

    var mustache = require("vendor/couchapp/lib/mustache");
    var markdown = require("vendor/couchapp/lib/markdown");
    var html = markdown.encode(doc.content);
    
    var data = {
	    "date": doc.date,
	    "type": doc.type,
	    "content": html
    };
    
    return mustache.to_html(this.templates.decision, data);

}