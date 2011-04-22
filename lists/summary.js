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
		"date": row.value.date,
	    "type": row.value.type,
	    "content_sub": row.value.summary
	});
    }

    var data = {
		"title": "Decision summaries by date",
		"datalist": datalist
    };

    return mustache.to_html(this.templates.summary, data);

}