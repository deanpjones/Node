//JAN.4, 2018
//LEARNING NODE.JS (BOOK)
//p.18 (chapter 1)

//HTTP SERVER 

var http = require("http");

var s = http.createServer(function(req, res){
    var body = "Thanks for calling!...Dean\n";
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
});

//run server (port: 8080)
s.listen(8080); 