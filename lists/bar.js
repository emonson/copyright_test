function(head, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });

    var mustache = require("vendor/couchapp/lib/mustache");
    var datalist = [];

    while(row = getRow()) {
	datalist.push({
		"doc_title": row.value.date,
	    "hello": row.value.type,
	    "world": row.value.content.substring(0,100)
	});
    }

    var data = {
		"title": "Hello World List Overall Title",
		"datalist": datalist
    };

    return mustache.to_html(this.templates.fuga, data);

}