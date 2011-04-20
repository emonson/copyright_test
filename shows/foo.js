function(doc, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });

    var mustache = require("vendor/couchapp/lib/mustache");
    var data = {
	"title": doc.date,
	"hello": doc.type,
	"world": doc.content
    };
    
    return mustache.to_html(this.templates.moge, data);

}